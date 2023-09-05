<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Team;
use App\Libraries\SoccerApi;

class TeamsStatisticsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // チームID、リーグID、シーズンを全て取得
        $teams = Team::select('id', 'league_id', 'season')->get();

        foreach ($teams as $team) {
            $teamId = $team->id;
            $leagueId = $team->league_id;
            $season = $team->season;

            $statistics = SoccerApi::call_api('teams/statistics', ['league' => $leagueId, 'season' => $season, 'team' => $teamId]);

            Team::where([
                'id' => $teamId,
                'league_id' => $leagueId,
                'season' => $season,
            ])->update([
                'json_statistics' => $statistics['response'],
            ]);
        }
    }
}