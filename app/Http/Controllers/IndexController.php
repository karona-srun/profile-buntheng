<?php

namespace App\Http\Controllers;

use App\{User,Post, PostType};
use Illuminate\Http\Request;

class IndexController extends Controller
{
    
    public function index()
    {
        # code...
        $posttype = PostType::where('is_public',1)->get();
        $post = Post::where('is_public',1)->get();
        return view('index',['posttype' => $posttype,'post' => $post]);
    }

    public function details()
    {
        # code...
        return view('portfolio-details');
    }
}
