<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class TeamController extends Controller
{
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
        $client = new Client();
    
        $response = $client->request(
            'GET',
            "https://" . env('API_HOST') . "/v3/standings?season=2022&league={$request->id}",
            ['headers' => [
                'X-RapidAPI-Host' => env('API_HOST'),
                'X-RapidAPI-Key' => env('API_KEY'),
            ]]
        );

        $teamRankings = json_decode($response->getBody(), true);
        
        return response()->json($teamRankings);
    }
}
