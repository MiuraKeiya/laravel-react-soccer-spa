<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Consts\SoccerApiConst;
use App\Libraries\SoccerApi;
use App\Models\League;
use App\Models\Player;
use App\Models\Team;

class Players extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:players';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '選手を保存';

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
            $this->info('選手バッチを実行中...');

            // Leaguesテーブルからidカラムを取得
            $leagueIds = League::pluck('id');

            // Teamテーブルから全てのidとseasonを取得
            $teamsData = Team::select('id', 'season')->get();

            // シーズンに関する環境変数を取得
            $seasons = collect(config('api.seasons'));

            // 選手データを格納する配列
            $playersData = [];

            // シーズン別、リーグ別にプレイヤーデータを取得して保存する
            $seasons->each(function ($season) use ($leagueIds, $teamsData, &$playersData) {
                $leagueIds->each(function ($leagueId) use ($season, $teamsData, &$playersData) {

                    // プレイヤーデータを取得
                    $players = collect(SoccerApi::players_data($leagueId, $season));

                    // 取得したプレイヤーデータをループして保存する
                    $players->each(function ($player) use ($season, $teamsData, &$playersData) {

                        // 保存するチームのidであるteam_idがteamsテーブルに存在するかどうかを調べる
                        $teamExists = $teamsData->contains(function ($team) use ($player, $season) {
                            return $team->id == $player['statistics'][0]['team']['id'] && $team->season == $season;
                        });

                        // 既存のデータに同じ組み合わせが存在するか確認
                        $existingCombination = collect($playersData)->first(function ($existingPlayer) use ($player, $season) {
                            return $existingPlayer['api_player_id'] == $player['player']['id'] && $existingPlayer['season'] == $season;
                        });

                        // 配列に追加
                        if ($teamExists && !$existingCombination) {
                            $playersData[] = [
                                'api_player_id' => $player['player']['id'],
                                'name' => $player['player']['name'],
                                'team_id' => $player['statistics'][0]['team']['id'],
                                'league_id' => $player['statistics'][0]['league']['id'],
                                'season' => $season,
                                'json_statistics' => json_encode($player),
                            ];
                        }
                    });
                });
            });

            // バルク処理
            Player::insert($playersData);

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
