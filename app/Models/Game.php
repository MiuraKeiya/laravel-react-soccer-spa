<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    /**
     * Mass Assignment(一括代入)を許可するカラムの定義
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'team_id',
        'league_id',
        'season',
        'date',
        'json_detail',
    ];

    /**
     * キャスト（型変換）の定義
     * 
     * @var array
     */
    protected $casts = [
        'json_detail' => 'json',
    ];

    /** 
     * 複合PKのカラム名を指定
     * 
     * @var array
     */
    protected $primaryKey = ['id', 'team_id'];

    /** 
     * オートインクリメントの無効化
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * 所属しているチームとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }

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
