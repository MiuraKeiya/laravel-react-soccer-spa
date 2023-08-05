<?php

namespace Database\Seeders;

use App\Consts\SoccerApiConst;
use App\Libraries\SoccerApi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use GuzzleHttp\Client;
use App\Models\League;
use App\Models\Player;
use App\Models\Team;

class PlayersSeeder extends Seeder
{
    /**
     * 各リーグに対してプレイヤーデータを取得し、保存するメソッド
     *
     * @return void
     */
    public function run()
    {
        // Leaguesテーブルからidカラムを取得
        $leagueIds = League::pluck('id');

        // シーズンに関する環境変数を取得
        $seasons = collect(config('api.seasons'));

        /**
         * 指定されたリーグとシーズンにおけるプレイヤーのデータをページングを考慮して全て取得する
         * すべてのデータを取得するために呼び出すページが複数ある場合に自動的に検出する再帰関数
         * 
         * @param string $leagueId リーグID
         * @param string $season シーズン
         * @param int $page ページ番号（デフォルト値: 1）
         * @param array $players_data プレイヤーデータを格納する配列(初期値: 空の配列)
         * @return array プレイヤーデータを連結した配列を返す
         */
        function players_data($leagueId, $season, $page = SoccerApiConst::DEFAULT_PAGE, $players_data = []): array 
        {
            // call_api関数を使用して指定されたリーグとシーズンにおけるプレイヤーデータを取得
            $players = SoccerApi::call_api('players', ['league' => $leagueId, 'season' => $season, 'page' => $page]);

            // 取得したプレイヤーデータを既存の$players_data配列に結合
            $players_data = array_merge($players_data, $players['response']);
        
            // 現在のページ番号が総ページ数未満であれば、次のページのデータを取得する再帰呼び出し
            if ($players['paging']['current'] < $players['paging']['total']) {
        
                $page = $players['paging']['current'] + SoccerApiConst::NEXT_PAGE;

                // 再帰呼び出しで次のページのプレイヤーデータを取得し、$players_data配列に結合
                $players_data = players_data($leagueId, $season, $page, $players_data);
            }

            // ページングを考慮して全てのプレイヤーデータを連結した配列を返す
            return $players_data;
        }

        // シーズン別、リーグ別にプレイヤーデータを取得して保存する
        $seasons->each(function ($season) use ($leagueIds) {
            $leagueIds->each(function ($leagueId) use ($season) {

                // プレイヤーデータを取得
                $players = collect(players_data($leagueId, $season));

                // 取得したプレイヤーデータをループして保存する
                $players->each(function ($player) use ($season) {

                    // 保存するチームのidであるteam_idがteamsテーブルに存在するかどうかを調べる
                    $teamExists = Team::where('id', $player['statistics'][0]['team']['id'])
                    ->where('season', $season)
                    ->exists();

                    // teamsテーブルに保存するチームIdが存在した場合に保存する
                    if ($teamExists) {
                        Player::create([
                            'api_player_id' => $player['player']['id'],
                            'name' => $player['player']['name'],
                            'team_id' => $player['statistics'][0]['team']['id'],
                            'league_id' => $player['statistics'][0]['league']['id'],
                            'season' => $season,
                            'json_statistics' => $player,
                        ]);
                    }
                });
            });
        });
    }
}
