<?php

namespace App\Repositories;

use App\Models\FavoriteLeague;
use App\Models\League;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class LeagueRepository  {
    public function matchSchedule()
    {
        $client = new Client();

        $ids = League::pluck('id');
        
        $schedule = [];

        foreach ($ids as $leagueId) {
            $response = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/fixtures?league={$leagueId}&season=2023",
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );
            
            $schedule[] = $response->getBody();
        }

        return $schedule;
    }
}