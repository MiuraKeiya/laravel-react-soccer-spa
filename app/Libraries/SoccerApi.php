<?php

namespace App\Libraries;

use GuzzleHttp\Client;
use App\Consts\SoccerApiConst;

class SoccerApi
{
    /**
     * APIエンドポイントにリクエストを送信して、APIからのレスポンスを取得する
     * 
     * @param string $endpoint APIエンドポイント名（例: "players"）
     * @param array $params リクエストパラメーターの連想配列
     * @return array APIからのレスポンスを連想配列として返す
     */
    public static function call_api(string $endpoint, array $params = []): array
    {
        try {
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

        } catch (\Exception $e) {
            // エラーをログに記録
            logger()->error('APIコール中にエラーが発生しました: ' . $e);

            throw $e;
        }
    }

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
    public static function players_data($leagueId, $season, $page = SoccerApiConst::DEFAULT_PAGE, $players_data = []): array 
    {
        try {
            // call_api関数を使用して指定されたリーグとシーズンにおけるプレイヤーデータを取得
            $players = self::call_api('players', ['league' => $leagueId, 'season' => $season, 'page' => $page]);

            // 取得したプレイヤーデータを既存の$players_data配列に結合
            $players_data = array_merge($players_data, $players['response']);
        
            // 現在のページ番号が総ページ数未満であれば、次のページのデータを取得する再帰呼び出し
            if ($players['paging']['current'] < $players['paging']['total']) {

                $page = $players['paging']['current'] + SoccerApiConst::NEXT_PAGE;

                // 再帰呼び出しで次のページのプレイヤーデータを取得し、$players_data配列に結合
                $players_data = self::players_data($leagueId, $season, $page, $players_data);
            }

            // ページングを考慮して全てのプレイヤーデータを連結した配列を返す
            return $players_data;

        } catch (\Exception $e) {
            // エラーをログに記録
            logger()->error('プレイヤーデータ取得中にエラーが発生しました: ' . $e);

            throw $e;
        }
    }
}