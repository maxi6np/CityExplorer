<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Resena;
use App\Models\Lugar;
use App\Models\User;
use Carbon\Carbon;

class ResenaSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $resenas = [
            [
                "descripcion" => "Buena comida y excelente servicio.",
                "valoracion" => 5,
            ],
            [
                "descripcion" => "El lugar es acogedor pero la comida podría mejorar.",
                "valoracion" => 3,
            ],
            [
                "descripcion" => "Servicio lento y comida regular.",
                "valoracion" => 2,
            ],
            [
                "descripcion" => "¡Increíble experiencia! Definitivamente volvería.",
                "valoracion" => 4,
            ],
            [
                "descripcion" => "No recomendaría este lugar a nadie. Mal servicio y comida pobre.",
                "valoracion" => 1,
            ],
            [
                "descripcion" => "No recomendaría este lugar a nadie. Mal servicio y comida pobre.",
                "valoracion" => 1,
            ],
            [
                "descripcion" => "La comida estaba bien, pero el servicio dejó mucho que desear. No volvería.",
                "valoracion" => 2,
            ],
            [
                "descripcion" => "Experiencia promedio. La comida era decente, pero el servicio podría mejorar.",
                "valoracion" => 3,
            ],
            [
                "descripcion" => "Buena comida, pero el servicio fue un poco lento. En general, una experiencia satisfactoria.",
                "valoracion" => 4,
            ],
            [
                "descripcion" => "¡Increíble experiencia! El servicio fue excepcional y la comida estuvo deliciosa. Definitivamente recomendaría este lugar.",
                "valoracion" => 5,
            ],
            [
                "descripcion" => "La comida era aceptable, pero el ambiente era ruidoso y el servicio era mediocre.",
                "valoracion" => 2,
            ],
            [
                "descripcion" => "Experiencia satisfactoria. La comida era buena y el servicio fue amable.",
                "valoracion" => 3,
            ],
            [
                "descripcion" => "Excelente comida y servicio impecable. Definitivamente vale la pena repetir.",
                "valoracion" => 5,
            ],
            [
                "descripcion" => "El servicio fue rápido y amable, pero la comida era decepcionante. No volvería.",
                "valoracion" => 2,
            ],
            [
                "descripcion" => "¡Absolutamente fantástico! La comida era deliciosa y el servicio fue excepcional. Volveré pronto.",
                "valoracion" => 5,
            ]
        ];

        $lugares = Lugar::all();
        $usuarios = User::all();
        $hoy = Carbon::now();

        foreach ($resenas as $resena) {
            $fechaAleatoria = Carbon::createFromTimestamp(mt_rand(strtotime('2023-01-01'), $hoy->getTimestamp()));

            $nuevaResena = new Resena();
            $nuevaResena->descripcion = $resena['descripcion'];
            $nuevaResena->valoracion = $resena['valoracion'];
            $nuevaResena->id_lugar = $lugares->random()->id_lugar;
            $nuevaResena->id_usuario = $usuarios->random()->id_usuario;
            $nuevaResena->fecha = $fechaAleatoria;
            $nuevaResena->save();
        }

        $this->command->info('Tabla de reseñas inicializada con datos');
    }
}
