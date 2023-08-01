<?php

namespace Database\Seeders;

use App\Models\League;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LeaguesSeeder extends Seeder
{
    /**
     * leaguesテーブルに欧州5大リーグを登録する
     *
     * @return void
     */
    public function run()
    {
        {
            League::create([
              'id' => '39',
              'name' => 'Premier League',
            ]);
      
            League::create([
              'id' => '140',
              'name' => 'La Liga',
            ]);
      
            League::create([
              'id' => '135',
              'name' => 'Serie A',
            ]);
      
            League::create([
              'id' => '78',
              'name' => 'Bundesliga',
            ]);
      
            League::create([
              'id' => '61',
              'name' => 'Ligue 1',
            ]);
        }
    }
}
