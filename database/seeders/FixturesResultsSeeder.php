<?php

namespace Database\Seeders;

use App\Models\FixturesResult;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\League;
use App\Models\Team;
use GuzzleHttp\Client;

class FixturesResultsSeeder extends Seeder
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

        // teamsテーブルからidカラム取得
        $teamIds = Team::pluck('id');

        foreach ($leagueIds as $leagueId) {
            $response = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/fixtures?league={$leagueId}&season=2023&timezone=Asia%2FTokyo",
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );

            // 連想配列に変換
            $results = json_decode($response->getBody(), true);
            
            foreach ($teamIds as $teamId) {
                foreach ($results['response'] as $response) {
                    if ($response['teams']['home']['id'] === $teamId || $response['teams']['away']['id'] === $teamId) {
                        FixturesResult::create([
                            'team_id' => $teamId,
                            'league_id' => $leagueId,
                            'date' => $response['fixture']['date'],
                            'fixture' => $response['fixture']['id'],
                            'json_result' => $response,
                        ]);
                    }
                }
            }
        }
    }
}
