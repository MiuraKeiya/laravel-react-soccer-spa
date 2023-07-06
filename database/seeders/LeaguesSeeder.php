<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\League;

class LeaguesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      {
        League::create([
          'id' => '39',
          'league_name' => 'Premier League',
        ]);
  
        League::create([
          'id' => '140',
          'league_name' => 'La Liga',
        ]);
  
        League::create([
          'id' => '135',
          'league_name' => 'Serie A',
        ]);
  
        League::create([
          'id' => '78',
          'league_name' => 'Bundesliga',
        ]);
  
        League::create([
          'id' => '61',
          'league_name' => 'Ligue 1',
        ]);
      }
    }
}
