<?php

namespace App\Services;

use App\Repositories\TeamRepository;

class TeamService 
{
    private $teamRepository;

    public function __construct(TeamRepository $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    /**
     * 特定リーグ、シーズンの順位を取得
     * $seasonをidに変換する
     * 
     */
    public function rankings($season, $leagueId)
    {
        // 環境変数からSEASONとPREVIOUS_SEASONを取得
        $currentSeason = env('SEASON');
        $previouseSeason = env('PREVIOUSE_SEASON');

        // $sortedStandingsの初期化
        $sortedStandings = null;

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
            $response = $this->teamRepository->rankings($seasonId, $leagueId);

            // $responseが空の場合にエラーを処理する
            if (empty($response)) {
                $error = response()->json(['message' => 'データが存在しません'], 400);
                return $error;
            }

            // $responseのresponseが存在し、leagueのstandingsが存在するかを確認
            if ($response['response'] && isset($response['response'][0]['league']['standings'][0])) {
                // standingsを取得
                $standings = $response['response'][0]['league']['standings'][0];

                // homeでソート
                $homeStandings = $standings;
                usort($homeStandings, function ($a, $b) {
                    $pointsA = $a['home']['win'] * 3 + $a['home']['draw'];
                    $pointsB = $b['home']['win'] * 3 + $b['home']['draw'];

                    if ($pointsA > $pointsB) {
                        return -1;
                    } elseif ($pointsA < $pointsB) {
                        return 1;
                    } else {
                        $goalDiffA = $a['home']['goals']['for'] - $a['home']['goals']['against'];
                        $goalDiffB = $b['home']['goals']['for'] - $b['home']['goals']['against'];

                        if ($goalDiffA > $goalDiffB) {
                            return -1;
                        } elseif ($goalDiffA < $goalDiffB) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                });

              // awayでソート
              $awayStandings = $standings;
              usort($awayStandings, function ($a, $b) {
                  $pointsA = $a['away']['win'] * 3 + $a['away']['draw'];
                  $pointsB = $b['away']['win'] * 3 + $b['away']['draw'];

                  if ($pointsA > $pointsB) {
                      return -1;
                  } elseif ($pointsA < $pointsB) {
                      return 1;
                  } else {
                      $goalDiffA = $a['away']['goals']['for'] - $a['away']['goals']['against'];
                      $goalDiffB = $b['away']['goals']['for'] - $b['away']['goals']['against'];

                      if ($goalDiffA > $goalDiffB) {
                          return -1;
                      } elseif ($goalDiffA < $goalDiffB) {
                          return 1;
                      } else {
                          return 0;
                      }
                  }
              });

              // ソートされた結果を$sortedStandingsにセット
              $sortedStandings = [
                  'all' => $response,
                  'home' => $homeStandings,
                  'away' => $awayStandings,
              ];
        }

            return $sortedStandings;

        } else {
            $error = response()->json(['message' => 'データが存在しません'], 400);
            return $error;
        }
    }
}