<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Ciudad;
use App\Models\Guia;
use App\Models\Lugar;
use App\Models\Resena;
use App\Models\Reserva;
use App\Models\Pais;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // Pais::factory(10)->create();
        // Ciudad::factory(10)->create();
        // Lugar::factory(10)->create();
        // Resena::factory(10)->create();
        // Reserva::factory(10)->create();

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('paises')->delete();
        $this->call(PaisSeeder::class);

        DB::table('ciudades')->delete();
        $this->call(CiudadSeeder::class);

        DB::table('guias')->delete();
        $this->call(GuiaSeeder::class);

        DB::table('lugares')->delete();
        $this->call(LugarSeeder::class);

        DB::table('usuarios')->delete();
        $this->call(UserSeeder::class);

        Reserva::factory(50)->create();

        Resena::factory(50)->create();
        // DB::table('resenas')->delete();
        // $this->call(ResenaSeeder::class);



    }
}
