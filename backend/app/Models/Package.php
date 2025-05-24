<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $table = 'packages';

    protected $fillable = [
        'nama', 'deskripsi', 'foto', 'harga', 'categories_id'
    ];
}
