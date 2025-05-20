<?php

namespace Database\Seeders;

use App\Models\Admins;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        $admins = [
            [
                'nama' => 'Bunga Ayu',
                'username' => 'bungaayu',
                'password' => Hash::make('bunga123'),
            ],
            [
                'nama' => 'Eka Ayu',
                'username' => 'ekaayu',
                'password' => Hash::make('eka123'),
            ],
            [
                'nama' => 'Natasya Chesa',
                'username' => 'natasya',
                'password' => Hash::make('natasya123'),
            ],
            [
                'nama' => 'Rina Aprilia',
                'username' => 'rinaaprilia',
                'password' => Hash::make('rina123'),
            ],
            [
                'nama' => 'Nasywa Anisatun',
                'username' => 'nasywa',
                'password' => Hash::make('nasywa123'),
            ],
        ];

        foreach ($admins as $admin) {
            Admins::create($admin);
        }
    }
}