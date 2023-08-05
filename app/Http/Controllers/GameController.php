<?php

namespace App\Http\Controllers;

use App\Services\GameService;
use Illuminate\Http\Request;
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
     * @param Illuminate\Http\Request $request　日付を含むリクエストオブジェクト
     * @return Illuminate\Http\JsonResponse
     */
    public function getGameSchedules(Request $request): JsonResponse
    {
        try {
            $response = $this->gameService->getGameSchedules($request);
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
}
