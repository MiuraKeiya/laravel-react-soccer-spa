<?php

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

Route::get('/fixtures_results', [LeagueController::class, 'getMatchSchedule']);
Route::get('/date', [LeagueController::class, 'getDates']);
Route::get('/match/{id}', [TeamController::class, 'matchDetails']);
Route::get('/teams/ranking', [TeamController::class, 'getTeamRankings']);
Route::get('/player/{id}', [PlayerController::class, 'getPlayers']);
Route::get('/players/topscorers', [PlayerController::class, 'scoringOrder']);
Route::get('/teams/rankings', [TeamController::class, 'rankings']);
Route::get('/players/rankings', [PlayerController::class, 'rankings']);
Route::get('/matches_results', [LeagueController::class, 'getMatchSchedule']);

Route::middleware('auth:sanctum')->group(function(){
    
});