<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ciudad;
use App\Http\Resources\CiudadCollection;
use App\Http\Resources\CiudadResource;
use GuzzleHttp\Promise\Create;
use App\Http\Requests\CreateCiudadRequest;
use App\Http\Requests\UpdateCiudadRequest;

class CiudadApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relaciones = ['guias.usuarios'];
        $ciudad = Ciudad::with($relaciones)->get();
        return new CiudadCollection($ciudad);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateCiudadRequest $request)
    {
        $datos = $request->validated();
        $datos['password'] = bcrypt($request->password);
        return new CiudadResource(Ciudad::create($datos));
    }

    /**
     * Display the specified resource.
     */
    public function show(Ciudad $ciudad)
    {
        $ciudad->load('guias');
        return new CiudadResource($ciudad);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCiudadRequest $request, Ciudad $ciudad)
    {
        $validatedData = $request->validated();
        $validatedData['password'] = bcrypt($request->password);
        $ciudad->update($validatedData);
        return new CiudadResource($ciudad);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ciudad $ciudad)
    {
        // primero los datos asociados
        // $ciudad->lugares()->delete();
        // $ciudad->guias()->delete();

        if ($ciudad->delete()) {
            $resultado = $ciudad->nombre . ' eliminado correctamente';
        } else {
            $resultado = 'Error al eliminar ' . $ciudad->nombre;
        }

        return response()->json(['Respuesta' => $resultado]);
    }

    public function getCityByName(string $nombreCiudad)
    {
        $ciudad = Ciudad::with('guias', 'lugares')->where("nombre", $nombreCiudad)->first();
        return new CiudadResource($ciudad);
    }
}
