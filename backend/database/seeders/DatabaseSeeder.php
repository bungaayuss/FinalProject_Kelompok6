<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            ConfirmationSeeder::class,
            TransactionSeeder::class,
            UserSeeder::class,
            CategorySeeder::class,
            PackageSeeder::class,
            TransactionDetailSeeder::class
        ]);
    }
}
