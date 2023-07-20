<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RankingByLeague extends Model
{
    use HasFactory;

    protected $fillable = [
      'id',
      'season_id',
      'league_id',
      'json_team_ranking',
      'json_scorer_ranking',
      'json_assist_ranking',
      'json_yellow_ranking',
      'json_red_ranking',
    ];

    protected $casts = [
      'json_team_ranking'  => 'json',
      'json_scorer_ranking'  => 'json',
      'json_assist_ranking'  => 'json',
      'json_yellow_ranking'  => 'json',
      'json_red_ranking'  => 'json',
    ];

    public function leagues()
    {
      return $this->belongsTo(League::class);
    } 

    public function seasons()
    {
      return $this->belongsTo(Season::class);
    } 
}
