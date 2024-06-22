<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Models\Reserva;
use Illuminate\Http\Resources\Json\JsonResource;

class GuiaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_guia' => $this->id_guia,
            'id_ciudad' => $this->id_ciudad,
            'nombre' => $this->nombre,
            'precio' => $this->precio,
            'capacidad' => $this->capacidad,
            // 'reservas' => ReservaResource::collection($this->whenLoaded('reservas'))
            'reservas' => Reserva::where('id_guia', $this->id_guia)->count(),
            'usuarios' => UsuarioResource::collection($this->whenLoaded('usuarios'))
        ];
    }
}
