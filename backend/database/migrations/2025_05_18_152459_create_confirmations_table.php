<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('confirmations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transactions_id')->constrained()->onDelete('cascade');
            $table->string('image');
            $table->decimal('amount', 12, 2);
            $table->date('payment_date');
            $table->enum('status', ['Waiting verification', 'Paid', 'Rejected']);
            $table->foreignId('admins_id')->nullable()->constrained()->onDelete('cascade')->change();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('confirmations');
    }
};
