<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\PerjalananDinas;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{

    /**
     * Show the Pegawai Dashboard page.
     */
    public function dashboard(): Response
    {
        return Inertia::render('admin/dashboard');
    }

    /**
     * Show the Perdinku page.
     */
    // public function perdinku(): Response
    // {
    //     $user = Auth::user();

    //     $perdin = PerjalananDinas::with([
    //         'user:id,username',
    //         'departureCity:id,name,province,island,is_abroad',
    //         'arrivalCity:id,name,province,island,is_abroad'
    //     ])
    //     ->where('user_id', $user->id)
    //     ->get()
    //     ->map(function ($item) {
    //         return [
    //             'id' => $item->id,
    //             'from' => $item->departureCity->name,
    //             'to' => $item->arrivalCity->name,
    //             'date_from' => Carbon::parse($item->depature_date)->format('d-M-Y'),
    //             'date_until' => Carbon::parse($item->arrival_date)->format('d-M-Y'),
    //             'duration' => $item->duration,
    //             'description' => $item->description,
    //             'status' => $item->status,
    //         ];
    //     });

    //     return Inertia::render('pegawai/perdin-perdinku', ['data' => $perdin]);
    // }

    // /**
    //  * Handle an incoming authentication request.
    //  */
    // public function store(LoginRequest $request): RedirectResponse
    // {
    //     $request->authenticate();

    //     $request->session()->regenerate();

    //     // Get the authenticated user
    //     $user = $request->user();
        
    //     // Redirect based on role
    //     return match($user->role) {
    //         'admin' => redirect()->intended(route('admin.dashboard', absolute: false)),
    //         'manager' => redirect()->intended(route('manager.dashboard', absolute: false)),
    //         default => redirect()->intended(route('pegawai.dashboard', absolute: false)),
    //     };
    // }

    // /**
    //  * Destroy an authenticated session.
    //  */
    // public function destroy(Request $request): RedirectResponse
    // {
    //     Auth::guard('web')->logout();

    //     $request->session()->invalidate();
    //     $request->session()->regenerateToken();

    //     return redirect('/');
    // }
}
