<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Domain;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    
    public function domains()
    {
        return $this->belongsToMany(Domain::class, 'domain_tag');
    }
}
