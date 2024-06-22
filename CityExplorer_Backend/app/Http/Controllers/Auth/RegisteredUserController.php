<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Usuario;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): View
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:45', 'unique:usuarios'],
                'password' => ['required', 'string','max:100'],
                'nombre' => ['required', 'string', 'max:45'],
                'apellidos' => ['required', 'string', 'max:100'],

            ]);

            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'nombre' => $request->nombre,
                'apellidos' => $request->apellidos,
                'verificado' => false,
                'admin' => false
            ]);

            event(new Registered($user));

            Auth::login($user);

            return response()->json(['message' => 'Usuario registrado correctamente', $user], 201);

            if ($validator->fails()) {
                return response()->json(['message' => 'La validación ha fallado', 'errors' => $validator->errors()], 422);
            }
        } catch (\Illuminate\Database\QueryException $exception) {
            $errorCode = $exception->errorInfo[1];
            if ($errorCode === 1062) {
                return response()->json(['message' => 'Este usuario ya existe'], 422);
            }
            return response()->json(['message' => 'Error al procesar la solicitud', $exception], 500);
        }
    }
}
