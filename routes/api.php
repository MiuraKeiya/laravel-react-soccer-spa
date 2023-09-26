<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GoogleLoginController;
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

Route::get('/login/google', [GoogleLoginController::class, 'redirectToProvider']);

Route::post('/login/google/callback', [GoogleLoginController::class, 'handleProviderCallback']);

Route::middleware('auth:sanctum')->group(function(){
    // 試合日程・結果一覧を取得
    Route::get('/games/dates/{date}', [GameController::class, 'getGameSchedules']);

    // 試合の日付を取得
    Route::get('/dates', [GameController::class, 'getGameDates']);

    // 順位一覧を取得
    Route::get('/standings/leagues/{leagueId}/seasons/{season}', [TeamController::class, 'getStandings']);

    // 選手の各ランキング一覧を取得
    Route::get('/players/rankings/leagues/{leagueId}/seasons/{season}', [PlayerController::class, 'getPlayerRankings']);
    
    // お気に入りチームを保存
    Route::post('/favorites/teams', [TeamController::class, 'addFavoriteTeam']);

    // お気に入りチームを削除
    Route::delete('/favorites/teams', [TeamController::class, 'deleteFavoriteTeam']);

    // お気に入りリーグを保存
    Route::post('/favorites/leagues', [LeagueController::class, 'addFavoriteLeague']);

    // お気に入りリーグを削除
    Route::delete('/favorites/leagues', [LeagueController::class, 'deleteFavoriteLeague']);

    // お気に入り保存されているチームを取得
    Route::get('/favorites/teams', [TeamController::class, 'getFavoriteTeam']);

    // お気に入り保存されているリーグを取得する
    Route::get('/favorites/leagues', [LeagueController::class, 'getFavoriteLeague']);

    // 特定の試合の詳細を取得
    Route::get('/games/{gameId}', [GameController::class, 'getGameDetail']);

    // チーム情報、統計、移籍情報を取得
    Route::get('/teams/{teamId}/seasons/{season}', [TeamController::class, 'getTeamInfo']);

    // ページネーションで特定チームの試合を取得
    Route::get('/games/team/{teamId}/season/{season}', [GameController::class, 'getGamesPagenate']);

    // 特定のチームの選手一覧を取得
    Route::get('/players/team/{teamId}/season/{season}', [PlayerController::class, 'getTeamRoster']);

    // 特定の選手の統計情報を取得
    Route::get('/players/{playerId}/season/{season}', [PlayerController::class, 'getPlayerStatistics']);

    // 特定のリーグの試合を取得
    Route::get('/games/league/{leagueId}/season/{season}', [GameController::class, 'getLeagueMatches']);

    // 特定リーグの全てのチームを取得
    Route::get('/teams/league/{leagueId}/season/{season}', [TeamController::class, 'getLeagueTeams']);

    // 検索機能
    Route::get('/search', [SearchController::class, 'search']);

    // アカウントの削除
    Route::delete('/user', [UserController::class, 'destroy']);

    // 全てのリーグを取得
    Route::get('/leagues', [LeagueController::class, 'getLeagues']);

    // 今シーズンのリーグの一位のチームを取得
    Route::get('/standings/teams', [TeamController::class, 'getCurrentSeasonChampions']);

    // 直近の5試合を取得
    Route::get('latest_games/leagues/{leagueId}/seasons/{season}', [GameController::class, 'getLatestGames']);

    // ページネーションで特定リーグの試合を取得
    Route::get('/games/leagues/{leagueId}/seasons/{season}', [GameController::class, 'getLeagueGamesPagenate']);
});