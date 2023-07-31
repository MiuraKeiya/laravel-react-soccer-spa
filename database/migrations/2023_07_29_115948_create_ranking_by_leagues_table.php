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
            $table->foreignId('league_id')->constrained();
            $table->integer('season');
            $table->json('json_standings');
            $table->json('json_scorer');
            $table->json('json_assist');
            $table->json('json_yellow_card');
            $table->json('json_red_card');
            $table->timestamps();

            // 複合PKの設定
            $table->primary(['league_id', 'season']);
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
