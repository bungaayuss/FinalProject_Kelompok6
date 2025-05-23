<?php

namespace Database\Seeders;

use App\Models\Confirmation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ConfirmationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Confirmation::create([
            'transactions_id' => 1,
            'image' => 'payment1.jpg',
            'amount' => 1500000.00,
            'payment_date' => Carbon::now()->subDays(1)->format('Y-m-d'),
            'status' => 'Waiting verification',
            'admins_id' => 1
        ]);
    }
}