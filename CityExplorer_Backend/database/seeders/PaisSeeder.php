<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pais;

class PaisSeeder extends Seeder
{
    private $paises = [
        [
            "nombre" => "España"
        ]
    ];


    public function run(): void
    {
        foreach ($this->paises as $pais) {
            $nuevoPais = new Pais();
            $nuevoPais->nombre = $pais['nombre'];
            $nuevoPais->save();
        }
        $this->command->info('Tabla de países inicializada con datos');
    }
}
