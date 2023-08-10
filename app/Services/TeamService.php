<?php

namespace App\Services;

use App\Consts\SoccerApiConst;
use App\Repositories\TeamRepository;
use Illuminate\Database\Eloquent\Collection;

class TeamService 
{
    private $teamRepository;

    public function __construct(TeamRepository $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    /**
     * 特定リーグ、シーズン別の順位一覧を取得
     * データを変換してhomeおよびawayの順位一覧を取得する
     *
     * @param string $season シーズン
     * @param int $leagueId リーグID
     * @return array 順位のデータを含む配列
     */
    public function getStandings($season, $leagueId): array
    {
        // ソートされた順位一覧を格納する変数
        $sortedStandings = null;

        // シーズン別、リーグ別の順位一覧を取得
        $response = $this->teamRepository->getStandings($season, $leagueId);

        // 取得したデータからstandingsを格納
        $homeStandings = $response[0]['json_standings']['response'][0]['league']['standings'][0];

        // homeでソート
        $homeStandings =  collect($homeStandings)->sortByDesc(function ($standings) {
            $points = $standings['home']['win'] * SoccerApiConst::WIN_POINTS + $standings['home']['draw'];
            $goalDiff = $standings['home']['goals']['for'] - $standings['home']['goals']['against'];
            return [$points, -$goalDiff];
        });

        // 取得したデータからstandingsを格納
        $awayStandings = $response[0]['json_standings']['response'][0]['league']['standings'][0];

        // awayでソート
        $awayStandings = collect($awayStandings)->sortByDesc(function ($standings) {
            $points = $standings['away']['win'] * SoccerApiConst::WIN_POINTS + $standings['away']['draw'];
            $goalDiff = $standings['away']['goals']['for'] - $standings['away']['goals']['against'];
            return [$points, -$goalDiff];
        });

        // ソートされた結果を$sortedStandingsにセット
        $sortedStandings = [
            'all' => $response,
            'home' => $homeStandings->values(),
            'away' => $awayStandings->values(),
        ];

        return $sortedStandings;
    }

    /**
     * お気に入りチームを保存
     * 
     * @param int $teamId チームのID
     * @return void
     */
    public function addFavoriteTeam($teamId)
    {
        return $this->teamRepository->addFavoriteTeam($teamId);
    }

    /**
     * お気に入りのチームを削除する
     * 
     * @param int $teamId チームのID
     * @return void
     */
    public function deleteFavoriteTeam($teamId)
    {
        return $this->teamRepository->deleteFavoriteTeam($teamId);
    }

    /**
     * お気に入り保存されているチームを取得する
     * 重複を削除して新しい配列を作成する
     * 
     * @return \Illuminate\Support\Collection ユーザーが保存しているお気に入りチームのチーム情報
     */
    public function getFavoriteTeam()
    {
        $response =  $this->teamRepository->getFavoriteTeam();
        
        // 重複を削除して新しい配列を作成
        $uniqueTeams = collect($response)->unique('team.id')->values();

        return $uniqueTeams;
    }
}