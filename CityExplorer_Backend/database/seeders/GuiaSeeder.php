<?php

namespace Database\Seeders;

use App\Models\Guia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GuiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    private $guias = [
        [
            "id_ciudad" => "1",
            "nombre" => "Jose María Rodriguez",
            "precio" => 12,
            "capacidad" =>"50"
        ],
        [
            "id_ciudad" => "2",
            "nombre" => "Julia Ramirez Osvaldo",
            "precio" => 7,
            "capacidad" =>"30"
        ],
        [
            "id_ciudad" => "3",
            "nombre" => "Albari Triana Lopez",
            "precio" => 8,
            "capacidad" =>"40"
        ],
        [
            "id_ciudad" => "4",
            "nombre" => "Mateo Peña Naves",
            "precio" => 6,
            "capacidad" =>"60"
        ],
        [
            "id_ciudad" => "5",
            "nombre" => "Aitana de Rosario Colombres",
            "precio" => 10,
            "capacidad" =>"45"
        ],
        [
            "id_ciudad" => "6",
            "nombre" => "Manuela de los Arroyos González",
            "precio" => 13,
            "capacidad" =>"35"
        ],
        [
            "id_ciudad" => "7",
            "nombre" => "Zaira Gutierrez Campos",
            "precio" => 5,
            "capacidad" =>"75"
        ],
        [
            "id_ciudad" => "8",
            "nombre" => "Sebastian Pérez de Agravio",
            "precio" => 8,
            "capacidad" =>"40"
        ],
        [
            "id_ciudad" => "9",
            "nombre" => "Herminia Novoa Iglesias",
            "precio" => 6,
            "capacidad" =>"55"
        ],
        [
            "id_ciudad" => "10",
            "nombre" => "Mª Esther Pérez Fernández",
            "precio" => 9,
            "capacidad" =>"65"
        ]
    ];

    public function run(): void
    {
        foreach ($this->guias as $guia) {
            $nuevoGuia = new Guia();
            $nuevoGuia->id_ciudad = $guia['id_ciudad'];
            $nuevoGuia->nombre = $guia['nombre'];
            $nuevoGuia->precio = $guia['precio'];
            $nuevoGuia->capacidad = $guia['capacidad'];
            $nuevoGuia->save();
        }
        $this->command->info('Tabla de guías inicializada con datos');
    }
}
