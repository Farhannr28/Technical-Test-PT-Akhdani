<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class cities_master_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('cities_master')->insert([
            [
                'name' => 'Jakarta',
                'latitude' => -6.2088,
                'longitude' => 106.8456,
                'province' => 'DKI Jakarta',
                'island' => 'Jawa',
                'is_abroad' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Surabaya',
                'latitude' => -7.2575,
                'longitude' => 112.7521,
                'province' => 'Jawa Timur',
                'island' => 'Jawa',
                'is_abroad' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bandung',
                'latitude' => -6.9175,
                'longitude' => 107.6191,
                'province' => 'Jawa Barat',
                'island' => 'Jawa',
                'is_abroad' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Medan',
                'latitude' => 3.5952,
                'longitude' => 98.6722,
                'province' => 'Sumatera Utara',
                'island' => 'Sumatera',
                'is_abroad' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Makassar',
                'latitude' => -5.1477,
                'longitude' => 119.4327,
                'province' => 'Sulawesi Selatan',
                'island' => 'Sulawesi',
                'is_abroad' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Singapore',
                'latitude' => 1.3521,
                'longitude' => 103.8198,
                'province' => '',
                'island' => 'Asia Tenggara',
                'is_abroad' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tokyo',
                'latitude' => 35.6762,
                'longitude' => 139.6503,
                'province' => '',
                'island' => 'Honshu',
                'is_abroad' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bangkok',
                'latitude' => 13.7563,
                'longitude' => 100.5018,
                'province' => '',
                'island' => 'Asia Tenggara',
                'is_abroad' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kuala Lumpur',
                'latitude' => 3.1390,
                'longitude' => 101.6869,
                'province' => '',
                'island' => 'Semenanjung Malaya',
                'is_abroad' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Manila',
                'latitude' => 14.5995,
                'longitude' => 120.9842,
                'province' => '',
                'island' => 'Luzon',
                'is_abroad' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
