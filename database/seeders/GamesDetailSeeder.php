<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Libraries\SoccerApi;

class GamesDetailSeeder extends Seeder
{
    /**
     * 試合詳細データを更新する
     *
     * @return void
     */
    public function run()
    {
        // gamesテーブルから重複なしで試合IDを全て取得
        $gameIds = Game::distinct()->pluck('id');
        
        // 各試合IDに対して試合詳細データを取得してデータベースを更新
        foreach($gameIds as $gameId) {
            // SoccerApiから試合詳細データを取得
            $gameDetails = SoccerApi::call_api('fixtures', ['id' => $gameId, 'timezone' => 'Asia%2FTokyo']);
            // 取得した試合詳細データをループしてgamesテーブルを更新
            foreach($gameDetails['response'] as $gameDetail) {
                Game::where('id', $gameId)->update([
                    'json_detail' => $gameDetail,
                ]);
            }
        }
    }
}
