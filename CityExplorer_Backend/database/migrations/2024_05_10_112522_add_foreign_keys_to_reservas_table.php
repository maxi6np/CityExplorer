<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reservas', function (Blueprint $table) {
            $table->foreign(['id_guia'], 'reservas_guias_FK')->references(['id_guia'])->on('guias')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign(['id_usuario'], 'reservas_usuarios_FK')->references(['id_usuario'])->on('usuarios')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reservas', function (Blueprint $table) {
            $table->dropForeign('reservas_guias_FK');
            $table->dropForeign('reservas_usuarios_FK');
        });
    }
};
