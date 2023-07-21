<?php

namespace App\Services;

use App\Repositories\PlayerRepository;

class PlayerService
{
    private $playerRepository;

    public function __construct(PlayerRepository $playerRepository)
    {
        $this->playerRepository = $playerRepository;
    }

    /**
     * リーグ、シーズン別の選手各ランキングを取得
     * 
     */
    public function rankings($season, $leagueId)
    {
        // 環境変数からSEASONとPREVIOUS_SEASONを取得
        $currentSeason = env('SEASON');
        $previouseSeason = env('PREVIOUSE_SEASON');

        // $seasonを検証して特定の値をIDとしてセットする
        if ($season === $currentSeason) {
            $seasonId = 1; 
        } elseif ($season === $previouseSeason) {
            $seasonId = 2; 
        } else {
            $seasonId = null;
        }

        // $seasonIdがセットされた場合のみ、rankingsメソッドに$seasonIdと$leagueIdを渡す
        if ($seasonId !== null) {
            $response = $this->playerRepository->rankings($seasonId, $leagueId);

            // $responseが空の場合にエラーを処理する
            if (empty($response)) {
                $error = response()->json(['message' => 'データが存在しません'], 400);
                return $error;
            }

            return $response;
        } else {
            $error = response()->json(['message' => 'データが存在しません'], 400);
            return $error;
        }
    }
}