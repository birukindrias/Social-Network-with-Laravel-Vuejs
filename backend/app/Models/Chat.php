<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    protected $fillable = [
        'text',
        'outgoing_id',
        'incoming_id',
    ];
    /*
    me sending
     send
      outgoing id userid
      incoming id other useid
      body
    he seingding send
      outgoing id userid
      incoming id other useid
      body
if it match incoming it will be in rihgt sid e
adn it dont it would be in the left side

    */
}
