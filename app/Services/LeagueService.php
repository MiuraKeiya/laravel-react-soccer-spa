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
     * 特定の日付の試合日程・結果を取得
     *
     * @param \Illuminate\Http\Request $request 日付を含むリクエストオブジェクト
     * @return array 試合日程のデータを含む配列
     */
    public function getGameSchedules($request)
    {
        // リクエストから日付を取得
        $date = $request->input('date');

        // 指定された日付の試合日程・結果を取得
        $games = $this->leagueRepository->getGameSchedules($date);

        return $games;
    }

    /**
     * 試合の日付一覧を取得
     * 
     * @return Illuminate\Support\Collection
     */
    public function getGameDates()
    {
        // リポジトリから日程データを取得
        $gameDates = $this->leagueRepository->getGameDates();

        return $gameDates;
    }
}