<?php

namespace App\Services;

use App\Consts\SoccerApiConst;
use App\Repositories\TeamRepository;

class TeamService 
{
    private $teamRepository;

    public function __construct(TeamRepository $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    /**
     * 指定したリーグの順位一覧を取得する
     * 全体、ホーム、アウェイにおける順位をそれぞれ取得する
     *
     * @param string $season シーズン
     * @param string $leagueId リーグID
     * @return array 全体、ホーム、アウェイにおける順位一覧
     */
    public function getStandings(string $leagueId, $season): array
    {
        // 指定したリーグを取得
        $league = $this->teamRepository->getStanding($leagueId, $season);

        // 全体での順位一覧
        $standings = $league->json_standings['response'][0]['league']['standings'][0];

        // ホームでの順位一覧
        $homeStandings =  collect($standings)->sortByDesc(function ($datas) {
            // 勝点
            $points = $datas['home']['win'] * SoccerApiConst::WIN_POINTS + $datas['home']['draw'];
            // 得失点差
            $goalDiff = $datas['home']['goals']['for'] - $datas['home']['goals']['against'];
            return [$points, -$goalDiff];
        });

        // アウェイでの順位一覧
        $awayStandings = collect($standings)->sortByDesc(function ($datas) {
            // 勝点
            $points = $datas['away']['win'] * SoccerApiConst::WIN_POINTS + $datas['away']['draw'];
            // 得失点差
            $goalDiff = $datas['away']['goals']['for'] - $datas['away']['goals']['against'];
            return [$points, -$goalDiff];
        });

        return [
            'all' => $standings,
            'home' => $homeStandings,
            'away' => $awayStandings,
        ];
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

    /**
     * チームの情報、統計、移籍情報を取得する
     * チームIDとシーズンに基づく
     * 
     * @param string $teamId チームID
     * @param string $season シーズン
     * 
     */
    public function getTeamInfo(string $teamId, $season)
    {
        return $this->teamRepository->getTeamInfo($teamId, $season);
    }

    /**
     * 特定リーグのチームを全て取得する
     * 
     * @param int $leagueId リーグID
     * @param int $season シーズン
     */
    public function getLeagueTeams($leagueId, $season)
    {
        return $this->teamRepository->getLeagueTeams($leagueId, $season);
    }

    /**
     * 咋シーズンのリーグで一位のチームを取得する
     * 順位一覧から一位のチームを抽出する
     * 
     * 
     */
    public function getCurrentSeasonChampions()
    {
        // configファイルからシーズンのリストを取得
        $seasons = config('api.seasons');

        // シーズンリストから昨シーズンを取得
        $sortedSeasons = array_values($seasons);
        rsort($sortedSeasons);
        $lastSeason = $sortedSeasons[1];

        // 咋シーズンの全てのリーグ順位一覧を取得
        $standings = $this->teamRepository->getCurrentSeasonChampions($lastSeason);
        
        // コレクションに変換
        $collection = collect($standings);

        $rank_1_teams = [];

        $collection->each(function ($standing) use (&$rank_1_teams) {
            $standings = $standing['json_standings']['response'][0]['league']['standings']; 

            // rankが1のチーム情報を抽出
            foreach ($standings as $team) {
                foreach ($team as $a) {
                    if ($a['rank'] == 1) {
                        $rank_1_teams[] = [
                            'teamName' => $a['team']['name'],
                            'teamLogo' => $a['team']['logo'],
                            'league' => $standing['json_standings']['response'][0]['league']['name'],
                            'country' => $standing['json_standings']['response'][0]['league']['country'],
                        ];
                    }
                }
            }
        });

        // rank 1 のチーム情報の配列
        return $rank_1_teams;
    }
}