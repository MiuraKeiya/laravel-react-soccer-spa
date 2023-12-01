<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Libraries\SoccerApi;
use App\Models\Team;


class TeamsStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:teams-statistics';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'チーム統計を更新';

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
            $this->info('チーム統計バッチを実行中...');

            // チームID、リーグID、シーズンを全て取得
            $teams = Team::select('id', 'league_id', 'season')->get();

            // チーム情報を格納する配列
            $updateData = [];

            foreach ($teams as $team) {
                $teamId = $team->id;
                $leagueId = $team->league_id;
                $season = $team->season;

                // チーム統計を取得
                $statistics = SoccerApi::call_api('teams/statistics', ['league' => $leagueId, 'season' => $season, 'team' => $teamId]);

                // 配列に追加
                $updateData[] = [
                    'id' => $teamId,
                    'season' => $season,
                    'json_statistics' => json_encode($statistics['response']),
                ];
            }

            // バルク更新
            Team::upsert($updateData, ['id', 'season'], ['json_statistics']);

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
