<?php

namespace App\Repositories;

use App\Models\RankingByLeague;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use App\Models\FavoriteTeam;
use App\Models\Team;

class TeamRepository 
{
    /**
     * 特定リーグ、シーズン別の順位一覧を取得
     * 
     * @param string $season シーズン
     * @param int $leagueId リーグID
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getStandings($season, $leagueId): Collection
    {
        // $seasonと$leagueIdの両方に一致するレコードのjson_standingsカラムを取得する
        $standings = RankingByLeague::select('json_standings')
        ->where([
            'season' => $season,
            'league_id' => $leagueId,
        ])->get();
        
        return $standings;
    }

    /**
     * お気に入りチームを保存する
     * 
     * @param int $teamId チームのID
     * @return void
     */
    public function addFavoriteTeam($teamId)
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id(); 

        // DBに保存
        FavoriteTeam::create([
            'user_id' => $id,
            'team_id' => $teamId,
        ]);
    }

    /**
     * お気に入りチームを削除する
     * 
     * @param int $teamId チームのID
     * @return void
     */
    public function deleteFavoriteTeam($teamId)
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id(); 

        // ユーザーに紐づく指定されたチームのお気に入り情報を削除
        FavoriteTeam::where([
            'user_id' => $id,
            'team_id' => $teamId,
        ])->delete();
    }

    /**
     * お気に入り保存されているチームを取得する
     * 
     * @return \Illuminate\Support\Collection ユーザーが保存しているお気に入りチームのチーム情報
     */
    public function getFavoriteTeam()
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id(); 

        // ユーザーが保存しているチームのteam_idを取得する
        $favoriteTeamId = FavoriteTeam::where('user_id', $id)->pluck('team_id');

        // チームに紐づけられているチーム情報を取得する
        $teamInformation = Team::whereIn('id', $favoriteTeamId)->pluck('json_information');

        return $teamInformation;
    }

    /**
     * チームの情報、統計、移籍情報を取得する
     * チームIDとシーズンに基づく
     * 
     * @param int $teamId チームのID
     * @param int $season シーズン
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getTeamInfo($teamId, $season): Collection
    {
        // チーム情報、統計、移籍情報を取得する
        $teamInfo = Team::select('json_information', 'json_statistics', 'json_transfer')
        ->where([
            'id' => $teamId,
            'season' => $season,
        ])->get();

        return $teamInfo;
    }

}