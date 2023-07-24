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
    public function getMatchSchedule($request)
    {
        // リクエストから日付を取得
        $date = $request->input('date');

        // 日付から最初の10文字をシーズンとして取得
        $season = substr($date, 0, 10); 

        // リポジトリから試合日程を取得
        $response = $this->leagueRepository->getMatchSchedule($season);

        // リーグごとにグループ化
        $formattedResponse = $response->groupBy('league_id')->map(function ($group) {
            return $group->unique('fixture')->pluck('json_result');
        });

        return $formattedResponse;
    }

    /**
     * 日付一覧を取得
     * 
     * @return Illuminate\Support\Collection
     */
    public function getDates()
    {
        // リポジトリから日程データを取得
        $response = $this->leagueRepository->getDates();

        // 取得した日程データから左から10文字を取得して新しいコレクションを作成
        $formattedDates = $response->map(function ($date) {
            return substr($date->date, 0, 10);
        });

        // 重複している日付を削除する
        $uniqueDates = $formattedDates->unique();

        // コレクションを連想配列に変換して返す
        $formattedResponse = $uniqueDates->map(function ($date) {
            return ['date' => $date];
        });

        return $formattedResponse->values();
    }
}