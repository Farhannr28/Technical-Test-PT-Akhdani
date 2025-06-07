<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'cities_master';

    protected $fillable = [
        'name', 'latitude', 'longitude', 'province', 'island', 'is_abroad'
    ];
}
