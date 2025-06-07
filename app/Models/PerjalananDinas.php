<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PerjalananDinas extends Model
{
    protected $table = 'perjalanan_dinas';

    protected $fillable = [
        'user_id', 'description', 'departure_date', 'arrival_date',
        'depature_id', 'arrival_id', 'duration'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function departureCity()
    {
        return $this->belongsTo(City::class, 'depature_id');
    }

    public function arrivalCity()
    {
        return $this->belongsTo(City::class, 'arrival_id');
    }
}
