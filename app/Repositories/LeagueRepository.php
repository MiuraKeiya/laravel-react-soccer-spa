<?php

namespace App\Repositories;

use App\Models\FavoriteLeague;
use App\Models\League;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LeagueRepository  
{
    /**
     * 試合日程・結果を取得
     * 
     */
    public function matchSchedule()
    {
        $results = DB::table('fixtures_results')
        ->select('json_result')
        ->selectSub(function ($query) {
            $query->selectRaw('ROW_NUMBER() OVER (PARTITION BY league_id ORDER BY date ASC)')
                ->from('fixtures_results')
                ->whereColumn('fixtures_results.league_id', '=', 'league_id')
                ->orderBy('date', 'ASC');
        }, 'row_num')
        ->whereRaw('row_num <= 10')
        ->paginate(10);
    }
}