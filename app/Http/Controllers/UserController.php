<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * ユーザーを削除する
     * 
     * @return JsonResponse 
     */
    public function destroy(): JsonResponse
    {
        try {
            $this->userService->destroy();
        } catch (Exception $error) {
            logger()->error($error);
            return response()->json(['message' => 'アカウントの削除に失敗しました'], 400);
        }

        return response()->json(['message' => 'アカウントを削除しました'], 200);
    }
}
