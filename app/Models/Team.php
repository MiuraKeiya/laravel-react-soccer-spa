<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
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
        'league_id',
        'season',
        'json_information',
        'json_statistics',
    ];

    /**
     * キャスト（型変換）の定義
     * 
     * @var array
     */
    protected $casts = [
        'json_information' => 'json',
        'json_statistics' => 'json',
    ];

    /** 
     * 複合PKのカラム名を指定
     * 
     * @var array
     */
    protected $primaryKey = ['id', 'season'];

    /** 
     * オートインクリメントの無効化
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * 所属しているリーグとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function league()
    {
        return $this->belongsTo(League::class);
    }

    /**
     * チームに所属する選手とのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function player()
    {
        return $this->hasMany(Player::class);
    }

    /**
     * チームに所属する試合とのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function game()
    {
        return $this->hasMany(Game::class);
    }

    /**
     * 属しているお気に入りとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function favoriteTeam()
    {
        return $this->belongsTo(FavoriteTeam::class);
    }
}
