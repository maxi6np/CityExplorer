<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUsuarioRequest;
use App\Http\Requests\UpdateUsuarioRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UsuarioCollection;
use App\Http\Resources\UsuarioResource;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class UsuarioApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relaciones = ['reservas', 'resenas'];
        $usuario = User::with($relaciones)->get();
        return new UsuarioCollection($usuario);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUsuarioRequest $request)
    {
        $datos = $request->validated();
        return new UsuarioResource(User::create($datos));
    }

    /**
     * Display the specified resource.
     */
    public function show(User $usuario)
    {
        $usuario->load('reservas', 'resenas');
        return new UsuarioResource($usuario);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUsuarioRequest $request, User $usuario)
    {
        $validatedData = $request->validated();
        $usuario->update($validatedData);
        return new UsuarioResource($usuario);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $usuario)
    {
        $usuario->reservas()->delete();
        $usuario->resenas()->delete();

        if ($usuario->delete()) {
            $resultado = $usuario->nombre . ' eliminado correctamente';
        } else {
            $resultado = 'Error al eliminar ' . $usuario->nombre;
        }

        return response()->json(['Respuesta' => $resultado]);
    }

    public function foundUser(int $id_user)
    {
        if ($usuario = User::findOrFail($id_user)) {
            $usuario->load(['reservas', 'resenas']);
            return response()->json(new UsuarioResource($usuario));

        } else {
            return response()->json(['message' => 'No se encontro usuario con ese id']);
        }
    }

    public function getUserFromToken()
    {
        try{
            $user = Auth::user();

            if(!$user) return response()->json('algo ha ido mal');
            return response()->json($user);
        }
        catch(Exception $e){
            return response()->json([$e->getMessage()]);

        }
    }
}
