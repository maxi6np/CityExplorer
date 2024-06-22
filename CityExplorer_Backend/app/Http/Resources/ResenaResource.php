<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Lugar;
use App\Models\Ciudad;


class ResenaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $lugar = Lugar::findOrFail($this->id_lugar);
        $nombreCiudad = Ciudad::findOrFail($lugar->id_ciudad)->nombre;

        return [
            'id_resena' => $this->id_resena,
            'valoracion' => $this->valoracion,
            'descripcion' => $this->descripcion,
            'fecha' => $this->fecha,
            'lugar' => Lugar::findOrFail($this->id_lugar)->nombre,
            'ciudad' => $nombreCiudad,
            'usuario' => new UsuarioResource($this->whenLoaded('usuario'))
        ];
    }
}
