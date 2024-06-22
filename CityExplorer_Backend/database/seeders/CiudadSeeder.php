<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ciudad;


class CiudadSeeder extends Seeder
{
    private $ciudades = [
        [
            'nombre' => 'Oviedo',
            'id_pais' => '1',
            'latitud' => '43.3614',
            'longitud' => '-5.8448'
        ],
        [
            'nombre' => 'Gijón',
            'id_pais' => '1',
            'latitud' => '43.5322',
            'longitud' => '-5.6611'
        ],
        [
            'nombre' => 'Avilés',
            'id_pais' => '1',
            'latitud' => '43.5569',
            'longitud' => '-5.9248'
        ],
        [
            'nombre' => 'Langreo',
            'id_pais' => '1',
            'latitud' => '43.3006',
            'longitud' => '-5.6889'
        ],
        [
            'nombre' => 'Mieres',
            'id_pais' => 1,
            'latitud' => '43.2509',
            'longitud' => '-5.7743'
        ],
        [
            'nombre' => 'Cangas de Onís',
            'id_pais' => '1',
            'latitud' => '43.3484',
            'longitud' => '-5.1287'
        ],
        [
            'nombre' => 'Llanes',
            'id_pais' => '1',
            'latitud' => '43.4216',
            'longitud' => '-4.7567'
        ],
        [
            'nombre' => 'Ribadesella',
            'id_pais' => '1',
            'latitud' => '43.4615',
            'longitud' => '-5.0638'
        ],
        [
            'nombre' => 'Cudillero',
            'id_pais' => '1',
            'latitud' => '43.5560',
            'longitud' => '-6.1382'
        ],
        [
            'nombre' => 'Luarca',
            'id_pais' => '1',
            'latitud' => '43.5403',
            'longitud' => '-6.5366'
        ]
    ];


    public function run(): void
    {
        foreach ($this->ciudades as $ciudad) {
            $nuevoCiudad = new Ciudad();
            $nuevoCiudad->nombre = $ciudad['nombre'];
            $nuevoCiudad->id_pais = $ciudad['id_pais'];
            $nuevoCiudad->latitud = $ciudad['latitud'];
            $nuevoCiudad->longitud = $ciudad['longitud'];
            $nuevoCiudad->save();

        }
        $this->command->info('Tabla de ciudades inicializada con datos');
    }
}
