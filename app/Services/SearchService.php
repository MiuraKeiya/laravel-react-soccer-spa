<?php

namespace App\Services;

use App\Repositories\SearchRepository;

class SearchService
{
    private $searchRepository;

    public function __construct(SearchRepository $searchRepository)
    {
        $this->searchRepository = $searchRepository;
    }

    /**
     * チーム検索処理
     * 
     * @param string $query 検索クエリ
     */
    public function search($query)
    {
        return $this->searchRepository->search($query);
    }
}