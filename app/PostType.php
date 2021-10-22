<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\Uuids;

class PostType extends Model
{
    use Uuids;
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded = [];

    protected $table = 'post_types';

    protected $fillable = ['post_type_en','post_type_kh','description_en','description_kh','is_published','created_by','updated_by'];

    public function creator()
    {
        return $this->belongsTo('App\User','created_by');
    }

    public function updator()
    {
        return $this->belongsTo('App\User','updated_by');
    }
}
