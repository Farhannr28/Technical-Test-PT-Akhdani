<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('cities_master', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('latitude', 10, 7);
            $table->decimal('longitude', 10, 7);
            $table->string('province');
            $table->string('island');
            $table->boolean('is_abroad')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('cities_master');
    }
};
