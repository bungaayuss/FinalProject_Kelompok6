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
            'id' => 1,
            'nama' => 'Paket Wedding Modern Glam',
            'deskripsi' => 'Venue indoor + Dekorasi glamor + Dokumentasi full day',
            'foto' => 'wedding_glam.jpg',
            'harga' => 12000000,
            'categories_id' => 1,
        ]);

        Package::create([
            'id' => 2,
            'nama' => 'Paket Ulang Tahun Aesthetic',
            'deskripsi' => 'Dekorasi ala Pinterest + Neon Sign',
            'foto' => 'birthday_aesthetic.jpg',
            'harga' => 3000000,
            'categories_id' => 2,
        ]);

        Package::create([
            'id' => 3,
            'nama' => 'Paket Webinar Premium',
            'deskripsi' => 'MC Online + Zoom Hosting + Backdrop',
            'foto' => 'corporate_webinar.jpg',
            'harga' => 5000000,
            'categories_id' => 3,
        ]);

        Package::create([
            'id' => 4,
            'nama' => 'Paket Graduation Garden Party',
            'deskripsi' => 'Outdoor setup + Foto Booth + Snack Table',
            'foto' => 'graduation_garden.jpg',
            'harga' => 5500000,
            'categories_id' => 4,
        ]);

        Package::create([
            'id' => 5,
            'nama' => 'Paket Engagement Bohemian',
            'deskripsi' => 'Tema rustic + Lampu gantung + Standing Flowers',
            'foto' => 'engagement_boho.jpg',
            'harga' => 6000000,
            'categories_id' => 5,
        ]);
    }
}
