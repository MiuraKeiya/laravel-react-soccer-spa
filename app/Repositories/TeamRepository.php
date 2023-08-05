<?php

namespace App\Repositories;

use App\Models\RankingByLeague;
use Illuminate\Database\Eloquent\Collection;

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
     * 
     * 
     */
}