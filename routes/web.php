<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Pegawai\PegawaiController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\SDM\SDMController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/auth/index', function () {
    return Inertia::render('auth/index');
})->name('auth-index');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

Route::group(['middleware' => ['auth', 'role:ADMIN']], function () {
    Route::get('/admin/dashboard', 'AdminController@dashboard')->name('admin.dashboard');
});

Route::group(['middleware' => ['auth', 'role:PEGAWAI']], function () {
    Route::get('/dashboard', [PegawaiController::class, 'dashboard'])->name('pegawai.dashboard');
});

Route::group(['middleware' => ['auth', 'role:PEGAWAI']], function () {
    Route::get('/pegawai/perdinku', [PegawaiController::class, 'perdinku'])->name('pegawai.perdinku');
});

Route::group(['middleware' => ['auth', 'role:SDM']], function () {
    Route::get('/sdm/dashboard', 'SDMController@dashboard')->name('sdm.dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
