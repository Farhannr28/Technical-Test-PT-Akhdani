<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::group(['middleware' => ['auth', 'role:admin']], function () {
    Route::get('/admin/dashboard', 'AdminController@dashboard');
});

Route::group(['middleware' => ['auth', 'role:manager']], function () {
    Route::get('/pegawai/perdin-dashboard', 'PegawaiController@dashboard');
});

Route::group(['middleware' => ['auth', 'role:user']], function () {
    Route::get('/sdm/perdin-dashboard', 'SDMController@dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
