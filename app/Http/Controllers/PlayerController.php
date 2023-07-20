<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class PlayerController extends Controller
{
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

  /** 得点順位を取得 */
  public function scoringOrder(Request $request)
  {
      $leagueId = $request->input('leagueId');
      $season = $request->input('season');

      $client = new Client();

      $response = $client->request(
          'GET',
          "https://" . env('API_HOST') . "/v3/players/topscorers?league={$leagueId}&season={$season}",
          ['headers' => [
              'X-RapidAPI-Host' => env('API_HOST'),
              'X-RapidAPI-Key' => env('API_KEY'),
          ]]
      );

      $scoringOrder = json_decode($response->getBody(), true);

      return response()->json($scoringOrder);
  }
}
