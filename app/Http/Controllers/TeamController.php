<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Services\TeamService;
use Exception;

class TeamController extends Controller
{
    private $teamService;

    public function __construct(TeamService $teamService)
    {
        $this->teamService = $teamService;
    }

    /**
     * 試合詳細を取得
     */
    public function matchDetails(Request $request)
    {
        $client = new Client();

        $response = $client->request(
          'GET', 
          "https://" . env('API_HOST') . "/v3/fixtures?id={$request->id}",
          ['headers' => [
            'X-RapidAPI-Host' => env('API_HOST'),
            'X-RapidAPI-Key' => env('API_KEY'),
          ]]
        );

        $fixtures = $response->getBody();
        
        return $fixtures;
    }

    /** チーム順位取得 */
    public function getTeamRankings(Request $request)
    {
      $leagueId = $request->input('leagueId');
      $season = $request->input('season');
  
      $client = new Client();
  
      $response = $client->request(
          'GET',
          "https://" . env('API_HOST') . "/v3/standings?season={$season}&league={$leagueId}",
          ['headers' => [
              'X-RapidAPI-Host' => env('API_HOST'),
              'X-RapidAPI-Key' => env('API_KEY'),
          ]]
      );
  
      $teamRankings = json_decode($response->getBody(), true);
  
      return response()->json($teamRankings);
    }

    /**
     * 特定リーグ、シーズンの順位を取得
     * 
     */
    public function rankings(Request $request)
    {
        // leagueIdとseasonを取り出す
        $leagueId = $request->input('leagueId');
        $season = $request->input('season');

        try {
            $response = $this->teamService->rankings($season, $leagueId);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
}
