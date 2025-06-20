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
            $table->date('payment_date');
            $table->string('payment_method');
            $table->enum('status', ['Waiting verification', 'Paid', 'Rejected']);
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade')->change();
            $table->string('admin_name')->nullable();
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
