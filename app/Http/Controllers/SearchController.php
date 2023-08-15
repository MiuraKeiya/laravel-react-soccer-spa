<?php

namespace App\Http\Controllers;

use App\Services\SearchService;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Http\JsonResponse;

class SearchController extends Controller
{
    private $searchService;

    public function __construct(SearchService $searchService)
    {
        $this->searchService = $searchService;
    }

    /**
     * チームの検索処理
     * 
     * @param Request $request リクエストオブジェクト
     * @return JsonResponse 検索結果を含むJSONレスポンス
     */
    public function search(Request $request): JsonResponse
    {
        try {
            $query = $request->input('query');
            $response = $this->searchService->search($query);
        } catch (Exception $error) {
            return response()->json(['message' => '取得に失敗しました'], 400);
        }

        return response()->json($response, 200);
    }
}
