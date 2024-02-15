<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Models\Tag;


class Domain extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'domains';

    protected $fillable = [
        'id_user',
        'webURL',
        'content',
        'category',
        'isPublic',
        'portfolioComponents'
    ];

    public $timestamps = false;

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'domain_tag');
    }
}
