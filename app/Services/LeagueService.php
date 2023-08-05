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
}