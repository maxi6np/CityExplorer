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
        Schema::create('lugares', function (Blueprint $table) {
            $table->bigInteger('id_lugar', true);
            $table->string('nombre')->nullable();
            $table->string('imagen')->nullable();
            $table->text('descripcion')->nullable();
            $table->time('hora_apertura')->nullable();
            $table->time('hora_cierre')->nullable();
            $table->double('precio', null, 0)->nullable();
            $table->bigInteger('id_ciudad')->index('lugares_ciudades_fk');
            $table->double('latitud', null, 0);
            $table->double('longitud', null, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lugares');
    }
};
