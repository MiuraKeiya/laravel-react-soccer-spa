<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\League;

class Leagues extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'batch:leagues';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'リーグをDBに保存する';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        try {
            // 処理開始をコンソールに表示
            $this->info('リーグバッチを実行中...');

            $leaguesData = [
              ['id' => '39', 'name' => 'Premier League'],
              ['id' => '140', 'name' => 'La Liga'],
              ['id' => '135', 'name' => 'Serie A'],
              ['id' => '78', 'name' => 'Bundesliga'],
              ['id' => '61', 'name' => 'Ligue 1'],
            ];

            League::insert($leaguesData);

            // 成功メッセージをコンソールに表示
            $this->info('処理に成功しました');

            return Command::SUCCESS;

        } catch (\Exception $e) {
            // エラーをログに記録
            logger()->error($e);

            // 失敗メッセージをコンソールに表示
            $this->info('処理に失敗しました');

            return Command::FAILURE;
        }
    }
}
