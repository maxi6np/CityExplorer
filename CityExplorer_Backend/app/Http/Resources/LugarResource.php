<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use App\Models\Ciudad;

class LugarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $horaApertura = substr($this->hora_apertura, 0, 5);
        $horaCierre = substr($this->hora_cierre, 0, 5);

        return [
            'id_lugar' => $this->id_lugar,
            'nombre' => $this->nombre,
            'imagen' => $this->imagen,
            'descripcion' => $this->descripcion,
            'tipo_lugar' => $this->tipo_lugar,
            'hora_apertura' => $horaApertura,
            'hora_cierre' => $horaCierre,
            'precio' => $this->precio,
            'latitud' => $this->latitud,
            'longitud' => $this->longitud,
            'ciudad' => Ciudad::where('id_ciudad', $this->id_ciudad)->pluck('nombre'),
            'resenas' => ResenaResource::collection($this->whenLoaded('resenas'))

        ];
    }
}
