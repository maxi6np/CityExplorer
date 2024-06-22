<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateResenaRequest;
use App\Http\Requests\UpdateResenaRequest;
use App\Http\Resources\ResenaCollection;
use App\Http\Resources\ResenaResource;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Resena;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ResenaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relaciones = ['usuario'];
        $resenas = Resena::with($relaciones)->get();
        return new ResenaCollection($resenas);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateResenaRequest $resena)
    {

        $datos = $resena->validated();
        $datos['fecha'] = Carbon::now();
        return new ResenaResource(Resena::create($datos));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResenaRequest $resena, string $id_resena)
    {
        try {
            $resenaUpdate = Resena::findOrFail($id_resena);
            $validatedData = $resena->validated();
            $resenaUpdate['fecha'] = Carbon::now();
            $resenaUpdate->update($validatedData);

            return response()->json([
                'message' => 'Resena actualizada',
                'data' => $resenaUpdate
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error: ' . $e->getMessage()], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */


    public function destroy(int $idresena)
    {
        try {
            $resena = Resena::findOrFail($idresena);

            if ($resena->delete()) {
                $resultado = 'Resena eliminada';
            } else {
                $resultado = 'Error al eliminar la reseña número ' . $resena->id_resena;
            }
        } catch(ModelNotFoundException $e){
            $resultado = "Resena con el id $idresena no encontrada";
        } catch (Exception $e) {
            $resultado = 'Error: ' . $e->getMessage();
        }

        return response()->json(['message' => $resultado], 200);
    }
}
