<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Libraries\SoccerApi;
use App\Models\League;
use App\Models\RankingByLeague;

class RankingByLeagues extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:ranking-leagues';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '各ランキングを保存';

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
            $this->info('ランキングバッチを実行中...');

            // シーズンに関する環境変数を取得し、コレクションに変換
            $seasons = collect(config('api.seasons'));

            // leaguesテーブルから全てのリーグIDを取得
            $leagueIds = League::pluck('id');

            // ランキングデータを格納する配列
            $rankingsData = [];

            // APIから取得したデータを保存する
            $seasons->each(function($season) use ($leagueIds, &$rankingsData) {
                $leagueIds->each(function($leagueId) use ($season, &$rankingsData) {
                    // 順位一覧を取得
                    $standings = SoccerApi::call_api('standings', ['season' => $season, 'league' => $leagueId]);
                    // 得点ランキング一覧を取得
                    $scorers = SoccerApi::call_api('players/topscorers', ['season' => $season, 'league' => $leagueId]);
                    // アシストランキング一覧を取得
                    $assists = SoccerApi::call_api('players/topassists', ['season' => $season, 'league' => $leagueId]);
                    // イエローカードランキング一覧を取得
                    $yellowCards = SoccerApi::call_api('players/topyellowcards', ['season' => $season, 'league' => $leagueId]);
                    // レッドカードランキング一覧を取得
                    $redCards = SoccerApi::call_api('players/topredcards', ['season' => $season, 'league' => $leagueId]);
                    
                    // 配列に追加
                    $rankingsData[] = [
                        'league_id' => $leagueId,
                        'season' => $season,
                        'json_standings' => json_encode($standings),
                        'json_scorer' => json_encode($scorers),
                        'json_assist' => json_encode($assists),
                        'json_yellow_card' => json_encode($yellowCards),
                        'json_red_card' => json_encode($redCards),
                    ];
                });
            });
            
            // バルク処理
            RankingByLeague::insert($rankingsData);

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
