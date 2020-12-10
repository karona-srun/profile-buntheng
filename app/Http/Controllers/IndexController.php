<?php

namespace App\Http\Controllers;

use App\{User,Post, PostType};
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
        $posttype = PostType::where('is_published',1)->get();
        $post = Post::where('is_published',1)->get();
        return view('index',['posttype' => $posttype,'post' => $post]);
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function details($id)
    {
        $posts = Post::find($id);
        $post = Post::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        views($posts)->record();
        return view('portfolio-details',['posttype' => $posttype,'post' => $post, 'posts' => $posts]);
    }

    /**
     * Undocumented function
     *
     * @param [type] $id
     * @return void
     */
    public function showWork($id)
    {
        $posts = Post::find($id);
        $post = Post::where('is_published',1)->get();
        $posttype = PostType::where('is_published',1)->get();
        views($posts)->record();
        return view('posts.show_work',['posttype' => $posttype,'post' => $post, 'posts' => $posts]);
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
}
