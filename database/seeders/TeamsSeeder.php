<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\League;
use App\Models\Team;
use GuzzleHttp\Client;

class TeamsSeeder extends Seeder
{
    /**
     * リーグごとにチームを保存する
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();

        // Leaguesテーブルからidカラム取得
        $leagueIds = League::pluck('id');

        $season = env('SEASON');
        $previousSeason = env('PREVIOUSE_SEASON');

        foreach($leagueIds as $leagueId)
        {
            $response = $client->request(
              'GET',
              "https://" . env('API_HOST') . "/v3/teams?league={$leagueId}&season={$season}",
              ['headers' => [
                  'X-RapidAPI-Host' => env('API_HOST'),
                  'X-RapidAPI-Key' => env('API_KEY'),
              ]]
            );

            $teams = json_decode($response->getBody(), true);

            foreach($teams['response'] as $team)
            {
                Team::create([
                    'id' => $team['team']['id'],
                    'name' => $team['team']['name'],
                    'league_id' => $leagueId,
                    'season' => $season,
                    'json_information' => '',
                    'json_statistics' => '',
                    'json_transfer' => '',
                ]);
            }
        }
    }
}
