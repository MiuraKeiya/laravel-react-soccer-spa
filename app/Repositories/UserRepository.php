<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserRepository
{
    /**
     * 一致するIDのユーザーを削除する
     * 
     * @return void
     */
    public function destroy(): void
    {
        // 認証済みユーザーを取得
        $id = Auth::id(); 

        // 一致するIDのユーザーを取得
        $user = User::find($id);

        // ユーザーを削除する
        $user->delete();
    }
}