<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteTeam extends Model
{
    use HasFactory;

    protected $fillable = [
      'user_id',
      'team_id',
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function team()
    {
      return $this->belongsTo(Team::class, 'team_id', 'id');
    }

    public function previousTeam()
    {
      return $this->belongsTo(PreviousTeam::class, 'previous_team_id', 'id');
    }
}
