<?php

namespace App\Services;

use App\Repositories\ContactRepository;
use App\Http\Requests\ContactRequest;

class ContactService 
{
    private $contactRepository;

    public function __construct(ContactRepository $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    /**
     * お問い合わせメールを送信する
     *
     * @param ContactRequest $request お問い合わせフォームからのリクエスト
     * @return string 成功メッセージ
     * @throws \Exception メールの送信に失敗した場合
     */
    public function send(ContactRequest $request): string
    {
        $params = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ];

        // メール送信
        try {
            $this->contactRepository->send($params);
        } catch (\Exception $e) {
            throw $e;
        }

        return 'メールの送信に成功しました。';
    }
}