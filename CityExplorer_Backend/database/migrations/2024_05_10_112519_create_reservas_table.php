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
        Schema::create('reservas', function (Blueprint $table) {
            $table->bigInteger('id_reserva', true);
            $table->bigInteger('id_guia')->index('reservas_guias_fk');
            $table->bigInteger('id_usuario')->index('reservas_usuarios_fk');
            $table->date('fecha');
            $table->double('importe', null, 0);
            $table->string('estado', 20);
            $table->bigInteger('personas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
};
