<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class perjalanan_dinas_seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('perjalanan_dinas')->truncate();

        $trips = [
            [
                'user_id' => 3,
                'description' => 'Rapat koordinasi dengan vendor',
                'departure_date' => Carbon::now()->addDays(5),
                'arrival_date' => Carbon::now()->addDays(7),
                'depature_id' => 1, 
                'arrival_id' => 3,
                'duration' => 2,
                'status' => 'PENDING',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 5,
                'description' => 'Pelatihan di Waystar Royco Management Training Camp cabang Makassar',
                'departure_date' => Carbon::now()->addDays(10),
                'arrival_date' => Carbon::now()->addDays(15),
                'depature_id' => 2, 
                'arrival_id' => 5,
                'duration' => 5,
                'status' => 'PENDING',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 3, 
                'description' => 'Audit cabang Thailand',
                'departure_date' => Carbon::now()->addDays(3),
                'arrival_date' => Carbon::now()->addDays(6),
                'depature_id' => 1, 
                'arrival_id' => 8,
                'duration' => 3,
                'status' => 'PENDING',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 4,
                'description' => 'Konferensi Nasional',
                'departure_date' => Carbon::now()->addDays(15),
                'arrival_date' => Carbon::now()->addDays(20),
                'depature_id' => 3,
                'arrival_id' => 2,
                'duration' => 5,
                'status' => 'PENDING',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 4,
                'description' => 'Konferensi internasional di Luzon',
                'departure_date' => Carbon::now()->addDays(15),
                'arrival_date' => Carbon::now()->addDays(20),
                'depature_id' => 2,
                'arrival_id' => 10,
                'duration' => 5,
                'status' => 'PENDING',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 5,
                'description' => 'Pelatihan di Waystar Royco Management Training Camp cabang Kuala Lumpur',
                'departure_date' => Carbon::now()->addDays(3),
                'arrival_date' => Carbon::now()->addDays(8),
                'depature_id' => 2, 
                'arrival_id' => 9,
                'duration' => 5,
                'status' => 'REJECTED',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 5,
                'description' => 'Survey di Jepang',
                'departure_date' => Carbon::now()->addDays(20),
                'arrival_date' => Carbon::now()->addDays(30),
                'depature_id' => 1, 
                'arrival_id' => 7,
                'duration' => 10,
                'status' => 'APPROVED',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('perjalanan_dinas')->insert($trips);
    }
}