<?php

namespace Database\Factories;

use App\Models\Ciudad;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lugar>
 */
class LugarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => fake()->city(),
            'id_ciudad' => Ciudad::all()->random()->id_ciudad,
            'imagen' => fake()->imageUrl('/public/img'),
            'descripcion' => fake()->sentence(40), // true para que devuelva una cadena en lugar de un array
            'hora_apertura' => fake()->time(),
            'hora_cierre' => fake()->time(),
            'precio' => fake()->randomFloat(2,0,50),
            'latitud' => fake()->latitude($min = 36, $max = 44),
            'longitud' => fake()->longitude($min = -10, $max = 4)
        ];
    }
}
