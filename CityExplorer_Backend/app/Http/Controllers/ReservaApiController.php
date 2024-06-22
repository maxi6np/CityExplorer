<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateReservaRequest;
use App\Http\Resources\ReservaCollection;
use App\Http\Resources\ReservaResource;
use App\Models\Reserva;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class ReservaApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservas = Reserva::all();
        return new ReservaCollection($reservas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateReservaRequest $request)
    {
        try {
            $datos = $request->validated();

            // Cambiar el formato de la fecha
            $fecha = Carbon::createFromFormat('d-m-Y', $datos['fecha']);
            $datos['fecha'] = $fecha->format('Y-m-d');

            $datos['estado'] = 0;

            if (Reserva::create($datos)) {
                return response()->json(["message" => "reserva creada"]);
            }
        } catch (Exception $e) {
            return response()->json(["Error: " => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function complete(string $idReserva)
    {
        try {
            if ($reserva = Reserva::findOrFail($idReserva)) {
                if ($reserva->estado == 0) {
                    $reserva->estado = 1;
                    $reserva->save();
                    return response()->json(["message" => "Reserva completada", $reserva]);
                }
            }
            return response()->json(["Error: Algo ha ido mal"]);
        } catch (Exception $e) {
            return response()->json(["Error: " => $e->getMessage()]);
        }
    }

    public function cancel(string $idReserva)
    {
        try {
            if ($reserva = Reserva::findOrFail($idReserva)) {
                if ($reserva->estado == 0) {
                    $reserva->estado = -1;
                    $reserva->save();
                    return response()->json(["message" => "Reserva anulada", $reserva]);
                }
            }
            return response()->json(["Error: Algo ha ido mal"]);
        } catch (Exception $e) {
            return response()->json(["Error: " => $e->getMessage()]);
        }
    }
}
