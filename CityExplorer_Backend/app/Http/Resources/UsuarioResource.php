<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsuarioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_usuario' => $this->id_usuario,
            'nombre' => $this->nombre,
            'apellidos' => $this->apellidos,
            'email' => $this->email,
            'password' => $this->password,
            'verificado' => $this->verificado,
            'admin' => $this->admin,
            'imagen' => $this->imagen,
            'reservas' => ReservaResource::collection($this->whenLoaded('reservas')),
            'resenas' => ResenaResource::collection($this->whenLoaded('resenas')),
        ];
    }
}
