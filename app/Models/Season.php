<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    use HasFactory;

    protected $fillable = [
      'id',
      'season',
    ];

    public function rankingByLeagues()
    {
      return $this->hasMany(RankingByLeague::class);
    }

    public function fixturesResults()
    {
      return $this->hasMany(FixturesResult::class);
    }
}
