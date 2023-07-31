<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
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
        'team_id',
        'league_id',
        'season',
        'json_statistics',
    ];

    /**
     * キャスト（型変換）の定義
     * 
     * @var array
     */
    protected $casts = [
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
     * 所属しているチームとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
