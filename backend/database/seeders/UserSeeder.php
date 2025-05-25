<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('admin123'),   
            'role' => 'admin', 
            'no_telepon' => '081234567890',
            // 'kota' => 'Jakarta',
            // 'nama_acara' => 'Pernikahan Admin',
            // 'tanggal_acara' => '2025-08-20',
            // 'konfirmasi' => 'sudah'
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@example.com',
            'password' => bcrypt('user123'),   
            'role' => 'user',
            'no_telepon' => '089876543210',
            // 'kota' => 'Bandung',
            // 'nama_acara' => 'Seminar Pengguna',
            // 'tanggal_acara' => '2025-11-15',
            // 'konfirmasi' => 'sudah' 
        ]);
    }
}
