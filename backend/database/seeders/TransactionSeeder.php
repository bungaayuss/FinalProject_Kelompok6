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
            'event_time' => '18:00:00',
            'venue' => 'Taman Kota Jakarta',
            'guest_count' => 50,
            'payment_method' => 'Transfer Bank',
            'special_requests' => 'Dekorasi bunga dan kursi tambahan',
            'transaction_date' => Carbon::now()->format('Y-m-d'),
            'total' => 1500000.00,
            'status' => 'Paid'
        ]);

        Transaction::create([
            'user_id' => 2,
            'packages_id' => 1,
            'event_name' => 'Pernikahan Dika & Sari',
            'event_date' => '2025-06-20',
            'event_time' => '10:00:00',
            'venue' => 'Gedung Serbaguna Harmony',
            'guest_count' => 200,
            'payment_method' => 'Kartu Kredit',
            'special_requests' => 'Menu vegetarian untuk 10 orang',
            'transaction_date' => Carbon::now()->subDays(5)->format('Y-m-d'),
            'total' => 7500000.00,
            'status' => 'Waiting verification'
        ]);
    }
}
