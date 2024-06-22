<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Auth\AuthenticationException;


class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        try {
            $credentials = $request->only('email', 'password');

            $validator = Validator::make($credentials, [
                'email' => 'required|exists:usuarios,email',
            ], [
                'email.exists' => 'Usuario no existe',
            ]);

            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                return response()->json(['message' => $errors[0]], 422);
            }

            if (!Auth::attempt($credentials)) {
                return response()->json(['message' => 'Contraseña incorrecta'], 422);
            }


            $request->session()->regenerate();
            Auth::user()->tokens()->delete();
            $token = Auth::user()->createToken('token', ['usuario-registrado']);
            return response()->json([
                'message' => 'correcto',
                'token' => $token->plainTextToken,
                'username' => Auth::user()->nombre,
                'user' => Auth::user(),
                'rememberUser' => $request->rememberUser
            ], 200);

        } catch (AuthenticationException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error en la autenticación', $e->getMessage()], 500);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        return response()->json(['message' => 'Sesión cerrada'], 200);
    }
}
