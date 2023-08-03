<?php

namespace App\Libraries;

use GuzzleHttp\Client;

class SoccerApi
{
    /**
     * APIエンドポイントにリクエストを送信して、APIからのレスポンスを取得する
     * 
     * @param string $endpoint APIエンドポイント名（例: "players"）
     * @param array $params リクエストパラメーターの連想配列
     * @return array APIからのレスポンスを連想配列として返す
     */
    public static function call_api($endpoint, $params = [])
    {
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
}