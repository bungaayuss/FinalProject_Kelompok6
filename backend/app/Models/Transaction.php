<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';

    protected $fillable = [
        'tanggal_pesan', 'foto', 'subtotal', 'user_id', 'admin_id'
    ];
}
