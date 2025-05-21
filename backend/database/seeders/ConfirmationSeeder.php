<?php

namespace Database\Seeders;

use App\Models\Confirmation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConfirmationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Confirmation::create([
            'id' => 1,
            'gambar' => 'bukti1.jpg',
            'tanggal_bayar' => '2025-05-01',
            'subtotal' => 3500000,
            'transactions_id' => 1,
        ]);

        Confirmation::create([
            'id' => 2,
            'gambar' => 'bukti2.jpg',
            'tanggal_bayar' => '2025-05-03',
            'subtotal' => 2000000,
            'transactions_id' => 2,
        ]);

        Confirmation::create([
            'id' => 3,
            'gambar' => 'bukti3.jpg',
            'tanggal_bayar' => '2025-05-05',
            'subtotal' => 10000000,
            'transactions_id' => 3,
        ]);

        Confirmation::create([
            'id' => 4,
            'gambar' => 'bukti4.jpg',
            'tanggal_bayar' => '2025-05-07',
            'subtotal' => 2500000,
            'transactions_id' => 4,
        ]);

        Confirmation::create([
            'id' => 5,
            'gambar' => 'bukti5.jpg',
            'tanggal_bayar' => '2025-05-09',
            'subtotal' => 4000000,
            'transactions_id' => 5,
        ]);
    }
}