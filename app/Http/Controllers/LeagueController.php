<?php

namespace App\Http\Controllers;

use App\Models\FavoriteLeague;
use App\Models\FixturesResult;
use App\Services\LeagueService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeagueController extends Controller
{
    private $leagueService;

    public function __construct(LeagueService $leagueService)
    {
      $this->leagueService = $leagueService;
    }

    public function matchSchedule()
    {
        $results = DB::table('fixtures_results')
        ->select('json_result')
        ->selectSub(function ($query) {
            $query->selectRaw('ROW_NUMBER() OVER (PARTITION BY league_id ORDER BY date ASC)');
        }, 'row_num')
        ->whereRaw('(SELECT row_num) <= 10')
        ->get();

        return response()->json($results);
    }

    public function date()
    {
        $date = DB::table('fixtures_results')
        ->select(DB::raw('DISTINCT LEFT(date, 10) AS date'))
        ->orderBy('date')
        ->get();
  
        return response()->json($date);
    }
}
