<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Transaction;

class TransactionSeeder extends Seeder
{
    public function run(): void
    {
        $transactions = [
            [
                'tanggal_pesan' => '2025-05-01',
                'foto' => 'pesanan1.jpg',
                'subtotal' => 12000000,
                'user_id' => 1,
                'admin_id' => 3,
            ],
            [
                'tanggal_pesan' => '2025-05-03',
                'foto' => 'pesanan2.jpg',
                'subtotal' => 3000000,
                'user_id' => 2,
                'admin_id' => 1,
            ],
            [
                'tanggal_pesan' => '2025-05-05',
                'foto' => 'pesanan3.jpg',
                'subtotal' => 5000000,
                'user_id' => 3,
                'admin_id' => 2,
            ],
            [
                'tanggal_pesan' => '2025-05-07',
                'foto' => 'pesanan4.jpg',
                'subtotal' => 5500000,
                'user_id' => 4,
                'admin_id' => 4,
            ],
            [
                'tanggal_pesan' => '2025-05-09',
                'foto' => 'pesanan5.jpg',
                'subtotal' => 6000000,
                'user_id' => 5,
                'admin_id' => 5,
            ],
        ];

        foreach ($transactions as $transaction) {
            Transaction::create($transaction);
        }
    }
}
