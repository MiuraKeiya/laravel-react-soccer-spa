<?php

namespace App\Repositories;

use App\Models\FavoriteLeague;
use App\Models\League;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use App\Models\FixturesResult;

class LeagueRepository  
{
    /**
     * 指定されたシーズンの試合日程・結果を取得
     *
     * @param string $season シーズン（日付の文字列の先頭10文字）
     * @return \Illuminate\Database\Eloquent\Collection 試合日程のデータを含むEloquentコレクション
     */
    public function getMatchSchedule($season)
    {
        // 日付から最初の10文字をシーズンとして取得し、そのシーズンの試合日程・結果を取得
        $matches = FixturesResult::whereRaw("LEFT(date, 10) = ?", [$season])
        ->orderBy('date', 'asc')
        ->get();

        return $matches;
    }

    /**
     * 日付一覧を取得
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getDates()
    {
        // fixtures_resultsテーブルからdateカラムの値を取得
        // distinct()メソッドで重複する値を削除し、orderBy()メソッドで日付順に並び変える
        $dates = FixturesResult::select('date')
        ->distinct()
        ->orderBy('date')
        ->get();

        return $dates;
    }
}