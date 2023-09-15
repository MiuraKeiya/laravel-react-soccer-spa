<?php

namespace App\Http\Controllers;

use App\Services\GameService;
use Exception;
use Illuminate\Http\JsonResponse;

class GameController extends Controller
{
    private $gameService;

    public function __construct(GameService $gameService)
    {
        $this->gameService = $gameService;
    }

    /**
     * 日付別の試合日程・結果を取得
     * 
     * @param string $date 日付（例 2022-08-05）
     * @return Illuminate\Http\JsonResponse
     */
    public function getGameSchedules(string $date): JsonResponse
    {
        try {
            $response = $this->gameService->getGameSchedules($date);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 試合の日付一覧を取得
     * 
     * @return Illuminate\Http\JsonResponse
     */
    public function getGameDates(): JsonResponse
    {
        try {
            $response = $this->gameService->getGameDates();
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 特定の試合IDの試合詳細を取得
     * 
     * @param string $gameId 試合ID
     * @return Illuminate\Http\JsonResponse
     */
    public function getGameDetail(string $gameId): JsonResponse
    {
        try {
            $response = $this->gameService->getGameDetail($gameId);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * ページネーションで特定チームの試合を取得する
     * 最新の5試合ごとに取得する
     * 
     * @param string $teamId チームID
     * @param string $season シーズン
     * @return Illuminate\Http\JsonResponse
     */
    public function getGamesPagenate(string $teamId, $season): JsonResponse
    {
        try {
            $response = $this->gameService->getGamesPagenate($teamId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 特定のリーグの試合日程・結果一覧を取得
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * @return Illuminate\Http\JsonResponse
     */
    public function getLeagueMatches(string $leagueId, $season): JsonResponse
    {
        try {
            $response = $this->gameService->getLeagueMatches($leagueId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 特定のリーグの直近5試合を取得する
     * 今日の日付からみて過去5試合を取得する
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * @return Illuminate\Http\JsonResponse
     */
    public function getLatestGames(string $leagueId, $season): JsonResponse
    {
        try {
            $response = $this->gameService->getLatestGames($leagueId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * ページネーションで特定リーグの試合を取得する
     * 最新の試合を5試合ごとに取得する
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * @return Illuminate\Http\JsonResponse
     */
    public function getLeagueGamesPagenate(string $leagueId, $season): JsonResponse
    {
      try {
          $response = $this->gameService->getLeagueGamesPagenate($leagueId, $season);
      } catch (Exception $error) {
          return response()->json(['message' => '取得に失敗しました'], 400);
      }

    return response()->json($response, 200);
    }
}
