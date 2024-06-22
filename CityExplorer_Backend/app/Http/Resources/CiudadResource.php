<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CiudadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_ciudad' => $this->id_ciudad,
            'nombre' => $this->nombre,
            'id_pais' => $this->id_pais,
            'latitud' => $this->latitud,
            'longitud' => $this->longitud,
            'guia' => GuiaResource::collection($this->whenLoaded('guias')),
            'lugares' => LugarResource::collection($this->whenLoaded('lugares'))
        ];
    }
}
