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
            'category_name' => 'Modern Wedding',
            'description' => 'Pernikahan bergaya modern dengan dekorasi minimalis dan elegan.'
        ]);

        Category::create([
            'category_name' => 'Aesthetic Birthday',
            'description' => 'Pesta ulang tahun dengan tema estetika dan dekorasi kekinian.'
        ]);

        Category::create([
            'category_name' => 'Corporate Event',
            'description' => 'Acara perusahaan seperti seminar, workshop, atau gathering formal.'
        ]);

        Category::create([
            'category_name' => 'Graduation Party',
            'description' => 'Perayaan kelulusan yang meriah dengan tema kekinian dan dokumentasi lengkap.'
        ]);

        Category::create([
            'category_name' => 'Rustic Engagement',
            'description' => 'Acara lamaran dengan tema rustic, dekorasi kayu, dan suasana hangat.'
        ]);
    }
}
