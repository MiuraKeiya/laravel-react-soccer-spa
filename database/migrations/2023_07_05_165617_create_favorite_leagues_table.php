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
        Schema::create('favorite_leagues', function (Blueprint $table) {
          $table->id();
          $table->foreignId('user_id')->constrained();
          $table->foreignId('league_id')->constrained();
          $table->timestamps();
          $table->unique(['user_id', 'league_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorite_leagues');
    }
};
