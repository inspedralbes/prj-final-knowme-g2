<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Domain>
 */
class DomainFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => $this->faker->numberBetween(1, 100),
            'webURL' => $this->faker->unique()->url(),
            'content' => $this->faker->text(),
            'category' => $this->faker->word(),
            'isPublic' => $this->faker->boolean(),
        ];
    }
}
