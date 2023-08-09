<?php

namespace App\Repositories;

use App\Models\RankingByLeague;
use Illuminate\Database\Eloquent\Collection;

class PlayerRepository
{
    /**
     * リーグ別、シーズン別の選手の各ランキングを取得
     * 得点、アシスト、イエローカード、レッドカードのランキングを取得
     * 
     * @param string $season シーズン
     * @param int $leagueId リーグID
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getPlayerRankings($season, $leagueId): Collection
    {
        // $seasonと$leagueIdの両方に一致するレコードの各カラムを取得する
        $playerRankings = RankingByLeague::select('json_scorer', 'json_assist', 'json_yellow_card', 'json_red_card')
        ->where([
            'season' => $season,
            'league_id' => $leagueId,
        ])
        ->get();

        return $playerRankings;
    }
}