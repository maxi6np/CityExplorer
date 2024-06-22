<?php

namespace App\Http\Controllers;

use App\Models\Lugar;
use Illuminate\Http\Request;
use App\Http\Resources\LugarCollection;
use App\Http\Resources\LugarResource;
use App\Http\Requests\CreateLugarRequest;
use App\Http\Requests\UpdateLugarRequest;
use App\Http\Requests\UpdatePacienteRequest;

class LugarApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relaciones = ['resenas.usuario','ciudad'];
        $lugares = Lugar::with($relaciones)->get();
        return new LugarCollection($lugares);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateLugarRequest $request)
    {
        $datos = $request->validated();
        return new LugarResource(Lugar::create($datos));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $idLugar)
    {
        $lugar = Lugar::findOrFail($idLugar);
        $lugar->load('resenas.usuario','ciudad');
        return new LugarResource($lugar);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLugarRequest $request, Lugar $lugar)
    {
        $validatedData = $request->validated();
        $lugar->update($validatedData);
        return new LugarResource($lugar);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lugar $lugar)
    {
        $lugar->ciudad()->delete();
        $lugar->resenas()->delete();

        if ($lugar->delete()) {
            $resultado = $lugar->nombre . ' eliminado correctamente';
        } else {
            $resultado = 'Error al eliminar ' . $lugar->nombre;
        }

        return response()->json(['Respuesta' => $resultado]);
    }
}
