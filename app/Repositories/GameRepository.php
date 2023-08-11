<?php

namespace App\Repositories;

use App\Consts\SoccerApiConst;
use App\Models\Game;
use Illuminate\Database\Eloquent\Collection;

class GameRepository
{
    /**
     * 指定された日付の試合日程・結果を取得
     *
     * @param string $date 日付（形式：YYYY-MM-DD）
     * @return \Illuminate\Database\Eloquent\Collection 試合日程のデータを含むEloquentコレクション
     */
    public function getGameSchedules($date): Collection
    {
        // 指定された日付に一致する試合の詳細データを取得する
        $games = Game::where('date', $date)->distinct()->select('json_detail')->get();

        return $games;
    }

    /**
     * 試合の日付一覧を取得
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getGameDates(): Collection
    {
        // gamesテーブルからdateカラムの値を取得
        // distinct()メソッドで重複する値を削除し、orderBy()メソッドで日付を昇順に並び変える
        $gameDates = Game::select('date')
        ->distinct()
        ->orderBy('date')
        ->get();

        return $gameDates;
    }

    /**
     * 特定の試合IDの試合詳細を取得
     * 
     * @param int $gameId 試合ID
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getGameDetail($gameId): Collection
    {
        // gamesテーブルから試合IDに対応する試合詳細データ（json_detailカラム）を取得
        $gameDetail = Game::where('id', $gameId)->select('json_detail')->get();
    
        return $gameDetail;
    }

    /**
     * ページネーションで特定チームの試合を取得する
     * 最新の試合を5試合ごとに取得する
     * 
     * @param int $teamId チームID
     * @param int $season シーズン
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getGamesPagenate($teamId, $season): Collection
    {
        // 特定チームの試合を最新順に取得する
        $games = Game::select('json_detail')
        ->where([
            'team_id' => $teamId,
            'season' => $season,
        ])
        ->orderBy('date', 'desc')
        ->paginate(SoccerApiConst::GAMES_PER_PAGE);
        
        return $games;
    }
}