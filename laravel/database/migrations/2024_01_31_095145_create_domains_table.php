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

      // ->references('id')->on('users_api')
        Schema::create('domains', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->foreignId('id_user');
            $table->string('webURL', 100)->unique();
            $table->longText('content');
            $table->string('category', 100);
            $table->boolean('isPublic')->default(false);
        });

        DB::table('domains')->insert(
            array(
                'id_user' => 2,
                'webURL' => 'arnau-f1',
                'content' => '[ { "components": [ [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 1, "align": "left", "type": "ImageComponent" } ], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [], [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 2, "align": "left", "type": "ImageComponent" } ] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [ { "src": "https://via.placeholder.com/150", "srcOrig": "https://via.placeholder.com/150", "border": 3, "radius": 50, "width": 250, "height": 250, "rotate": 0, "zoom": 100, "align": "left", "id": 3, "type": "TitleComponent" } ], [], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } } ]',
                'category' => 'personal',
                'isPublic' => true
            )
        );
        DB::table('domains')->insert(
            array(
                'id_user' => 3,
                'webURL' => 'arnau-f2',
                'content' => '[ { "components": [ [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 1, "align": "left", "type": "ImageComponent" } ], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [], [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 2, "align": "left", "type": "ImageComponent" } ] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [ { "src": "https://via.placeholder.com/150", "srcOrig": "https://via.placeholder.com/150", "border": 3, "radius": 50, "width": 250, "height": 250, "rotate": 0, "zoom": 100, "align": "left", "id": 3, "type": "TitleComponent" } ], [], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } } ]',
                'category' => 'personal',
                'isPublic' => true
            )
        );
        DB::table('domains')->insert(
            array(
                'id_user' => 4,
                'webURL' => 'arnau-f3',
                'content' => '[ { "components": [ [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 1, "align": "left", "type": "ImageComponent" } ], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [], [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 2, "align": "left", "type": "ImageComponent" } ] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [ { "src": "https://via.placeholder.com/150", "srcOrig": "https://via.placeholder.com/150", "border": 3, "radius": 50, "width": 250, "height": 250, "rotate": 0, "zoom": 100, "align": "left", "id": 3, "type": "TitleComponent" } ], [], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } } ]',
                'category' => 'personal',
                'isPublic' => true
            )
        );
        DB::table('domains')->insert(
            array(
                'id_user' => 5,
                'webURL' => 'arnau-f4',
                'content' => '[ { "components": [ [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 1, "align": "left", "type": "ImageComponent" } ], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [], [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 2, "align": "left", "type": "ImageComponent" } ] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [ { "src": "https://via.placeholder.com/150", "srcOrig": "https://via.placeholder.com/150", "border": 3, "radius": 50, "width": 250, "height": 250, "rotate": 0, "zoom": 100, "align": "left", "id": 3, "type": "TitleComponent" } ], [], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } } ]',
                'category' => 'personal',
                'isPublic' => true
            )
        );
        DB::table('domains')->insert(
            array(
                'id_user' => 6,
                'webURL' => 'arnau-f5',
                'content' => '[ { "components": [ [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 1, "align": "left", "type": "ImageComponent" } ], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [], [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 2, "align": "left", "type": "ImageComponent" } ] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [ { "src": "https://via.placeholder.com/150", "srcOrig": "https://via.placeholder.com/150", "border": 3, "radius": 50, "width": 250, "height": 250, "rotate": 0, "zoom": 100, "align": "left", "id": 3, "type": "TitleComponent" } ], [], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } } ]',
                'category' => 'personal',
                'isPublic' => true
            )
        );
        DB::table('domains')->insert(
            array(
                'id_user' => 7,
                'webURL' => 'arnau-f6',
                'content' => '[ { "components": [ [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 1, "align": "left", "type": "ImageComponent" } ], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [], [], [ { "text": "Hey, I\'m Loris Crisafo Norte", "bold": true, "id": 2, "align": "left", "type": "ImageComponent" } ] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } }, { "components": [ [ { "src": "https://via.placeholder.com/150", "srcOrig": "https://via.placeholder.com/150", "border": 3, "radius": 50, "width": 250, "height": 250, "rotate": 0, "zoom": 100, "align": "left", "id": 3, "type": "TitleComponent" } ], [], [] ], "style": { "sizes": [ 1, 1, 1 ], "string": "minmax(40px,1fr) minmax(40px,1fr) minmax(40px,1fr)" } } ]',
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
