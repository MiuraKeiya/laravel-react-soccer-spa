<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;
use App\Models\Team;
use App\Models\Player;
use App\Models\League;

class SaveImagesToS3 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:save-soccer-to-s3';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '外部APIから選手、チーム、国の画像を取得しS3にアップロードする';

    /**
     * 外部APIから画像を取得してS3にアップロードする処理を行う
     *
     * @param string $type 画像の種類（例: teams, players, leagues, country）
     * @param array $ids 画像のID配列
     * @param string $baseUrl 画像のベースURL
     * @param string $extension 画像の拡張子（例: png, svg）
     *
     * @return void
     */
    private function processImages(string $type, array $ids, string $baseUrl, string $extension): void
    {
        $client = new Client();

        foreach ($ids as $id) {
            // 外部APIから画像を取得
            $response = $client->request('GET', "{$baseUrl}{$id}.{$extension}");
            $imageData = $response->getBody()->getContents();

            // S3にファイルを保存
            $path = Storage::disk('s3')->put("$type/{$id}.$extension", $imageData);

            // アップロードが成功したかをログに記録
            if ($path) {
                logger("$type 成功: " . $path);
            } else {
                logger("$type 失敗.");
            }
        }
    }


    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $client = new Client();

        // チームテーブルから全てのIDを重複なく取得
        $teamIds = Team::distinct()->pluck('id');

        // 選手テーブルから全てのIDを重複なく取得
        $playerIds = Player::distinct()->pluck('api_player_id');

        // リーグテーブルから全てのidを取得
        $leagueIds = League::pluck('id');

        // 国コード
        $countryCodes = ['de', 'gb', 'fr', 'it', 'es'];

        // 国コードと対応するリーグIDのマッピング
        $countryLeagueMapping = [
            'de' => 78,
            'gb' => 39, 
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

        return Command::SUCCESS;
    }
}
