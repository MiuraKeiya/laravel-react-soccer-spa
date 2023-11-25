<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;
use App\Models\Team;
use App\Models\Player;
use App\Models\League;

class SoccerImagesSeeder extends Seeder
{
    /**
     * 選手、チーム、国の画像をS3に保存する
     * 画像は外部APIから取得する
     * 
     * @return void
     */
    public function run()
    {
        $client = new Client();

        // チームテーブルから全てのIDを重複なく取得
        $teamIds = Team::distinct()->pluck('id');

        // 選手テーブルから全てのIDを重複なく取得
        $playerIds = Player::distinct()->pluck('api_player_id');

        // リーグテーブルから全てのidを取得
        $leagueIds = League::pluck('id');

        // 国コード
        $countryCodes = ['de', 'gd', 'fr', 'it', 'es'];

        // 国コードと対応するリーグIDのマッピング
        $countryLeagueMapping = [
            'de' => 78,
            'gd' => 39, 
            'fr' => 61,
            'it' => 135,
            'es' => 140,
        ];

        // チーム画像を取得しS3へ保存
        foreach($teamIds as $teamId)
        {
            // チーム画像を取得
            $response = $client->request(
                'GET',
                "https://media-2.api-sports.io/football/teams/{$teamId}.png"
            );

            // レスポンスのボディを取得
            $imageData = $response->getBody()->getContents();

            // S3にファイルを保存
            $path = Storage::disk('s3')->put("teams/{$teamId}.png", $imageData);

            // アップロードが成功したらログに記録
            if ($path) {
                logger("チーム成功: " . $path);
            } else {
                logger("チーム失敗.");
            }
        }

        // 選手画像を取得しS3へ保存
        foreach($playerIds as $playerId)
        {
            // 選手画像を取得
            $response = $client->request(
                'GET',
                "https://media-2.api-sports.io/football/players/{$playerId}.png"
            );

            // レスポンスのボディを取得
            $imageData = $response->getBody()->getContents();

            // S3にファイルを保存
            $path = Storage::disk('s3')->put("players/{$playerId}.png", $imageData);

            // アップロードが成功したらログに記録
            if ($path) {
                logger("選手成功: " . $path);
            } else {
                logger("選手失敗.");
            }
        }

        // リーグ画像を取得しS3へ保存
        foreach($leagueIds as $leagueId)
        {
            // リーグ画像を取得
            $response = $client->request(
                'GET',
                "https://media-2.api-sports.io/football/leagues/{$leagueId}.png"
            );

            // レスポンスのボディを取得
            $imageData = $response->getBody()->getContents();

            // S3にファイルを保存
            $path = Storage::disk('s3')->put("leagues/{$leagueId}.png", $imageData);

            // アップロードが成功したらログに記録
            if ($path) {
                logger("リーグ成功: " . $path);
            } else {
                logger("リーグ失敗.");
            }
        }

        // 国画像を取得しS3へ保存
        foreach($countryCodes as $code)
        {
            // 国コードに対応するリーグIDを取得
            $leagueId = $countryLeagueMapping[$code];

            if ($leagueId) {
                // 国画像を取得
                $response = $client->request(
                    'GET',
                    "https://media-2.api-sports.io/flags/{$code}.svg"
                );

                // レスポンスのボディを取得
                $imageData = $response->getBody()->getContents();

                // S3にファイルを保存
                $path = Storage::disk('s3')->put("country/{$leagueId}.svg", $imageData);

                // アップロードが成功したらログに記録
                if ($path) {
                    logger("国成功: " . $path);
                } else {
                    logger("国失敗.");
                }
            }
        }
    }
}
