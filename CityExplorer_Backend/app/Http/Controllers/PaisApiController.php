<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePaisRequest;
use App\Http\Requests\UpdatePaisRequest;
use Illuminate\Http\Request;
use App\Models\Pais;
use App\Http\Resources\PaisCollection;
use App\Http\Resources\PaisResource;


class PaisApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relaciones = ['ciudades.lugares'];
        $paises = Pais::with($relaciones)->get();
        return new PaisCollection($paises);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePaisRequest $request)
    {
        $datos = $request->validated();
        return new PaisResource(Pais::create($datos));
    }

    /**
     * Display the specified resource.
     */
    public function show(Pais $pais)
    {
        return new PaisResource($pais);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaisRequest $request, Pais $pais)
    {
        $validatedData = $request->validated();
        $pais->update($validatedData);
        return new PaisResource($pais);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pais $pais)
    {
        $pais->ciudades()->delete();

        if ($pais->delete()) {
            $resultado = $pais->nombre . ' eliminado correctamente';
        } else {
            $resultado = 'Error al eliminar ' . $pais->nombre;
        }

        return response()->json(['Respuesta' => $resultado]);
    }
}
