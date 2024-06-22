<?php

namespace Database\Factories;
use App\Models\User;
use App\Models\Lugar;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resena>
 */
class ResenaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fecha' =>  Carbon::now()->subDays(rand(0, Carbon::now()->diffInDays(Carbon::createFromFormat('Y-m-d', '2023-01-01')))),
            'id_usuario' => User::all()->random()->id_usuario,
            'id_lugar' => Lugar::all()->random()->id_lugar,
            'valoracion' => fake()->numberBetween(0,5),
            'descripcion' => fake()->sentence(40)
        ];
    }
}
