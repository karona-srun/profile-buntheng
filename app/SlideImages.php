<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SlideImages extends Model
{
    protected $fillable = ['title_kh','title_en','content_kh','content_en','path','is_published'];

    public function slideimages($id)
    {
        return SlideImages::find($id); 
    }
}
