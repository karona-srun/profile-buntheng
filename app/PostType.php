<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostType extends Model
{
    protected $table = 'post_types';

    protected $fillable = ['post_type','description','is_public','created_by','updated_by'];

    public function creator()
    {
        return $this->belongsTo('App\User','created_by');
    }

    public function updator()
    {
        return $this->belongsTo('App\User','updated_by');
    }
}
