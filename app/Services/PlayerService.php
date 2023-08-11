<?php

namespace App\Services;

use App\Repositories\PlayerRepository;
use Illuminate\Database\Eloquent\Collection;

class PlayerService
{
    private $playerRepository;

    public function __construct(PlayerRepository $playerRepository)
    {
        $this->playerRepository = $playerRepository;
    }

    /**
     * リーグ、シーズン別の選手各ランキングを取得
     * 
     * @param string $season シーズン
     * @param int $leagueId リーグID
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getPlayerRankings($season, $leagueId): Collection
    {
        // 各ランキングデータを取得する
        $response = $this->playerRepository->getPlayerRankings($season, $leagueId);

        return $response;
    }

    /**
     * 特定のチームに在籍している選手一覧を取得
     * 
     * @param int $teamId チームID
     * @param int $season シーズン
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getTeamRoster($teamId, $season): Collection
    {
        return $this->playerRepository->getTeamRoster($teamId, $season);
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
      return $this->playerRepository->getPlayerStatistics($playerId, $season);
    }
}