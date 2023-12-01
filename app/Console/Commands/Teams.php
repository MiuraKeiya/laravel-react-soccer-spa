<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Libraries\SoccerApi;
use App\Models\League;
use App\Models\Team;
use Exception;

class Teams extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:teams';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'チームをDBに保存する';

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
            $this->info('チームバッチを実行中...');

            // Leaguesテーブルから全てのIDを取得
            $leagueIds = League::pluck('id');

            // シーズンに関する環境変数を取得
            $seasons = config('api.seasons');

            // チームデータを格納するための配列
            $teamsData = [];

            foreach($seasons as $season) {
                foreach($leagueIds as $leagueId) {
                    // 指定されたリーグとシーズンにおけるチームを取得
                    $teams = SoccerApi::call_api('teams', ['league' => $leagueId, 'season' => $season]);
        
                    // チームデータを配列に追加
                    foreach ($teams['response'] as $team) {
                        $teamsData[] = [
                            'id' => $team['team']['id'],
                            'name' => $team['team']['name'],
                            'league_id' => $leagueId,
                            'season' => $season,
                            'json_information' => json_encode(''),
                            'json_statistics' => json_encode(''),
                        ];
                    }
                }
            }

            // バルク処理
            Team::insert($teamsData);

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
