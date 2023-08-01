<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use GuzzleHttp\Client;
use App\Models\League;
use App\Models\Player;
use App\Models\Team;

class PlayersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Leaguesテーブルからidカラム取得
        $leagueIds = League::pluck('id');

        $season = env('SEASON');
        $previousSeason = env('PREVIOUSE_SEASON');

        function call_api($endpoint, $params = []) {

            $client = new Client();

            $parameters = '';
            if (count($params) > 0) {
                $parameters = '?'.http_build_query($params);
            }
      
            $response = $client->request(
                'GET',
                "https://" . env('API_HOST') . "/v3/" . $endpoint . $parameters,
                ['headers' => [
                    'X-RapidAPI-Host' => env('API_HOST'),
                    'X-RapidAPI-Key' => env('API_KEY'),
                ]]
            );

            $response = json_decode($response->getBody(), true);
            return $response;
        }

        function players_data($league, $season, $page = 1, $players_data = []) {

            $players = call_api('players', ['league' => $league, 'season' => $season, 'page' => $page]);
            $players_data = array_merge($players_data, $players['response']);
        
            if ($players['paging']['current'] < $players['paging']['total']) {
        
                $page = $players['paging']['current'] + 1;
            
                $players_data = players_data($league, $season, $page, $players_data);
            }
            return $players_data;
        }

        foreach($leagueIds as $leagueId)
        {
            $players = players_data($leagueId, $season);

            foreach ($players as $player)
            {
                // team_idがteamsテーブルに存在するかどうかを調べる
                $teamExists = Team::where('id', $player['statistics'][0]['team']['id'])
                ->where('season', $season)
                ->exists();

                $playerExists = Player::where('id', $player['player']['id'])
                ->where('team_id', $player['statistics'][0]['team']['id'])
                ->where('season', $season)
                ->exists();

                // teamIdが存在し、playersテーブルに指定したid,team_id,seasonの組み合わせが存在する場合は保存しない
                if ($teamExists && !$playerExists) {
                    Player::create([
                        'id' => $player['player']['id'],
                        'name' => $player['player']['name'],
                        'team_id' => $player['statistics'][0]['team']['id'],
                        'league_id' => $player['statistics'][0]['league']['id'],
                        'season' => $season,
                        'json_statistics' => $player,
                    ]);
                }
            }
        }
    }
}
