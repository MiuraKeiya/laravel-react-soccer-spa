<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    use HasFactory;

    /**
     * Mass Assignment(一括代入)を許可するカラムの定義
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
    ];

    /** 
     * オートインクリメントの無効化
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * リーグに所属するチームとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function team()
    {
        return $this->hasMany(Team::class);
    }

    /**
     * リーグに所属する各ランキングとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function rankingByleague()
    {
        return $this->hasMany(RankingByLeague::class);
    }

    /**
     * リーグに所属する試合とのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function game()
    {
        return $this->hasMany(Game::class);
    }

    /**
     * リーグに所属する選手とのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function player()
    {
        return $this->hasMany(Player::class);
    }

    /**
     * 属しているお気に入りとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function favoriteLeague()
    {
        return $this->hasMany(FavoriteLeague::class);
    }
}
