<?php

namespace App\Repositories;

use App\Models\RankingByLeague;
use GuzzleHttp\Client;

class PlayerRepository
{
    /**
     * リーグ、シーズン別の選手各ランキングを取得
     * 
     */
    public function rankings($seasonId, $leagueId)
    {
        // $seasonIdと$leagueIdの両方に一致するレコードのjson_team_rankingカラムを取得する
        $jsonPlayerRankings = RankingByLeague::select('json_scorer_ranking', 'json_assist_ranking', 'json_yellow_ranking', 'json_red_ranking')
        ->where('season_id', $seasonId)
        ->where('league_id', $leagueId)
        ->first();

        return $jsonPlayerRankings;
    }
}