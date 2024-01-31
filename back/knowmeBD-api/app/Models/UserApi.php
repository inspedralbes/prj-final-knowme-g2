<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class UserApi extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users_api';

    protected $fillable = [
        'user',
        'name',
        'surnames',
        'email',
        'password',
    ];

    public $timestamps = false;
}
