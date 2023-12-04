<?php

namespace App\Http\Controllers;

use App\Services\ContactService;
use App\Http\Requests\ContactRequest;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    private $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    /**
     * お問い合わせフォームのデータを処理し、メールを送信する
     *
     * @param ContactRequest $request お問い合わせフォームからのリクエスト
     * @return \Illuminate\Http\JsonResponse JSON形式のレスポンス
     */
    public function send(ContactRequest $request): JsonResponse
    {
        try {
            $response = $this->contactService->send($request);
        } catch (\Exception $e) {
            logger($e);
            return response()->json(['message' => 'メールの送信に失敗しました。'], 400);
        }

        return response()->json(['message' => $response], 200);
    }
}