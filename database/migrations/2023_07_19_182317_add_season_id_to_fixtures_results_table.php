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
        Schema::table('fixtures_results', function (Blueprint $table) {
            $table->foreignId('season_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fixtures_results', function (Blueprint $table) {
            // 追加したカラムを削除
            $table->dropForeign(['season_id']);
            $table->dropColumn('season_id');
        });
    }
};
