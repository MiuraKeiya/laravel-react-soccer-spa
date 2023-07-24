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
     * 試合日程・結果を取得
     * 
     * @param Illuminate\Http\Request $request　日付を含むリクエストオブジェクト
     * @return Illuminate\Http\JsonResponse
     */
    public function getMatchSchedule(Request $request)
    {
        try {
            $response = $this->leagueService->getMatchSchedule($request);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 日付一覧を取得
     * 
     * @return Illuminate\Http\JsonResponse
     */
    public function getDates()
    {
        try {
            $response = $this->leagueService->getDates();
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
}
