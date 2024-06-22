<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Guia;
use App\Models\Ciudad;


class ReservaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $guia = Guia::findOrFail($this->id_guia);

        return [
            'id_reserva' => $this->id_reserva,
            'fecha' => $this->fecha,
            'importe' => $this->importe,
            'estado' => $this->estado,
            'guia' => $guia->nombre,
            'ciudad' => $guia->ciudad->nombre,
            'personas'=> $this->personas,
            'usuario' => new UsuarioResource($this->whenLoaded('usuario'))
        ];
    }
}
