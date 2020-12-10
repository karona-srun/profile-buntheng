<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use CyrildeWit\EloquentViewable\Contracts\Viewable;
use App\Http\Traits\Uuids;
use App\Attachment;

class Post extends Model implements Viewable
{
    use InteractsWithViews;
    use Uuids;
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded = [];

    protected $table = 'posts';

    protected $fillable = ['post_type_id','thumbnail','title_kh','title_en','content_en','content_kh','is_published','activate_code','created_by','updated_by'];

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

    public function thumbnail($postId)
    {
        return Attachment::where(['post_id' => $postId,'name'=>'thumbnails'])->pluck('path');
    }

    public function images($postId)
    {
        return Attachment::where(['post_id' => $postId,'name'=>'posts'])->get(); 
    }
}
