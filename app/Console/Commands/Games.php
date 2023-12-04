<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Libraries\SoccerApi;
use App\Models\Game;
use App\Models\League;
use App\Models\Team;

class Games extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:games';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '試合を保存';

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
            $this->info('試合バッチを実行中...');

            // シーズンに関する環境変数を取得
            $seasons = config('api.seasons');

            // leaguesテーブルから全てのリーグIDを取得
            $leagueIds = League::pluck('id');

            // teamsテーブルからidとseasonの組み合わせを全て取得
            $teams = Team::select('id', 'season')->get();

            // バルク挿入のためのデータを格納する配列
            $bulkInsertData = [];


            foreach ($seasons as $season) {
                foreach ($leagueIds as $leagueId) {
                    // SoccerApiからリーグとシーズンに対する試合データを取得する
                    $games = SoccerApi::call_api('fixtures', ['league' => $leagueId, 'season' => $season, 'timezone' => 'Asia/Tokyo']);
                    
                    foreach ($games['response'] as $game) {
                        foreach ($teams as $team) {
                            if (($game['teams']['home']['id'] === $team->id || $game['teams']['away']['id'] === $team->id)
                                && $game['league']['season'] === $team->season
                            ) {
                                // バルク挿入のためのデータを追加
                                $bulkInsertData[] = [
                                    'id' => $game['fixture']['id'],
                                    'team_id' => $team->id,
                                    'league_id' => $leagueId,
                                    'season' => $season,
                                    'date' => (new \DateTime($game['fixture']['date']))->format('Y-m-d'),
                                    'json_detail' => json_encode(''),
                                ];
                            }
                        }
                    }
                }
            }

            // バルク挿入
            Game::insert($bulkInsertData);

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
