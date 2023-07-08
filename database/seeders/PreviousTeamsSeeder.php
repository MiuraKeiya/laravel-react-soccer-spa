<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\League;
use App\Models\PreviousTeam;
use GuzzleHttp\Client;

class PreviousTeamsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();

        // Leaguesテーブルからidカラム取得
        $leagueIds = League::pluck('id');

        $teamData = [];

        foreach ($leagueIds as $leagueId) {
          $response = $client->request(
            'GET',
            "https://" . env('API_HOST') . "/v3/teams?league={$leagueId}&season=2022",
            ['headers' => [
                'X-RapidAPI-Host' => env('API_HOST'),
                'X-RapidAPI-Key' => env('API_KEY'),
            ]]
          );

          $teams = json_decode($response->getBody(), true);
          $teamData[] = $teams;
        }
        
        $teams = [];

        foreach ($teamData as $data) {
          $parameters = $data['parameters'];
          $response = $data['response'];
          
          foreach ($response as $item) {
            $team = $item['team'];
            $teams[] = ['parameters' => $parameters, 'team' => $team];
          }
        }
        
        foreach ($teams as $teamData) {
          $leagueId = $teamData['parameters']['league'];
          $teamId = $teamData['team']['id'];
          $teamName = $teamData['team']['name'];

          PreviousTeam::create([
                'id' => $teamId,
                'team_name' => $teamName,
                'league_id' => $leagueId,
            ]);
        }
    }
}
