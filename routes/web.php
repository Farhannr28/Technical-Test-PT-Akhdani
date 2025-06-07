<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\MasterDataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Pegawai\PegawaiController;
use App\Http\Controllers\SDM\SDMController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', function () {
    if (!Auth::check()) {
        return redirect('/auth/index');
    }

    $role = strtolower(Auth::user()->role); // make sure it's lowercase if your route uses lowercase paths

    return redirect("/{$role}/dashboard");
});

Route::get('/auth/index', function () {
    return Inertia::render('auth/index');
})->name('auth-index');


Route::group(['middleware' => ['auth', 'role:ADMIN']], function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
});

Route::group(['middleware' => ['auth', 'role:PEGAWAI']], function () {
    Route::get('/pegawai/dashboard', [PegawaiController::class, 'dashboard'])->name('pegawai.dashboard');
});

Route::group(['middleware' => ['auth', 'role:PEGAWAI']], function () {
    Route::get('/pegawai/perdinku', [PegawaiController::class, 'perdinku'])->name('pegawai.perdinku');
});

Route::group(['middleware' => ['auth', 'role:SDM']], function () {
    Route::get('/sdm/dashboard', [SDMController::class, 'dashboard'])->name('sdm.dashboard');
});

Route::group(['middleware' => ['auth', 'role:SDM']], function () {
    Route::get('/sdm/pengajuan', [SDMController::class, 'pengajuan'])->name('sdm.pengajuan');
});

Route::group(['middleware' => ['auth', 'role:SDM,ADMIN']], function () {
    Route::get('master-data-kota', [MasterDataController::class, 'create'])->name('master.data.kota');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
