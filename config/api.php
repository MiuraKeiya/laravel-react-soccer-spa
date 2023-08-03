<?php

return [

    /**
     * APIに関する環境変数
     */
    'api_host' => env('API_HOST'),
    'api_key' => env('API_KEY'),

    /**
     * シーズンに関する環境変数
     */
    'seasons' => [
        '2022' => env('SEASON_2022'),
        '2023' => env('SEASON_2023'),
    ],
];