<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Libraries\SoccerApi;
use App\Models\Game;

class GamesDetail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:game-detail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '試合詳細を更新';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            // トランザクションを開始
            DB::beginTransaction();

            // 処理開始をコンソールに表示
            $this->info('試合詳細バッチを実行中...');

            // 試合IDを最大で500件取得
            $gameIds = Game::where('json_detail', '')
                ->take(500)
                ->distinct()
                ->pluck('id')
                ->toArray();

            // 全て更新済みの場合の処理
            if (empty($gameIds)) {
                $this->info('該当する試合IDがありません');
                return Command::SUCCESS; 
            }

            // 試合IDを5個のチャンクに分割
            $chunks = array_chunk($gameIds, ceil(count($gameIds) / 5));

            // バルク更新のためのデータを格納する配列
            $bulkUpdateData = [];

            // 各試合IDに対して試合詳細データを取得
            foreach ($chunks as $chunk) {
                foreach ($chunk as $gameId) {
                    // SoccerApiから試合詳細データを取得
                    $gameDetails = SoccerApi::call_api('fixtures', ['id' => $gameId, 'timezone' => 'Asia/Tokyo']);

                    // バルク更新のためのデータを配列に追加、ホームチーム
                    $bulkUpdateData[] = [
                        'id' => $gameId,
                        'team_id' => $gameDetails['response'][0]['teams']['home']['id'],
                        'json_detail' => json_encode($gameDetails['response'][0]),
                    ];

                    // バルク更新のためのデータを配列に追加、アウェイチーム
                    $bulkUpdateData[] = [
                        'id' => $gameId,
                        'team_id' => $gameDetails['response'][0]['teams']['away']['id'],
                        'json_detail' => json_encode($gameDetails['response'][0]),
                    ];
                }

                // チャンクごとにバルク更新
                Game::upsert($bulkUpdateData, ['id', 'team_id'], ['json_detail']);
            }

            // トランザクションをコミット
            DB::commit();

            // 成功メッセージをコンソールに表示
            $this->info('処理が成功しました');

            return Command::SUCCESS;

        } catch (\Exception $e) {
            // エラーをログに記録
            logger()->error('ERROR: ' . $e);

            // エラーが発生した場合はロールバック
            DB::rollBack();

            // 失敗メッセージをコンソールに表示
            $this->info('処理に失敗しました');

            return Command::FAILURE;
        }
    }
}
