<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    use HasFactory;

    protected $fillable = [
      'id',
      'league_name',
    ];

    public function teams()
    {
      return $this->hasMany(Team::class);
    }

    public function favoriteLeagues()
    {
      return $this->hasMany(FavoriteLeague::class);
    }

    public function fixturesResults()
    {
      return $this->hasMany(FixturesResult::class);
    }

    public function rankingByLeagues()
    {
      return $this->hasMany(RankingByLeague::class);
    }
}
