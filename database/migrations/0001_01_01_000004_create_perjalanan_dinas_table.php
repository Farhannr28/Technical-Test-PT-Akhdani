<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('perjalanan_dinas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->text('description');
            $table->date('departure_date');
            $table->date('arrival_date');
            $table->unsignedBigInteger('depature_id');
            $table->unsignedBigInteger('arrival_id');
            $table->integer('duration');
            $table->enum('status', ['APPROVED', 'REJECTED', 'PENDING'])->default('PENDING');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('depature_id')->references('id')->on('cities_master')->onDelete('restrict');
            $table->foreign('arrival_id')->references('id')->on('cities_master')->onDelete('restrict');
        });
    }

    public function down(): void {
        Schema::dropIfExists('perjalanan_dinas');
    }
};
