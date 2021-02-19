<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use CyrildeWit\EloquentViewable\Support\Period;
use App\{Post,PostType,User,SlideImages};
use DB;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $posts = Post::count();
        $postType = PostType::count();
        $slideImages = SlideImages::count();

        $dataCount = [
            'posts' => $posts,
            'postType' => $postType,
            'slideImages' => $slideImages
        ];
        
        return view('home',['dataCount'=>$dataCount]);
    }
}
