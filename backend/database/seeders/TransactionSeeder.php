<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Transaction;
use Illuminate\Support\Carbon;

class TransactionSeeder extends Seeder
{
    public function run(): void
    {
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 2,
            'event_name' => 'Pesta Ulang Tahun Natasya',
            'event_date' => '2025-05-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => Carbon::now()->format('Y-m-d'),
            'total' => 1500000.00,
            'status' => 'Paid'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 2,
            'event_name' => 'Pesta Ulang Tahun Natasya',
            'event_date' => '2025-05-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => Carbon::now()->format('Y-m-d'),
            'total' => 1500000.00,
            'status' => 'Waiting verification'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 3,
            'event_name' => 'Pesta Ulang Tahun Natasya',
            'event_date' => '2025-05-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => Carbon::now()->format('Y-m-d'),
            'total' => 1500000.00,
            'status' => 'Waiting verification'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 4,
            'event_name' => 'Pesta Ulang Tahun Natasya',
            'event_date' => '2025-05-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => Carbon::now()->format('Y-m-d'),
            'total' => 1500000.00,
            'status' => 'Waiting verification'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 2,
            'event_name' => 'Pesta Ulang Tahun Natasya',
            'event_date' => '2025-05-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => Carbon::now()->format('Y-m-d'),
            'total' => 1500000.00,
            'status' => 'Waiting verification'
        ]);

        Transaction::create([
            'user_id' => 1,
            'packages_id' => 5,
            'event_name' => 'aw',
            'event_date' => '2025-04-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => ('2025-04-03'),
            'total' => 1500000.00,
            'status' => 'Paid'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 5,
            'event_name' => 'aw',
            'event_date' => '2025-04-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => ('2025-04-03'),
            'total' => 1500000.00,
            'status' => 'Paid'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 6,
            'event_name' => 'aw',
            'event_date' => '2025-04-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => ('2025-04-03'),
            'total' => 1500000.00,
            'status' => 'Paid'
        ]);
        Transaction::create([
            'user_id' => 1,
            'packages_id' => 6,
            'event_name' => 'aw',
            'event_date' => '2025-04-03',
            'event_detail' => 'Acara ulang tahun ke-21 dengan tema garden party.',
            'transaction_date' => ('2025-04-03'),
            'total' => 1500000.00,
            'status' => 'Paid'
        ]);
    }
}
