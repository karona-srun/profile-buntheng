<?php

namespace App\Http\Controllers;

use Auth;
use App\Post;
use App\PostType;
use App\Attachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Image;

class PostController extends Controller
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $collection = Post::get();
        return view('posts.index',['collection' => $collection]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $collection = PostType::where('is_public',1)->get();
        return view('posts.create',['collection'=>$collection]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        request()->validate([
            'title_en' => 'required',
            'body_en' => 'required',
            'title_kh' => 'required',
            'body_kh' => 'required',
            'imageFile' => 'required',
            'imageFile.*' => 'mimes:jpg,jpeg,png,gif',
            'thumbnail'  =>  'required',
            'thumbnail.*' => 'mimes:jpg,jpeg,png,gif',
        ]);    
        
        $message=$request->body_en;

        $dom = new \DomDocument();
        $dom->loadHtml('<?xml encoding="UTF-8">'.$message);   
        $images = $dom->getElementsByTagName('img');

        foreach($images as $img){
            $src = $img->getAttribute('src');            
            // if the img source is 'data-url'
            if (preg_match("'/data:image/'", $src)) {
                preg_match("'/data:image\/(?<mime>.*?)\;/'", $src, $groups);
                $mimeType = $groups['mime'];
                $path = "'/images/'" . uniqid('', true) . '.' . $mimeType;
                Storage::disk('public')->put($path, file_get_contents($src));
                $image->removeAttribute('src');
                $image->setAttribute('src', Storage::disk('public')->url($path));
            }
        }
        $body_en = $dom->saveHTML();


        $message_kh=$request->body_kh;
        $dom_kh = new \DomDocument();
        $dom_kh->loadHtml('<?xml encoding="UTF-8">'.$message_kh);   
        $images_kh = $dom_kh->getElementsByTagName('img');

        foreach($images_kh as $img){
            $src = $img->getAttribute('src');            
            // if the img source is 'data-url'
            if (preg_match("'/data:image/'", $src)) {
                preg_match("'/data:image\/(?<mime>.*?)\;/'", $src, $groups);
                $mimeType = $groups['mime'];
                $path = "'/images/'" . uniqid('', true) . '.' . $mimeType;
                Storage::disk('public')->put($path, file_get_contents($src));
                $image->removeAttribute('src');
                $image->setAttribute('src', Storage::disk('public')->url($path));
            }
        }

        $body_kh = $dom_kh->saveHTML();

        if($thumbnail = $request->file('thumbnail')){
            $thumbnailName = $thumbnail->getClientOriginalName();
            $thumbnailPath = $thumbnail->storeAs('public/thumbnails', $thumbnailName);
            //$thumbnail->move($thumbnailPath, $thumbnailName);
        }
        
        $post = Post::create([
            'post_type_id' => $request->post_type_id,
            'thumbnail' => $thumbnailPath,
            'title_en' => $request->title_en,
            'body_en' =>  $body_en,
            'title_kh' => $request->title_kh,
            'body_kh' =>  $body_kh,
            'is_public' => 0,
            'created_by' => Auth::User()->id,
            'updated_by' => Auth::User()->id,
        ]);
        
        if($imageFiles = $request->file('imageFile')){
            foreach($imageFiles as $file) {
                $name = $file->getClientOriginalName();
                $mimetype = number_format($file->getSize()/1048576,3).' MB';
                
                $path = $file->storeAs('public/photos', $name);
                if($path) {
                    $save   =   Attachment::create([
                    'post_id' => $post->id,
                    'name' => $name,
                    'path' => $path,
                    'size' => $mimetype
                    ]);
                }
            }
        }

        return redirect()->route('post.index')
                        ->with('success','Post has been created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $post = Post::find($post->id);
        $attachemnts = Attachment::where('post_id',$post->id)->get();
        return view('posts.show',['post' => $post,'attachemnts' => $attachemnts]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $post = Post::find($post->id);
        $collection = PostType::where('is_public',1)->get();
        return view('posts.edit',['post' => $post,'collection' => $collection]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        request()->validate([
            'title_en' => 'required',
            'body_en' => 'required',
            'title_kh' => 'required',
            'body_kh' => 'required',
            // 'thumbnail'  =>  'required|file|image|mimes:jpeg,png,gif,jpg|max:10248'
        ]);    
        
        $message=$request->body_en;

        $dom = new \DomDocument();
        $dom->loadHtml('<?xml encoding="UTF-8">'.$message);   
        $images = $dom->getElementsByTagName('img');

        foreach($images as $img){
            $src = $img->getAttribute('src');            
            // if the img source is 'data-url'
            if (preg_match("'/data:image/'", $src)) {
                preg_match("'/data:image\/(?<mime>.*?)\;/'", $src, $groups);
                $mimeType = $groups['mime'];
                $path = "'/images/'" . uniqid('', true) . '.' . $mimeType;
                Storage::disk('public')->put($path, file_get_contents($src));
                $image->removeAttribute('src');
                $image->setAttribute('src', Storage::disk('public')->url($path));
            }
        }
        $body_en = $dom->saveHTML();


        $message_kh=$request->body_kh;
        $dom_kh = new \DomDocument();
        $dom_kh->loadHtml('<?xml encoding="UTF-8">'.$message_kh);   
        $images_kh = $dom_kh->getElementsByTagName('img');

        foreach($images_kh as $img){
            $src = $img->getAttribute('src');            
            // if the img source is 'data-url'
            if (preg_match("'/data:image/'", $src)) {
                preg_match("'/data:image\/(?<mime>.*?)\;/'", $src, $groups);
                $mimeType = $groups['mime'];
                $path = "'/images/'" . uniqid('', true) . '.' . $mimeType;
                Storage::disk('public')->put($path, file_get_contents($src));
                $image->removeAttribute('src');
                $image->setAttribute('src', Storage::disk('public')->url($path));
            }
        }
        $body_kh = $dom_kh->saveHTML();

        $post = Post::find($post->id);
        $post->post_type_id = $request->post_type_id;
        $post->title_en = $request->title_en;
        $post->title_kh = $request->title_kh;
        $post->body_en = $body_en;
        $post->body_kh = $body_kh;
        $post->is_public = $request->status;
        $post->updated_by = Auth::User()->id;
        $post->save();


        $data = $request->input('thumbnail');
        $photo = $request->file('thumbnail')->getClientOriginalName();
        $destination = base_path() . '/public/uploads';
        $url = $request->file('thumbnail')->move($destination, $photo);

        Attachment::create([
            'post_id' => $post->id,
            'url' => $url
        ]);
        
        
        return redirect()->route('post.index')
                        ->with('success','Post has been created successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
