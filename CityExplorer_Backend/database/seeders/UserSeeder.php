<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    private $usuarios = [
        [
            "nombre" => "Máximo",
            "apellidos" => "Novoa Pérez",
            "email" => "maxi@mo.com",
            "password" => "12345678",
            "verificado" => "0",
            "admin" => "0"
        ],
        [
            "nombre" => "Menganito",
            "apellidos" => "Alonso del Canto",
            "email" => "menganito@alonso.com",
            "password" => "12345678",
            "verificado" => "0",
            "admin" => "0"
        ],
        [
            "nombre" => "Ainara",
            "apellidos" => "de los Olivos Diaz",
            "email" => "ainara@olivos.com",
            "password" => "12345678",
            "verificado" => "0",
            "admin" => "0"
        ],
        [
            "nombre" => "Antonella",
            "apellidos" => "Lucascilla",
            "email" => "anto@nella.com",
            "password" => "12345678",
            "verificado" => "0",
            "admin" => "0"
        ],

        [
            "nombre" => "Pepe",
            "apellidos" => "Vez",
            "email" => "pepe@vez.com",
            "password" => "12345678",
            "verificado" => "0",
            "admin" => "0"
        ],
        [
            "nombre" => "Eustaquio",
            "apellidos" => "Habichuela",
            "email" => "eustaquio@habichuela.com",
            "password" => "12345678",
            "verificado" => "0",
            "admin" => "0"
        ]
    ];


    public function run(): void
    {
        foreach ($this->usuarios as $user) {
            $nuevoUser = new User();
            $nuevoUser->nombre = $user['nombre'];
            $nuevoUser->apellidos = $user['apellidos'];
            $nuevoUser->email = $user['email'];
            $nuevoUser->password = Hash::make($user['password']);
            $nuevoUser->verificado= $user['verificado'];
            $nuevoUser->save();
        }
        $this->command->info('Tabla de usuarios inicializada con datos');
    }
}
