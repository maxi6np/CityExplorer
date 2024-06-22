<?php


namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */

    public function update(Request $request)
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
            if (!Hash::check($request->current_password, Auth::user()->password)) {
                return response()->json(['message' => 'La contraseña actual es incorrecta'], 400);
            }

            // Actualizar la contraseña del usuario
            Auth::user()->update([
                'password' => Hash::make($request->password),
            ]);

            return response()->json(['message' => 'Contraseña actualizada'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }
}
