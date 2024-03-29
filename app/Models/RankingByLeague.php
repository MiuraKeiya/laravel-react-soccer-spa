<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RankingByLeague extends Model
{
    use HasFactory;

    /**
     * Mass Assignment(一括代入)を許可するカラムの定義
     *
     * @var array
     */
    protected $fillable = [
        'league_id',
        'season',
        'json_standings',
        'json_scorer',
        'json_assist',
        'json_yellow_card',
        'json_red_card',
    ];

    /**
     * キャスト（型変換）の定義
     * 
     * @var array
     */
    protected $casts = [
        'json_standings' => 'json',
        'json_scorer' => 'json',
        'json_assist' => 'json',
        'json_yellow_card' => 'json',
        'json_red_card' => 'json',
    ];

    /** 
     * 複合PKのカラム名を指定
     * 
     * @var array
     */
    protected $primaryKey = ['league_id', 'season'];

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
}
