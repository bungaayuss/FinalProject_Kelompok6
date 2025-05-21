<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Confirmation extends Model
{
    protected $table = 'confirmations';

    protected $fillable = [
        'gambar', 'tanggal_bayar', 'subtotal', 'transaction_id'
    ];
}
