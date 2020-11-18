<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\Uuids;

class Post extends Model
{
    use Uuids;
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded = [];

    protected $table = 'posts';

    protected $fillable = ['post_type_id','thumbnail','title_kh','title_en','body_en','body_kh','is_public','created_by','updated_by'];

    public function post_type()
    {
        return $this->belongsTo('App\PostType','post_type_id');
    }

    public function creator()
    {
        return $this->belongsTo('App\User','created_by');
    }

    public function updator()
    {
        return $this->belongsTo('App\User','updated_by');
    }
}
