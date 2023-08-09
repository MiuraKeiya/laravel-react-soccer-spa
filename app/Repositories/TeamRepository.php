<?php

namespace App\Repositories;

use App\Models\RankingByLeague;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use App\Models\FavoriteTeam;

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
}