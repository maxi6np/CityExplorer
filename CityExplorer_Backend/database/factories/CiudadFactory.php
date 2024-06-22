<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Pais;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ciudad>
 */
class CiudadFactory extends Factory
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
            'id_pais' => Pais::all()->random()->id_pais,
            'latitud' => fake()->latitude($min = 36, $max = 44),
            'longitud' => fake()->longitude($min = -10, $max = 4)
        ];
    }
}
