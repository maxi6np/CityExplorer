<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create(Request $request): View
    {
        return view('auth.reset-password', ['request' => $request]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */

     public function store(Request $request)
     {
         try {
             $request->validate([
                 'token' => ['required'],
                 'email' => ['required'],
                 'password' => ['required'],
             ]);

             $status = Password::reset(
                 $request->only('email', 'password', 'token'),
                 function ($user) use ($request) {
                     $user->forceFill([
                         'password' => Hash::make($request->password),
                         'remember_token' => Str::random(60),
                     ])->save();

                     event(new PasswordReset($user));
                 }
             );

             if ($status == Password::PASSWORD_RESET) {
                 return response()->json(['message' => 'Contraseña restablecida con éxito'], 200);
             } else {
                 return response()->json(['message' => 'Error al restablecer la contrasena', $status], 422);
             }
         } catch (ValidationException $e) {
             return response()->json(['message' => $e->getMessage()], 422);
         } catch (\Exception $e) {
             // Manejo de otras excepciones no previstas
             return response()->json(['message' => 'Se produjo un error al procesar la solicitud'], 500);
         }

     }

}
