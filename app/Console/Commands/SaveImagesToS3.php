<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

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
    protected $description = '外部APIから選手、チーム、国の画像を取得しS3に保存する';

    /**
     * Execute the console command.
     *
     * @return int 後から編集する
     */
    public function handle()
    {
        Artisan::call('db:seed', [
            '--class' => 'SoccerImagesSeeder',
        ]);

        $this->info('全ての画像がS3に保存されました');
    }
}
