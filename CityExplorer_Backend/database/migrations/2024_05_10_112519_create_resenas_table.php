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
        Schema::create('resenas', function (Blueprint $table) {
            $table->bigInteger('id_resena', true);
            $table->bigInteger('id_usuario')->index('resenas_usuarios_fk');
            $table->bigInteger('id_lugar')->index('resenas_lugares_fk');
            $table->text('descripcion');
            $table->date('fecha');
            $table->tinyInteger('valoracion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resenas');
    }
};
