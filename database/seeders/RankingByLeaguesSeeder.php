<?php

namespace Database\Seeders;

use App\Libraries\SoccerApi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\League;
use App\Models\RankingByLeague;

class RankingByLeaguesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // シーズンに関する環境変数を取得し、コレクションに変換
        $seasons = collect(config('api.seasons'));

        // leaguesテーブルから全てのリーグIDを取得
        $leagueIds = League::pluck('id');

        // APIから取得したデータを保存する
        $seasons->each(function($season) use ($leagueIds) {
            $leagueIds->each(function($leagueId) use ($season) {
                // 順位一覧を取得
                $standings = SoccerApi::call_api('standings', ['season' => $season, 'league' => $leagueId]);
                // 得点ランキング一覧を取得
                $scorers = SoccerApi::call_api('players/topscorers', ['season' => $season, 'league' => $leagueId]);
                // アシストランキング一覧を取得
                $assists = SoccerApi::call_api('players/topassists', ['season' => $season, 'league' => $leagueId]);
                // イエローカードランキング一覧を取得
                $yellowCards = SoccerApi::call_api('players/topyellowcards', ['season' => $season, 'league' => $leagueId]);
                // レッドカードランキング一覧を取得
                $redCards = SoccerApi::call_api('players/topredcards', ['season' => $season, 'league' => $leagueId]);
                
                // ranking_by_leaguesテーブルにデータを保存
                RankingByLeague::create([
                    'league_id' => $leagueId,
                    'season' => $season,
                    'json_standings' => $standings,
                    'json_scorer' => $scorers,
                    'json_assist' => $assists,
                    'json_yellow_card' => $yellowCards,
                    'json_red_card' => $redCards,
                ]); 
            });
        });
    }
}
