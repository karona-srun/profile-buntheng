<?php

namespace App\Http\Controllers;

use App\{User,Post, PostType, SlideImages};
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * Undocumented function
     *
     * @return void
     */
    public function index()
    {
        $slides = SlideImages::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        $post = Post::where('is_published',1)->orderBy('created_at', 'DESC')->paginate(9);
        return view('index',['posttype' => $posttype,'post' => $post,'slides'=>$slides]);
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function details($id)
    {
        
        $slides = SlideImages::where('is_published',1)->get();
        $posts = Post::find($id);
        $post = Post::where('is_published',1)->orderBy('created_at', 'DESC')->paginate(9);
        $posttype = PostType::where('is_published',1)->get();
        return view('portfolio_details',['posttype' => $posttype,'post' => $post, 'posts' => $posts,'slides'=>$slides]);
    }

    /**
     * Undocumented function
     *
     * @param [type] $id
     * @return void
     */
    public function showWork($id)
    {
        $slides = SlideImages::where('is_published',1)->get();
        $posts = Post::find($id);
        $post = Post::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        return view('posts.show_work',['posttype' => $posttype,'post' => $post, 'posts' => $posts ,'slides'=>$slides]);
    }

    public function multifileupload()
    {
        return view('dropzoneJs');
    }

    public function store(Request $request)
    {
    	
    	$image = $request->file('file');
        $imageName = time().$image->getClientOriginalName();
        $upload_success = $image->move(public_path('images'),$imageName);
        
        if ($upload_success) {
            return response()->json($upload_success, 200);
        }
        // Else, return error 400
        else {
            return response()->json('error', 400);
        }
    }

    public function about(Type $var = null)
    {
        # code...
        $slides = SlideImages::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        $post = Post::where('is_published',1)->orderBy('created_at', 'DESC')->paginate(9);
        return view('about',['posttype' => $posttype,'post' => $post,'slides'=>$slides]);
    }

    public function contact(Type $var = null)
    {
        # code...
        $slides = SlideImages::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        $post = Post::where('is_published',1)->orderBy('created_at', 'DESC')->paginate(9);
        return view('contact',['posttype' => $posttype,'post' => $post,'slides'=>$slides]);
    }

    public function work(Type $var = null)
    {
        # code...
        $slides = SlideImages::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        $post = Post::where('is_published',1)->orderBy('created_at', 'DESC')->paginate(9);
        return view('work',['posttype' => $posttype,'post' => $post,'slides'=>$slides]);
    }

    public function search(Request $request)
    {
        $slides = SlideImages::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        $post = Post::where('is_published',1)
                    ->where('title_en', 'LIKE', "%{$request->q}%") 
                    ->orWhere('title_kh', 'LIKE', "%{$request->q}%")
                    ->orderBy('created_at', 'DESC')
                    ->paginate(1);
        return view('index',['posttype' => $posttype,'post' => $post,'slides'=>$slides]);
    }
}
