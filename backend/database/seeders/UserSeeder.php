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
        $users = [
            [
                'username' => 'jungkook97',
                'password' => Hash::make('goldenmaknae'),
                'no_telepon' => '081234567890',
                'email' => 'jungkook97@gmail.com',
                'kota' => 'Seoul',
                'nama_acara' => 'Pernikahan Jungkook & Lisa',
                'tanggal_acara' => '2025-08-20'
            ],
            [
                'username' => 'iu_leejieun',
                'password' => Hash::make('palette23'),
                'no_telepon' => '081345678901',
                'email' => 'iu.leejieun@gmail.com',
                'kota' => 'Busan',
                'nama_acara' => 'Sweet 23rd Birthday IU',
                'tanggal_acara' => '2025-07-10'
            ],
            [
                'username' => 'taeyong_nct',
                'password' => Hash::make('neo2025'),
                'no_telepon' => '081456789012',
                'email' => 'taeyongnct@gmail.com',
                'kota' => 'Incheon',
                'nama_acara' => 'Webinar Produksi Musik Digital Bareng Taeyong',
                'tanggal_acara' => '2025-09-15'
            ],
            [
                'username' => 'rose_blackpink',
                'password' => Hash::make('ontheroad'),
                'no_telepon' => '081567890123',
                'email' => 'rosebp@gmail.com',
                'kota' => 'Daegu',
                'nama_acara' => 'Graduation Garden Party Rose & Friends',
                'tanggal_acara' => '2025-06-25'
            ],
            [
                'username' => 'cha_eunwoo',
                'password' => Hash::make('facegenius'),
                'no_telepon' => '081678901234',
                'email' => 'chaeunwoo@gmail.com',
                'kota' => 'Jeju',
                'nama_acara' => 'Engagement Eunwoo & Seolhyun with Boho Theme',
                'tanggal_acara' => '2025-11-05'
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
