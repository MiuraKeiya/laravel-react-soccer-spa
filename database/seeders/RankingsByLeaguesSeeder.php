<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use GuzzleHttp\Client;
use App\Models\League;
use App\Models\RankingByLeague;
use App\Models\Season;

class RankingsByLeaguesSeeder extends Seeder
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
        
        // 環境変数
        $seasonEnv = env('SEASON');

        // seasonsテーブルから環境変数に該当するseasonのレコードを取得
        $seasonRecord = Season::where('season', $seasonEnv)->first();

        // 取得したId
        $seasonId = $seasonRecord->id;

        //取得したseasonカラムの値
        $season = $seasonRecord->season;

        foreach ($leagueIds as $leagueId) {
            // チーム順位
            $teamStandingsResponse = $client->request(
              'GET',
              "https://" . env('API_HOST') . "/v3/standings?season={$seasonEnv}&league={$leagueId}",
              ['headers' => [
                  'X-RapidAPI-Host' => env('API_HOST'),
                  'X-RapidAPI-Key' => env('API_KEY'),
              ]]
            );

            // 得点
            $scorersResponse = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/players/topscorers?league={$leagueId}&season={$seasonEnv}",
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );

            // アシスト
            $assistsResponse = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/players/topassists?league={$leagueId}&season={$seasonEnv}",
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );
            
            // イエローカード
            $yellowCardsResponse = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/players/topyellowcards?league={$leagueId}&season={$seasonEnv}",
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );

            // レッドカード
            $redCardsResponse = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/players/topredcards?league={$leagueId}&season={$seasonEnv}",
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );

            // 連想配列に変換
            $teamStandingsData = json_decode($teamStandingsResponse->getBody(), true);
            $scorersData = json_decode($scorersResponse->getBody(), true);
            $assistsData = json_decode($assistsResponse->getBody(), true);
            $yellowCardsData = json_decode($yellowCardsResponse->getBody(), true);
            $redCardsData = json_decode($redCardsResponse->getBody(), true);

            // ranking_by_leaguesテーブルにデータを保存
            RankingByLeague::create([
                'season_id' => $seasonId,
                'league_id' => $leagueId,
                'json_team_ranking' => $teamStandingsData,
                'json_scorer_ranking' => $scorersData,
                'json_assist_ranking' => $assistsData,
                'json_yellow_ranking' => $yellowCardsData,
                'json_red_ranking' => $redCardsData,
            ]); 
        }
    }
}
