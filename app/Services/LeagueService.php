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

    public function matchSchedule()
    {
        $response = $this->leagueRepository->matchSchedule();

        $schedule = [];

        foreach ($response as $responseData) {
            // レスポンスボディを配列形式に変換
            $scheduleData = json_decode($responseData, true);
            $schedule[] = $scheduleData;
        }
    
        return $schedule;
    }
}