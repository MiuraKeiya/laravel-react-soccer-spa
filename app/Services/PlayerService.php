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
}