<?php

namespace Database\Seeders;

use App\Models\Season;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeasonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $season = env('SEASON');
        $previousSeason = env('PREVIOUSE_SEASON');

        // Seasonモデルを使ってデータを保存
        Season::create(['season' => $season]);
        Season::create(['season' => $previousSeason]);
    }
}
