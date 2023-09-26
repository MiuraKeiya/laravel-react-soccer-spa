<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleLoginController extends Controller
{
  public function redirectToProvider()
  {
      $redirectUrl = Socialite::driver('google')->redirect()->getTargetUrl();

      return response()->json([
        'redirect_url' => $redirectUrl,
      ]);
  }

  public function handleProviderCallback()
  {
      try {
          $provider_user = Socialite::driver('google')->stateless()->user();
        
          $authUser = User::where('google_id', $provider_user->getId())->first();

          if ($authUser) {
              Auth::loginUsingId($authUser->id);
              
              return response()->json(['user' => $authUser], 200);
          } else {
              $user = User::where('email', $provider_user->getEmail())->first();

              if (!$user) {
                  $user = User::create([
                      'name' => ($provider_user->getName()) ? $provider_user->getName() : $provider_user->getNickname(),
                      'email' => $provider_user->getEmail(),
                      'google_id' => $provider_user->getId(),
                  ]);

                  $user->email_verified_at = Carbon::now();
                  $user->save();
              }

              Auth::loginUsingId($user->id);

              return response()->json(['user' => $user], 200);
          }
      } catch (\Exception $e) {
          return response()->json(['error' => 'An error occurred'], 500);
      }
  }
}
