<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Guia;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reserva>
 */
class ReservaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $idGuia = Guia::all()->random()->id_guia;
        $precioGuia = Guia::findOrFail($idGuia)->precio;
        $personas = fake()->numberBetween(1,10);

        return [
            'id_usuario' => User::all()->random()->id_usuario,
            'id_guia' => $idGuia,
            'fecha' =>  Carbon::now()->subDays(rand(0, Carbon::now()->diffInDays(Carbon::createFromFormat('Y-m-d', '2023-01-01')))),
            'importe' => $precioGuia * $personas,
            'estado' => fake()->boolean(),
            'personas' => $personas
        ];
    }
}
