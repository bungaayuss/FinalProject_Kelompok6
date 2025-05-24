<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class User extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'username', 'password', 'no_telepon', 'email', 'kota', 'nama_acara', 'tanggal_acara', 'konfirmasi'
    ];
}