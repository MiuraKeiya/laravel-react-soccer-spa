<?php

namespace App\Repositories;

use App\Models\Player;
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

    /**
     * 特定のチームに在籍している選手一覧を取得
     * @param int $teamId チームID
     * @param int $season シーズン
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getTeamRoster($teamId, $season):Collection
    {
        $teamRoster = Player::select('json_statistics')
        ->where([
            'team_id' => $teamId,
            'season' => $season,
        ])
        ->get();

        return $teamRoster;
    }

    /**
     * 特定の選手の統計を取得
     * 
     * @param int $playerId 選手ID
     * @param int $season シーズン
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getPlayerStatistics($playerId, $season): Collection
    {
        $statistics = Player::select('json_statistics')
        ->where([
          'api_player_id' => $playerId,
          'season' => $season,
        ])
        ->get();

        return $statistics;
    }
}