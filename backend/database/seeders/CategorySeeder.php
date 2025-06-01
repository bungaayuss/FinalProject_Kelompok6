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
            // 'id' => 1, 
            'nama_kategori' => 'Modern Wedding'
        ]);

        Category::create([
            // 'id' => 2, 
            'nama_kategori' => 'Aesthetic Birthday'
        ]);

        Category::create([
            // 'id' => 3, 
            'nama_kategori' => 'Corporate Event'
        ]);

        Category::create([
            // 'id' => 4, 
            'nama_kategori' => 'Graduation Party'
        ]);

        Category::create([
            // 'id' => 5, 
            'nama_kategori' => 'Rustic Engagement'
        ]);
    }
}
