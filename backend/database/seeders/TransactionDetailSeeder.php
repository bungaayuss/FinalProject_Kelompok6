<?php

namespace Database\Seeders;

use App\Models\TransactionDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TransactionDetail::create([
            'id' => 1,
            'harga' => 12000000,
            'transactions_id' => 1,
        ]);

        TransactionDetail::create([
            'id' => 2,
            'harga' => 3000000,
            'transactions_id' => 2,
        ]);

        TransactionDetail::create([
            'id' => 3,
            'harga' => 5000000,
            'transactions_id' => 3,
        ]);

        TransactionDetail::create([
            'id' => 4,
            'harga' => 5500000,
            'transactions_id' => 4,
        ]);

        TransactionDetail::create([
            'id' => 5,
            'harga' => 6000000,
            'transactions_id' => 5,
        ]);
    }
}
