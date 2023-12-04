<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Mail;
use App\Mail\Contacted;

class ContactRepository
{
    /**
     * お問い合わせメールを送信する
     *
     * @param array $params 送信に必要なパラメーター
     * @throws \Exception メールの送信に失敗した場合
     */
    public function send(array $params): void
    {
        // メールを送信
        try {
            Mail::send(new Contacted($params));
        } catch (\Exception $e) {
            throw $e;
        }
    }
}