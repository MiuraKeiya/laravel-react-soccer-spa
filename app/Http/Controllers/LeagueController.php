<?php

namespace App\Http\Controllers;

use App\Services\LeagueService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    private $leagueService;

    public function __construct(LeagueService $leagueService)
    {
        $this->leagueService = $leagueService;
    }

    /**
     * お気に入りのリーグを保存する
     * 
     * @param \Illuminate\Http\Request $request teamIdを含む
     * @return \Illuminate\Http\JsonResponse 
     */
    public function addFavoriteLeague(Request $request): JsonResponse
    {
        try {
            $this->leagueService->addFavoriteLeague($request->leagueId);
        } catch (Exception $error) {
            return response()->json(['message' => '保存に失敗しました'], 400);
        }

        return response()->json(['message' => 'DBに保存しました'], 201);
    }

    /**
     * お気に入りのリーグを削除する
     * 
     * @param \Illuminate\Http\Request $request teamIdを含む
     * @return \Illuminate\Http\JsonResponse 
     */
    public function deleteFavoriteLeague(Request $request): JsonResponse
    {
        try {
            $this->leagueService->deleteFavoriteLeague($request->leagueId);
        } catch (Exception $error) {
            return response()->json(['message' => '削除に失敗しました'], 400);
        }

        return response()->json(['message' => '削除しました'], 200);
    }

    /**
     * お気に入りのリーグを取得する
     * 
     * @return \Illuminate\Http\JsonResponse 
     */
    public function getFavoriteLeague(): JsonResponse
    {
        try {
            $response = $this->leagueService->getFavoriteLeague();
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
}
