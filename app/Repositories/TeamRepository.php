<?php

namespace App\Repositories;

use App\Models\RankingByLeague;
use GuzzleHttp\Client;

class TeamRepository 
{
    /**
     * 特定リーグ、シーズンの順位一覧を取得
     * 
     * @param int $seasonId シーズンID
     * @param int $leagueId リーグID
     * 
     */
    public function getRankings($seasonId, $leagueId) 
    {
        // $seasonIdと$leagueIdの両方に一致するレコードのjson_team_rankingカラムを取得する
        $jsonTeamRanking = RankingByLeague::where('season_id', $seasonId)
        ->where('league_id', $leagueId)
        ->pluck('json_team_ranking')
        ->first();

        return $jsonTeamRanking;
    }
}