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
        Schema::create('ranking_by_leagues', function (Blueprint $table) {
            $table->id();
            $table->foreignId('season_id')->constrained();
            $table->foreignId('league_id')->constrained();
            $table->json('json_team_ranking')->nullable();
            $table->json('json_scorer_ranking')->nullable();
            $table->json('json_assist_ranking')->nullable();
            $table->json('json_yellow_ranking')->nullable();
            $table->json('json_red_ranking')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ranking_by_leagues');
    }
};
