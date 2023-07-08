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

    public function matchSchedule(Request $request)
    {
      $date = $request->input('date');
      
      $dateSubstring = substr($date, 0, 10); // 左から10文字を取得
      
      $matches = FixturesResult::whereRaw("LEFT(date, 10) = ?", [$dateSubstring])->get();
      
      if ($matches->isEmpty()) {
          // データが存在しない場合の処理
          return response()->json(['message' => 'データは存在しません']);
      }

      $jsonColumns = $matches->pluck('json_result');
      return response()->json($jsonColumns);
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
