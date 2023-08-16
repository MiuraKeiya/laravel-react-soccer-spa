<?php

namespace App\Services;

use App\Repositories\UserRepository;

class UserService
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * 一致するIDのユーザーを削除する
     * 
     * 
     */
    public function destroy()
    {
        return $this->userRepository->destroy();
    }
}