<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('domains', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->foreignId('id_user')->references('id')->on('users_api');
            $table->string('webURL', 100)->unique();
            $table->string('content');
            $table->string('category', 100);
            $table->boolean('isPublic')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('domains');
    }
};
