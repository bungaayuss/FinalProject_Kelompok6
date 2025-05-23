<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Confirmation extends Model
{
    protected $table = 'confirmations';

    protected $fillable = [
        'transactions_id', 'image', 'amount', 'payment_date', 'status', 'admins_id'
    ];

    public function admin() {
        return $this->belongsTo(Admins::class, 'admins_id');
    }

    public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'transactions_id');
    }
}