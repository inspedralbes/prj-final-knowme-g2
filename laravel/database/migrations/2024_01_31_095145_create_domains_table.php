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
            $table->bigInteger('id_user')->unsigned();
            $table->string('webURL', 100)->unique();
            $table->longText('content');
            $table->string('category', 100);
            $table->boolean('isPublic')->default(false);
        });

        DB::table('domains')->insert(
            array(
                'id_user' => 2,
                'webURL' => 'arnau-f',
                'content' => "{\"id_user\":1,\"webURL\":\"loris-crisafo\",\"content\":\"{\"content\":[{\"text\":\"Hey, I\'m Loris Crisafo Norte\",\"bold\":true,\"id\":0,\"align\":\"left\"},{\"src\":\"https://via.placeholder.com/150\",\"srcOrig\":\"https://via.placeholder.com/150\",\"border\":3,\"radius\":50,\"width\":250,\"height\":250,\"rotate\":0,\"zoom\":100,\"align\":\"left\",\"id\":1},{\"src\":\"https://via.placeholder.com/150\",\"srcOrig\":\"https://via.placeholder.com/150\",\"border\":3,\"radius\":50,\"width\":250,\"height\":250,\"rotate\":0,\"zoom\":100,\"align\":\"left\",\"id\":2}],\"portfolioComponents\":[[[],[0],[]],[[],[],[1]],[[2],[],[]]]}\",\"isPublic\":true}",
                'category' => 'personal',
                'isPublic' => true
            )
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('domains');
    }
};
