<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Ciudad;
use App\Models\Guia;

class GuiaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Obtener todos los IDs de ciudades existentes
        $idsCiudadesExistentes = Ciudad::pluck('id_ciudad')->toArray();

        // Obtener los IDs de ciudades que aún no se han utilizado para crear guías
        $idsCiudadesUtilizadas = Guia::pluck('id_ciudad')->toArray();
        $idsCiudadesDisponibles = array_diff($idsCiudadesExistentes, $idsCiudadesUtilizadas);

        // Verificar si hay ciudades disponibles
        if (empty($idsCiudadesDisponibles)) {
            // Si no hay ciudades disponibles, utilizar un ID aleatorio de todas las ciudades existentes
            $idCiudad = $this->faker->randomElement($idsCiudadesExistentes);
        } else {
            // Si hay ciudades disponibles, utilizar un ID aleatorio de las ciudades disponibles
            $idCiudad = $this->faker->randomElement($idsCiudadesDisponibles);
        }

        return [
            'id_ciudad' => $idCiudad,
            'nombre' => $this->faker->name(),
            'precio' => $this->faker->numberBetween(5, 15),
            'capacidad' => $this->faker->numberBetween(50, 100)
        ];
    }
}
