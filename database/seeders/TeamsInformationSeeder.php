<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Team;
use GuzzleHttp\Client;

class TeamsInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();
        
        $season = env('SEASON');
        $previousSeason = env('PREVIOUSE_SEASON');

        // Teamモデルを使ってidとleague_idのデータを取得
        $teams = Team::select('id', 'league_id')->get();

        foreach ($teams as $team) {
          $id = $team->id;
          $leagueId = $team->league_id;

          $response = $client->request(
            'GET',
            "https://" . env('API_HOST') . "/v3/teams?id={$id}&league={$leagueId}&season={$season}",
            ['headers' => [
                'X-RapidAPI-Host' => env('API_HOST'),
                'X-RapidAPI-Key' => env('API_KEY'),
            ]]
          );

          $teamsInformation = json_decode($response->getBody(), true);

          foreach($teamsInformation['response'] as $team)
            {
                Team::where('id', $id)
                ->where('season', $season)
                ->update(['json_information' => $team]);
            }
      }
    }
}
