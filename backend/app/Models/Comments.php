<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;
    protected $fillable = [
        'body',
        'posts_id',
        'user_id',
    ];
    public function posts()
    {
        return $this->hasMany(Posts::class);
    }
    /**
     * Get all of the comments for the Comments
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    // public function comments(): HasMany
    // {
    //     return $this->hasMany(Comment::class, 'foreign_key', 'local_key');
    // }
    public function users()
    {
        return $this->hasMany(User::class,'id','user_id');
    }

}
