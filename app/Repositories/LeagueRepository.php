<?php

namespace App\Repositories;

use App\Models\FavoriteLeague;
use App\Models\League;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class LeagueRepository  
{
    /**
     * お気に入りのリーグを保存する
     * 
     * @param int $leagueId リーグID
     * @return void
     */
    public function addFavoriteLeague($leagueId)
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id(); 

        // DBに保存
        FavoriteLeague::create([
            'user_id' => $id,
            'league_id' => $leagueId,
        ]);
    }

    /**
     * お気に入りのリーグを削除する
     * 
     * @param int $leagueId リーグID
     * @return void
     */
    public function deleteFavoriteLeague($leagueId)
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id(); 

        // ユーザーに紐づく指定されたリーグのお気に入り情報を削除
        FavoriteLeague::where([
            'user_id' => $id,
            'league_id' => $leagueId,
        ])->delete();
    }

    /**
     * お気に入り保存しているリーグを取得する
     * 
     * @return \Illuminate\Support\Collection ユーザーが保存しているお気に入りリーグのID
     */
    public function getFavoriteLeague()
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id(); 

        // ユーザーが保存しているリーグのIDを取得する
        return FavoriteLeague::where('user_id', $id)->pluck('league_id');
    }

    /**
     * 全てのリーグを取得する
     * リーグ名とリーグIDを取得する
     * 
     */
    public function getLeagues()
    {
        $leagues = League::select('id', 'name')->get();
        return $leagues;
    }
}