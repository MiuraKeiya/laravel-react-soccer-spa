<?php

namespace Database\Seeders;

use App\Consts\SoccerApiConst;
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

        // 現在のシーズンと前シーズンを取得
        $season = config('api.season');
        $previousSeason = config('api.previouse_season');

        /**
         * APIエンドポイントにリクエストを送信して、APIからのレスポンスを取得する
         * 
         * @param string $endpoint APIエンドポイント名（例: "players"）
         * @param array $params リクエストパラメーターの連想配列
         * @return array APIからのレスポンスを連想配列として返す
         */
        function call_api($endpoint, $params = []) {

            $client = new Client();

            $parameters = '';
            if (count($params) > 0) {
                // リクエストパラメーターがあれば、URLにクエリ文字列として結合
                $parameters = '?'.http_build_query($params);
            }
            
            // APIエンドポイントにGETリクエストを送信
            $response = $client->request(
                'GET',
                "https://" . config('api.api_host') . "/v3/" . $endpoint . $parameters,
                ['headers' => [
                    'X-RapidAPI-Host' => config('api.api_host'),
                    'X-RapidAPI-Key' => config('api.api_key'),
                ]]
            );

            // APIからのレスポンスをJSON形式から連想配列に変換
            $response = json_decode($response->getBody(), true);

            return $response;
        }

        /**
         * 指定されたリーグとシーズンにおけるプレイヤーのデータをページングを考慮して全て取得する
         * すべてのデータを取得するために呼び出すページが複数ある場合に自動的に検出する再帰関数
         * 
         * @param string $league リーグ名
         * @param string $season シーズン
         * @param int $page ページ番号（デフォルト値: 1）
         * @param array $players_data プレイヤーデータを格納する配列(初期値: 空の配列)
         * @return array プレイヤーデータを連結した配列を返す
         */
        function players_data($league, $season, $page = SoccerApiConst::DEFAULT_PAGE, $players_data = []) {

            // call_api関数を使用して指定されたリーグとシーズンにおけるプレイヤーデータを取得
            $players = call_api('players', ['league' => $league, 'season' => $season, 'page' => $page]);

            // 取得したプレイヤーデータを既存の$players_data配列に結合
            $players_data = array_merge($players_data, $players['response']);
        
            // 現在のページ番号が総ページ数未満であれば、次のページのデータを取得する再帰呼び出し
            if ($players['paging']['current'] < $players['paging']['total']) {
        
                $page = $players['paging']['current'] + SoccerApiConst::NEXT_PAGE;

                // 再帰呼び出しで次のページのプレイヤーデータを取得し、$players_data配列に結合
                $players_data = players_data($league, $season, $page, $players_data);
            }

            // ページングを考慮して全てのプレイヤーデータを連結した配列を返す
            return $players_data;
        }

        // 各リーグごとに、プレイヤーデータを取得して保存する
        foreach($leagueIds as $leagueId)
        {
            // 各リーグに対してプレイヤーデータを取得
            $players = players_data($leagueId, $season);

            // 取得したプレイヤーデータをループして保存する
            foreach ($players as $player)
            {
                // 保存するチームのidであるteam_idがteamsテーブルに存在するかどうかを調べる
                $teamExists = Team::where('id', $player['statistics'][0]['team']['id'])
                ->where('season', $season)
                ->exists();

                // teamsテーブルに保存するチームIdが存在した場合に保存する
                if ($teamExists) {
                    Player::create([
                        'id' => $player['player']['id'],
                        'name' => $player['player']['name'],
                        'team_id' => $player['statistics'][0]['team']['id'],
                        'league_id' => $player['statistics'][0]['league']['id'],
                        'season' => $season,
                        'json_statistics' => $player,
                    ]);
                }
            }
        }
    }
}
