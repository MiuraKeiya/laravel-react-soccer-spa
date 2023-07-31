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
        Schema::create('games', function (Blueprint $table) {
            $table->bigInteger('id')->unsigned();
            $table->foreignId('team_id')->constrained();
            $table->foreignId('league_id')->constrained();
            $table->integer('season');
            $table->string('date');
            $table->json('json_detail');
            $table->timestamps();

            // 複合PKの設定
            $table->primary(['id', 'team_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
};
