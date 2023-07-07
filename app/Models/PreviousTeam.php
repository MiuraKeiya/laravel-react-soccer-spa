<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreviousTeam extends Model
{
    use HasFactory;

    protected $fillable = [
      'id',
      'team_name',
      'league_id',
    ];
    
    public function league()
    {
      return $this->belongsTo(League::class);
    }

    public function favoriteteams()
    {
        return $this->hasMany(FavoriteTeam::class);
    }

}
