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
    // 試合日程・結果一覧を取得
    Route::get('/game_schedules', [GameController::class, 'getGameSchedules']);

    // 試合の日付を取得
    Route::get('/game_dates', [GameController::class, 'getGameDates']);

    // 順位一覧を取得
    Route::get('/standings', [TeamController::class, 'getStandings']);

    // 選手の各ランキング一覧を取得
    Route::get('/players/rankings', [PlayerController::class, 'getPlayerRankings']);
    
    // お気に入りチームを保存
    Route::post('/favorites/team', [TeamController::class, 'addFavoriteTeam']);

    // お気に入りチームを削除
    Route::delete('/favorites/team/delete', [TeamController::class, 'deleteFavoriteTeam']);

    // お気に入りリーグを保存
    Route::post('/favorites/league', [LeagueController::class, 'addFavoriteLeague']);

    // お気に入りリーグを削除
    Route::delete('/favorites/league/delete', [LeagueController::class, 'deleteFavoriteLeague']);

    // お気に入り保存されているチームを取得
    Route::get('/favorites/teams', [TeamController::class, 'getFavoriteTeam']);

    // お気に入り保存されているリーグを取得する
    Route::get('/favorites/leagues', [LeagueController::class, 'getFavoriteLeague']);

    // 特定の試合の詳細を取得
    Route::get('/game/detail', [GameController::class, 'getGameDetail']);

    // チーム情報、統計、移籍情報を取得
    Route::get('/team/info', [TeamController::class, 'getTeamInfo']);

    // ページネーションで特定チームの試合を取得
    Route::get('/games/team/{teamId}/{season}', [GameController::class, 'getGamesPagenate']);

    // 特定のチームの選手一覧を取得
    Route::get('/players/team/{teamId}/{season}', [PlayerController::class, 'getTeamRoster']);

    // 特定の選手の統計情報を取得
    Route::get('/players/{playerId}/{season}', [PlayerController::class, 'getPlayerStatistics']);

    // 特定のリーグの試合を取得
    Route::get('/games/league/{leagueId}/{season}', [GameController::class, 'getLeagueMatches']);

    // 特定リーグの全てのチームを取得
    Route::get('/teams/league/{leagueId}/{season}', [TeamController::class, 'getLeagueTeams']);
});