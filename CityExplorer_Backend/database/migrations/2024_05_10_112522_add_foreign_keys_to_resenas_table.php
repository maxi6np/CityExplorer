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
        Schema::table('resenas', function (Blueprint $table) {
            $table->foreign(['id_lugar'], 'resenas_lugares_FK')->references(['id_lugar'])->on('lugares')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign(['id_usuario'], 'resenas_usuarios_FK')->references(['id_usuario'])->on('usuarios')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('resenas', function (Blueprint $table) {
            $table->dropForeign('resenas_lugares_FK');
            $table->dropForeign('resenas_usuarios_FK');
        });
    }
};
