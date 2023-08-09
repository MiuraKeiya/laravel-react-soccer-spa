<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\PlayerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/match/{id}', [TeamController::class, 'matchDetails']);
Route::get('/player/{id}', [PlayerController::class, 'getPlayers']);
Route::get('/teams/rankings', [TeamController::class, 'rankings']);
Route::get('/matches_results', [LeagueController::class, 'getMatchSchedule']);

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/game_schedules', [GameController::class, 'getGameSchedules']);
    Route::get('/game_dates', [GameController::class, 'getGameDates']);
    Route::get('/standings', [TeamController::class, 'getStandings']);
    Route::get('/players/rankings', [PlayerController::class, 'getPlayerRankings']);
});