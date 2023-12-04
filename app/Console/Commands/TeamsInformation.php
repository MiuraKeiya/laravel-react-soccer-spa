<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Libraries\SoccerApi;
use App\Models\Team;

class TeamsInformation extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:teams-information';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'チームの情報を更新';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        try {
            // トランザクションを開始
            DB::beginTransaction();

            // 処理開始をコンソールに表示
            $this->info('チーム情報バッチを実行中...');

            // シーズンに関する環境変数を取得
            $seasons = config('api.seasons');

            // Teamsテーブルからidとleague_idを重複なく取得
            $teams = Team::select('id', 'league_id')->distinct()->get();

            // チーム情報を格納する配列
            $updateData = [];

            foreach($seasons as $season) {
                foreach ($teams as $team) {
                    $id = $team->id;
                    $leagueId = $team->league_id;

                    // チーム情報を取得
                    $teamInformations = SoccerApi::call_api('teams', ['id' => $id, 'league' => $leagueId, 'season' => $season]);

                    // 配列に追加
                    foreach ($teamInformations['response'] as $teamInfo) {
                        $updateData[] = [
                            'id' => $id,
                            'season' => $season,
                            'json_information' => json_encode($teamInfo),
                        ];
                    }
                }
            }

            // バルク更新
            Team::upsert($updateData, ['id', 'season'], ['json_information']);
            
            // トランザクションをコミット
            DB::commit();

            // 成功メッセージをコンソールに表示
            $this->info('処理が成功しました');

            return Command::SUCCESS;

        } catch (\Exception $e) {
            // エラーをログに記録
            logger()->error($e);

            // エラーが発生した場合はロールバック
            DB::rollBack();

            // 失敗メッセージをコンソールに表示
            $this->info('処理に失敗しました');

            return Command::FAILURE;
        }
    }
}
