<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Domain;
use App\Models\Tag;
use App\Models\UserApi;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        UserApi::factory(15)->create()->each(function ($user) {
            Domain::factory()->create(['id_user' => $user->id]);
        });

        Tag::factory()->times(7)->create()->each(function ($tag) {
            $tag->domains()->sync(
                Domain::all()->random(3)
            );
        });
    }
}