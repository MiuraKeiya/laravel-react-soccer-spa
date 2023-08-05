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
    
    /** 選手情報を取得 */
    public function getPlayers(Request $request)
  {
      $client = new Client();
      $playerData = [];

      // 2023年の選手データを取得
      $response2023 = $client->request(
          'GET',
          "https://" . env('API_HOST') . "/v3/players?id={$request->id}&season=2023",
          ['headers' => [
              'X-RapidAPI-Host' => env('API_HOST'),
              'X-RapidAPI-Key' => env('API_KEY'),
          ]]
      );
      $player2023 = json_decode($response2023->getBody(), true);
      $playerData['2023'] = $player2023;

      // 2022年の選手データを取得
      $response2022 = $client->request(
          'GET',
          "https://" . env('API_HOST') . "/v3/players?id={$request->id}&season=2022",
          ['headers' => [
              'X-RapidAPI-Host' => env('API_HOST'),
              'X-RapidAPI-Key' => env('API_KEY'),
          ]]
      );
      $player2022 = json_decode($response2022->getBody(), true);
      $playerData['2022'] = $player2022;

      return response()->json($playerData);
  }
}
