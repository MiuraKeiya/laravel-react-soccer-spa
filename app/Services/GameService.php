<?php

namespace App\Services;

use App\Repositories\GameRepository;
use Illuminate\Database\Eloquent\Collection;

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
     * @param \Illuminate\Http\Request $request 日付を含むリクエストオブジェクト
     * @return \Illuminate\Database\Eloquent\Collection 試合日程のデータを含むEloquentコレクション
     */
    public function getGameSchedules($request): Collection
    {
        // リクエストから日付を取得
        $date = $request->input('date');

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
}