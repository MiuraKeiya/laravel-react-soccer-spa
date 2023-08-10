<?php

namespace App\Services;

use App\Repositories\LeagueRepository;

class LeagueService 
{
    private $leagueRepository;

    public function __construct(LeagueRepository $leagueRepository)
    {
        $this->leagueRepository = $leagueRepository;
    }

    /**
     * お気に入りのリーグを保存する
     * 
     * @param int $leagueId リーグID
     * @return void
     */
    public function addFavoriteLeague($leagueId)
    {
        return $this->leagueRepository->addFavoriteLeague($leagueId);
    }

    /**
     * お気に入りのリーグを削除する
     * 
     * @param int $leagueId リーグID
     * @return void
     */
    public function deleteFavoriteLeague($leagueId)
    {
        return $this->leagueRepository->deleteFavoriteLeague($leagueId);
    }
}