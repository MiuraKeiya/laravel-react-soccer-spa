<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\contracts\LoginResponse;
use Laravel\Fortify\Contracts\LogoutResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // 新規登録のレスポンスをJSONに変更
        $this->app->instance(\Laravel\Fortify\Http\Responses\RegisterResponse::class, new class implements RegisterResponse {
            public function toResponse($request)
            {
                return response()->json([
                    'user' => $request->user()
                ], 201);
            }
        });

        // ログインのレスポンスをJSONに変更
        $this->app->instance(\Laravel\Fortify\Http\Responses\LoginResponse::class, new class implements LoginResponse {
            public function toResponse($request)
            {
                return response()->json([
                    'user' => $request->user()
                ], 200);
            }
        });

        // ログアウトのレスポンスをJSONに変更
        $this->app->instance(\Laravel\Fortify\Http\Responses\LogoutResponse::class, new class implements LogoutResponse {
            public function toResponse($request)
            {
                return response()->json([], 200);
            }
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
