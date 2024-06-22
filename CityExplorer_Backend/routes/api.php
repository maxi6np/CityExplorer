<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioApiController;
use App\Http\Controllers\CiudadApiController;
use App\Http\Controllers\LugarApiController;
use App\Http\Controllers\PaisApiController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservaApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/update-password', [ProfileController::class, 'updatePassword'])->name('profile.updatePassword');
    Route::post('/update-profileImage/{id}', [ProfileController::class, 'updateProfileImage'])->name('profile.updateProfileImage');
    Route::get('/ciudad/{nombre}', [CiudadApiController::class, 'getCityByName'])->name('ciudad.getCityByName');
    Route::get('/complete/{idReserva}', [ReservaApiController::class, 'complete'])->name('reserva.complete');
    Route::get('/cancel/{idReserva}', [ReservaApiController::class, 'cancel'])->name('reserva.cancel');
});

Route::apiResource('usuarios', UsuarioApiController::class)->parameters(['usuarios' => 'id_usuario',]);
Route::apiResource('ciudades', CiudadApiController::class)->parameters(['ciudades' => 'id_ciudad',]);
Route::apiResource('lugares', LugarApiController::class)->parameters(['lugares' => 'id_lugar',]);
Route::apiResource('paises', PaisApiController::class)->parameters(['paises' => 'id_pais',]);
Route::apiResource('reservas', ReservaApiController::class)->parameters(['reservas' => 'id_reserva',]);



