<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /*
    * Seed the App Database
    */
    public function run()
    {
        $this->call([
            users_seeder::class,
            cities_master_seeder::class,
            perjalanan_dinas_seeder::class 
        ]);
    }
}