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

    /** 
     * 今シーズンの試合日程・結果を取得
     * 
     */
    public function matchSchedule(Request $request)
    {
        $date = $request->input('date');

        // 左から10文字を取得
        $dateSubstring = substr($date, 0, 10); 
        
        $matches = FixturesResult::whereRaw("LEFT(date, 10) = ?", [$dateSubstring])->get();
        
        if ($matches->isEmpty()) {
            // データが存在しない場合の処理
            return response()->json(['message' => 'データは存在しません']);
        }

         // league_idごとにjson_resultをまとめる
        $groupedMatches = $matches->groupBy('league_id')->map(function ($group) {
            return $group->pluck('json_result');
        });
        
        return response()->json($groupedMatches);
    }

    /**
     * 今シーズンの試合日程の日付を取得
     */
    public function date()
    {
        $date = DB::table('fixtures_results')
        ->select(DB::raw('DISTINCT LEFT(date, 10) AS date'))
        ->orderBy('date')
        ->get();
  
        return response()->json($date);
    }
}
