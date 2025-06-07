<?php

namespace App\Http\Controllers\SDM;

use App\Http\Controllers\Controller;
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
        $perdin = PerjalananDinas::with([
            'user:id,username',
            'departureCity:id,name,province,island,is_abroad',
            'arrivalCity:id,name,province,island,is_abroad'
        ])
        ->get()
        ->map(function ($item) {
            return [
                'id' => $item->id,
                'from' => $item->departureCity->name,
                'to' => $item->arrivalCity->name,
                'date_from' => Carbon::parse($item->depature_date)->format('d-M-Y'),
                'date_until' => Carbon::parse($item->arrival_date)->format('d-M-Y'),
                'duration' => $item->duration,
                'description' => $item->description,
                'status' => $item->status,
            ];
        });

        return Inertia::render('master-data-kota', ['data' => $perdin]);
    }
}
