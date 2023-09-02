<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * @return \Illuminate\Http\JsonResponse 順位のデータを含むJSONレスポンス
     */
    public function getStandings(string $leagueId, $season): JsonResponse
    {
        try {
            $response = $this->teamService->getStandings($leagueId, $season);
        } catch (Exception $error) {
            logger()->error($error);
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
            $this->teamService->addFavoriteTeam($request->id);
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
            $this->teamService->deleteFavoriteTeam($request->id);
        } catch (Exception $error) {
            return response()->json(['message' => '削除に失敗しました'], 400);
        }

        return response()->json(['message' => '削除しました'], 200);
    }

    /**
     * お気に入り保存されているチームを取得する
     * 
     * @return \Illuminate\Http\JsonResponse 
     */
    public function getFavoriteTeam(): JsonResponse
    {
        try {
            $response = $this->teamService->getFavoriteTeam();
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * チームの情報、統計、移籍情報を取得する
     * 
     * @param string $teamId チームID
     * @param string $season シーズン
     * @return \Illuminate\Http\JsonResponse 
     */
    public function getTeamInfo(string $teamId, $season): JsonResponse
    {
        try {
            $response = $this->teamService->getTeamInfo($teamId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 特定リーグのチームを全て取得する
     * 
     * @param int $leagueId リーグID
     * @param int $season シーズン
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLeagueTeams($leagueId, $season): JsonResponse
    {
        try {
            $response = $this->teamService->getLeagueTeams($leagueId, $season);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }

    /**
     * 咋シーズンのリーグで一位のチーム情報を取得する
     * 全てのリーグから取得する
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCurrentSeasonChampions(): JsonResponse
    {
        try {
            $response = $this->teamService->getCurrentSeasonChampions();
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
}
