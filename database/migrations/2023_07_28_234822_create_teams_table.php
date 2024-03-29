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
        Schema::create('teams', function (Blueprint $table) {
            $table->bigInteger('id')->unsigned();
            $table->string('name');
            $table->foreignId('league_id')->constrained();
            $table->integer('season');
            $table->json('json_information');
            $table->json('json_statistics');
            $table->json('json_transfer');
            $table->timestamps();

            // 複合PKの設定
            $table->primary(['id', 'season']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
};
