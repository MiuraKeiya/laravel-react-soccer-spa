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
        Schema::table('users', function (Blueprint $table) {
            $table->softDeletes()->after('remember_token');
            // emailのユニーク制約の削除
            $table->dropUnique('users_email_unique');
            // 複合ユニーク制約の設定
            $table->unique(['email','deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('deleted_at');
            // emailのユニーク制約を再作成
            $table->unique('users_email_unique');
            // 複合ユニーク制約の削除
            $table->dropUnique(['email', 'deleted_at']);
        });
    }
};
