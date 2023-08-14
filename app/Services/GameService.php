<?php

namespace App\Services;

use App\Repositories\GameRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class GameService
{
    private $gameRepository;

    public function __construct(GameRepository $gameRepository)
    {
        $this->gameRepository = $gameRepository;
    }

    /**
     * 特定の日付の試合日程・結果を取得
     *
     * @param string $date 日付 （形式：YYYY-MM-DD）
     * @return \Illuminate\Database\Eloquent\Collection 試合日程のデータを含むEloquentコレクション
     */
    public function getGameSchedules(string $date): Collection
    {
        // 指定された日付の試合日程・結果を取得
        $games = $this->gameRepository->getGameSchedules($date);

        return $games;
    }

    /**
     * 試合の日付一覧を取得
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getGameDates(): Collection
    {
        // リポジトリから日程データを取得
        $gameDates = $this->gameRepository->getGameDates();

        return $gameDates;
    }

    /**
     * 特定の試合IDの試合詳細を取得
     * 
     * @param string $gameId 試合ID
     * 
     */
    public function getGameDetail(string $gameId)
    {
        // 試合詳細データを取得
        $gameDetail = $this->gameRepository->getGameDetail($gameId);

        // 重複を排除する
        $uniqueGameDetail = collect($gameDetail)->unique('json_detail')->values();

        return $uniqueGameDetail;
    }

    /**
     * ページネーションで特定チームの試合を取得する
     * 最新の5試合ごとに取得する
     * 
     * @param string $teamId チームID
     * @param string $season シーズン
     * 
     */
    public function getGamesPagenate(string $teamId, $season)
    {
        return $this->gameRepository->getGamesPagenate($teamId, $season);
    }

    /**
     * 特定のリーグの試合日程・結果一覧を取得
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * 
     */
    public function getLeagueMatches(string $leagueId, $season)
    {
        // 特定リーグの試合データを取得
        $matches = $this->gameRepository->getLeagueMatches($leagueId, $season);

        // 重複を排除する
        $uniqueMatches = collect($matches)->unique('json_detail')->values();

        return $uniqueMatches;
    }
}