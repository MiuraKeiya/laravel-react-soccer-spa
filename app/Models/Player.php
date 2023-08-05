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
        'api_player_id',
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
