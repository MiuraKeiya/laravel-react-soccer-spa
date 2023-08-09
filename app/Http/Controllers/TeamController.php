<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Services\TeamService;
use Exception;
use Illuminate\Http\JsonResponse;

class TeamController extends Controller
{
    private $teamService;

    public function __construct(TeamService $teamService)
    {
        $this->teamService = $teamService;
    }

    /**
     * 特定リーグ、シーズン別の順位一覧を取得
     * 
     * @param \Illuminate\Http\Request $request leagueIdとseasonを含むリクエストオブジェクト
     * @return \Illuminate\Http\JsonResponse 順位のデータを含むJSONレスポンス
     */
    public function getStandings(Request $request): JsonResponse
    {
        // leagueIdとseasonを取り出す
        $leagueId = $request->input('leagueId');
        $season = $request->input('season');

        try {
            $response = $this->teamService->getStandings($season, $leagueId);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * お気に入りチームを保存する
     * 
     * @param \Illuminate\Http\Request $request teamIdを含む
     * @return \Illuminate\Http\JsonResponse 
     */
    public function addFavoriteTeam(Request $request): JsonResponse
    {
        try {
            $this->teamService->addFavoriteTeam($request->teamId);
        } catch (Exception $error) {
            return response()->json(['message' => '保存に失敗しました'], 400);
        }

        return response()->json(['message' => 'DBに保存しました'], 201);
    }

    /**
     * お気に入りのチームを削除する
     * 
     * @param \Illuminate\Http\Request $request teamIdを含む
     * @return \Illuminate\Http\JsonResponse 
     */
    public function deleteFavoriteTeam(Request $request): JsonResponse
    {
        try {
            $this->teamService->deleteFavoriteTeam($request->teamId);
        } catch (Exception $error) {
            return response()->json(['message' => '削除に失敗しました'], 400);
        }

        return response()->json(['message' => '削除しました'], 201);
    }
}
