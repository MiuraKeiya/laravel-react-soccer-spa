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
    public function getGameSchedules(string $date): Collection
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
     * @param string $gameId 試合ID
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getGameDetail(string $gameId): Collection
    {
        // gamesテーブルから試合IDに対応する試合詳細データ（json_detailカラム）を取得
        $gameDetail = Game::where('id', $gameId)->select('json_detail')->get();
    
        return $gameDetail;
    }

    /**
     * ページネーションで特定チームの試合を取得する
     * 最新の試合を5試合ごとに取得する
     * 
     * @param string $teamId チームID
     * @param string $season シーズン
     * 
     */
    public function getGamesPagenate(string $teamId, $season)
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

    /**
     * 特定のリーグの試合日程・結果一覧を取得
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getLeagueMatches(string $leagueId, $season): Collection
    {
        $matches = Game::select('json_detail')
        ->where([
            'league_id' => $leagueId,
            'season' => $season,
        ])
        ->get();

        return $matches;
    }

    /**
     * 特定のリーグの直近5試合を取得する
     * 今日の日付からみて過去5試合を取得する
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * @param string $date 今日の日付(例: 2023-09-15)
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getLatestGames(string $leagueId, $date, $season): Collection
    {
        // 試合を取得
        $games = Game::select('json_detail')
            ->where([
                'league_id' => $leagueId,
                'season' => $season,
            ])
            ->where('date', '<', $date)  // 指定日付よりも前の試合を取得
            ->orderBy('date', 'desc')  // 日付を降順にソート
            ->get()
            ->unique('json_detail')
            ->take(5);  // 直近5試合を取得

        return $games;
    }

    /**
     * ページネーションで特定リーグの試合を取得する
     * 最新の試合を20試合ごとに取得する
     * 
     * @param string $leagueId リーグID
     * @param string $season シーズン
     * 
     */
    public function getLeagueGamesPagenate(string $leagueId, $season)
    {
        // 特定リーグの試合を取得する
        $games = Game::select('json_detail')
            ->where([
                'league_id' => $leagueId,
                'season' => $season,
            ])
            ->groupBy('id')
            ->paginate(SoccerApiConst::LEAGUE_GAMES_PER_PAGE);
        
        return $games;
    }
}