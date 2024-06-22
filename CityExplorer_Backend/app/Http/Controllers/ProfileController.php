<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function updatePassword(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'current_password' => ['required'],
                'password' => ['required']
            ]);

            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()->first()], 400);
            }

            // Verificar si la contraseña actual es correcta
            if (!password_verify($request->current_password, $request->user()->password)) {
                return response()->json(['message' => 'La contraseña actual es incorrecta'], 400);
            }

            // Actualizar la contraseña del usuario
            $request->user()->update([
                'password' => Hash::make($request->password),
            ]);

            return response()->json(['message' => 'Contraseña actualizada', $request->password], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    public function updateProfileImage(Request $request, string $idUser)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => ['required', 'string'],
                'imagen' => ['nullable', 'file']
            ]);


            $imagen_principal = null;

            if ($request->hasFile('imagen')) {
                $imagen = $request->file('imagen');
                $nombreImagen = $request->email . '_fotoPerfil.' . $imagen->getClientOriginalExtension();
                $rutaImagen = Storage::disk('places')->putFileAs('profileImages', $imagen, $nombreImagen);
                $imagen_principal = $rutaImagen;

            }


            $usuario = User::findOrFail($idUser);
            $usuario->imagen = $imagen_principal;
            $usuario->save();



            if ($validator->fails()) {
                return response()->json(['message' => 'La validación ha fallado', 'errors' => $validator->errors()], 400);
            }

            return response()->json(['message' => 'Imagen guardada', $imagen_principal], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }
}
