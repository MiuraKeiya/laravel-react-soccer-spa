<?php

namespace App\Http\Controllers;

use App\Models\FavoriteLeague;
use App\Services\LeagueService;
use Exception;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    private $leagueService;

    public function __construct(LeagueService $leagueService)
    {
      $this->leagueService = $leagueService;
    }

    public function matchSchedule()
    {
        try {
          $schedule = $this->leagueService->matchSchedule();
        } catch (Exception $error) {
          return response()->json(['message' => '試合日程の取得に失敗しました'], 400);
        }

        return response()->json($schedule, 200);
    }
}
