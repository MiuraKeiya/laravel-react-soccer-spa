<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FixturesResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_id',
        'league_id',
        'date',
        'json_result',
    ];

    protected $casts = [
        'json_result'  => 'json',
    ];

    public function teams()
    {
      return $this->belongsTo(Team::class);
    }

    public function leagues()
    {
      return $this->belongsTo(League::class);
    }
}
