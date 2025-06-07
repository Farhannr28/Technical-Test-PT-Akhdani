<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\PerjalananDinas;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MasterDataController extends Controller
{
    /**
     * Show all Kota Data
     */
    public function create(): Response
    {
        $cities = City::select('id', 'name', 'province', 'island', 'is_abroad', 'latitude', 'longitude')
        ->get()
        ->map(function ($city) {
            return [
                'id' => $city->id,
                'name' => $city->name,
                'province' => $city->province,
                'island' => $city->island,
                'is_foreign' => $city->is_abroad,
                'latitude' => (float) $city->latitude,
                'longitude' => (float) $city->longitude,
            ];
        });

        return Inertia::render('master-data-kota', [
            'data' => $cities,
        ]);
    }
}
