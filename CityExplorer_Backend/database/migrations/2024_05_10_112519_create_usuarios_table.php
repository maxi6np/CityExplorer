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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->string('nombre', 45)->nullable();
            $table->string('apellidos', 100)->nullable();
            $table->string('email', 45)->unique('usuarios_unique');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 100)->nullable();
            $table->bigInteger('id_usuario', true);
            $table->boolean('verificado')->nullable();
            $table->boolean('admin')->nullable();
            $table->string('imagen', 200)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};
