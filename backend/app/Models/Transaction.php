<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';

    protected $fillable = [
        'user_id', 'packages_id', 'event_name', 'event_date', 'event_detail', 'transaction_date', 'total', 'status'
    ];
}
