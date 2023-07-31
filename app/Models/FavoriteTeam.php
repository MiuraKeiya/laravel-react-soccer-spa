<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteTeam extends Model
{
    use HasFactory;

    /**
     * Mass Assignment(一括代入)を許可するカラムの定義
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'team_id',
    ];

    /**
     * 属するユーザーとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * お気に入りに属するチームとのリレーションを定義
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function team()
    {
        return $this->hasMany(Team::class);
    }
}
