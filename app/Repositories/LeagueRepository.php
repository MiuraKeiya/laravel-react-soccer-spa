<?php

namespace App\Repositories;

use App\Models\FavoriteLeague;
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
}