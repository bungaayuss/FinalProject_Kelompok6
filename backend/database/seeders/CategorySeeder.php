<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'category_name' => 'Modern Wedding'
        ]);

        Category::create([
            'category_name' => 'Aesthetic Birthday'
        ]);

        Category::create([
            'category_name' => 'Corporate Event'
        ]);

        Category::create([
            'category_name' => 'Graduation Party'
        ]);

        Category::create([
            'category_name' => 'Rustic Engagement'
        ]);
    }
}
