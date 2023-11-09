<?php

namespace App\Repositories;

use App\Models\Team;
use Illuminate\Database\Eloquent\Collection;

class SearchRepository
{
    /**
     * チームを指定されたクエリで検索し、結果を返す
     * 
     * @param string $query 検索クエリ
     * @return Illuminate\Database\Eloquent\Collection 検索結果を含むEloquentコレクション
     */
    public function search($query): Collection
    {
        // 最新のseasonカラムの値を取得
        $latestSeason = Team::orderBy('season', 'desc')->value('season');

        // 指定されたクエリに一致するチームの情報を検索し、重複を排除して取得
        $results = Team::where('name', 'LIKE', $query . '%')
            ->where('season', $latestSeason)
            ->get('json_information');

        return $results;
    }
}