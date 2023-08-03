<?php

namespace Database\Seeders;

use App\Libraries\SoccerApi;
use App\Models\Game;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\League;
use App\Models\Team;

class GamesSeeder extends Seeder
{
    /**
     * 試合データを保存する
     *
     * @return void
     */
    public function run()
    {   
        // シーズンに関する環境変数を取得
        $seasons = config('api.seasons');

        // leaguesテーブルから全てのリーグIDを取得
        $leagueIds = League::pluck('id');

        // teamsテーブルからidとseasonの組み合わせを全て取得
        $teams = Team::select('id', 'season')->get();

        // 各シーズンと各リーグに対して試合データを取得してデータベースに保存する
        foreach ($seasons as $season) {
            foreach ($leagueIds as $leagueId) {
                // SoccerApiからリーグとシーズンに対する試合データを取得する
                $games = SoccerApi::call_api('fixtures', ['league' => $leagueId, 'season' => $season, 'timezone' => 'Asia%2FTokyo']);
                foreach ($games['response'] as $game) {
                    foreach ($teams as $team) {
                        if ($game['teams']['home']['id'] === $team->id && $game['league']['season'] === $team->season) {
                            // 試合データをデータベースに保存
                            Game::create([
                                'id' => $game['fixture']['id'],
                                'team_id' => $team->id,
                                'league_id' => $leagueId,
                                'season' => $season,
                                'date' => (new \DateTime($game['fixture']['date']))->format('Y-m-d'), // 日付を変換して保存,
                                'json_detail' => '',
                            ]);
                        }
                        if ($game['teams']['away']['id'] === $team->id && $game['league']['season'] === $team->season) {
                            // 試合データをデータベースに保存
                            Game::create([
                                'id' => $game['fixture']['id'],
                                'team_id' => $team->id,
                                'league_id' => $leagueId,
                                'season' => $season,
                                'date' => (new \DateTime($game['fixture']['date']))->format('Y-m-d'), // 日付を変換して保存,
                                'json_detail' => '',
                            ]);
                        }
                    }
                }
            }
        }
    }
}
