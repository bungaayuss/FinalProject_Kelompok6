<?php

namespace Database\Seeders;

use App\Models\Package;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Package::create([
            'name' => 'Paket Wedding Modern Glam',
            'description' => 'Venue indoor + Dekorasi glamor + Dokumentasi full day',
            'image' => 'wedding_glam.jpg',
            'price' => 12000000,
            'categories_id' => 1,
        ]);

        Package::create([
            'name' => 'Paket Ulang Tahun Aesthetic',
            'description' => 'Dekorasi ala Pinterest + Neon Sign',
            'image' => 'birthday_aesthetic.jpg',
            'price' => 3000000,
            'categories_id' => 2,
        ]);

        Package::create([
            'name' => 'Paket Webinar Premium',
            'description' => 'MC Online + Zoom Hosting + Backdrop',
            'image' => 'corporate_webinar.jpg',
            'price' => 5000000,
            'categories_id' => 3,
        ]);

        Package::create([
            'name' => 'Paket Graduation Garden Party',
            'description' => 'Outdoor setup + Foto Booth + Snack Table',
            'image' => 'graduation_garden.jpg',
            'price' => 5500000,
            'categories_id' => 4,
        ]);

        Package::create([
            'name' => 'Paket Engagement Bohemian',
            'description' => 'Tema rustic + Lampu gantung + Standing Flowers',
            'image' => 'engagement_boho.jpg',
            'price' => 6000000,
            'categories_id' => 5,
        ]);
    }
}
