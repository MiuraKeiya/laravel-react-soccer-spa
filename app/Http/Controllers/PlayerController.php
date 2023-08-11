<?php

namespace App\Http\Controllers;

use App\Services\PlayerService;
use Exception;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Http\JsonResponse;

class PlayerController extends Controller
{
    private $playerService;

    public function __construct(PlayerService $playerService)
    {
        $this->playerService = $playerService;
    }

    /**
     * リーグ別、シーズン別の選手の各ランキングを取得
     * 
     * @param \Illuminate\Http\Request $request leagueIdとseasonを含むリクエストオブジェクト
     * @return \Illuminate\Http\JsonResponse 選手の各ランキングを含むJSONレスポンス
     */
    public function getPlayerRankings(Request $request): JsonResponse
    {
        // leagueIdとseasonを取り出す
        $leagueId = $request->input('leagueId');
        $season = $request->input('season');

        try {
            $response = $this->playerService->getPlayerRankings($season, $leagueId);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
    
    /**
     * 特定のチームに在籍している選手一覧を取得
     * 
     * @param int $teamId チームID
     * @param int $season シーズン
     * @return \Illuminate\Http\JsonResponse チームに所属する選手一覧を含むJSONレスポンス
     */
    public function getTeamRoster($teamId, $season): JsonResponse
    {
        try {
            $response = $this->playerService->getTeamRoster($teamId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 特定の選手の統計を取得
     * 
     * @param int $playerId 選手Id
     * @param int $season シーズン
     * @return \Illuminate\Http\JsonResponse 選手の統計情報を含むJSONレスポンス
     */
    public function getPlayerStatistics($playerId, $season): JsonResponse
    {
        try {
            $response = $this->playerService->getPlayerStatistics($playerId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
}
