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
        $postype = PostType::where('is_published',1)->get();
        return view('posts.create',['postype'=>$postype]);
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
            'title_kh' => 'required',
            'content_en' => 'required',
            'content_kh' => 'required',
            'post_type' => 'required',
            'status' => 'required',
            'thumbnail'  =>  'required',
            'thumbnail.*' => 'mimes:jpg,jpeg,png,gif',
            'filenames' => 'required',
            'filenames.*' => 'mimes:jpg,jpeg,png,gif',
        ]);    

        $message=$request->content_en;

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


        $message_kh=$request->content_kh;
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
        
        $post = Post::create([
            'post_type_id' => $request->post_type,
            'thumbnail' => '',
            'title_en' => $request->title_en,
            'content_en' =>  $body_en,
            'title_kh' => $request->title_kh,
            'content_kh' =>  $body_kh,
            'activate_code' => $request->activate_code,
            'is_published' => $request->status,
            'created_by' => Auth::User()->id,
            'updated_by' => Auth::User()->id,
        ]);
        
        if($imageFiles = $request->file('thumbnail')){
                $name = $imageFiles->getClientOriginalName();
                $mimetype = number_format($imageFiles->getSize()/1048576,3).' MB'; 
                $path = $imageFiles->storeAs('public/thumbnails', $name);
                if($path) {
                    $save   =   Attachment::create([
                    'post_id' => $post->id,
                    'name' => 'thumbnails',
                    'path' => $path,
                    'size' => $mimetype
                    ]);
                }
            }

        if($request->hasfile('filenames'))
         {
            foreach($request->file('filenames') as $file)
            {
                $name = $file->getClientOriginalName();
                $mimetype = number_format($file->getSize()/1048576,3).' MB'; 
                $path = $file->storeAs('public/posts', $name);
                if($path) {
                    $save   =   Attachment::create([
                    'post_id' => $post->id,
                    'name' => 'posts',
                    'path' => $path,
                    'size' => $mimetype
                    ]);
                }
            }
         }

        return redirect()->route('posts.index')
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
        $postype = PostType::get();
        return view('posts.show',['post' => $post,'attachemnts' => $attachemnts, 'postype' => $postype]);
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
    public function update(Request $request, $id)
    {$message=$request->content_en;

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


        $message_kh=$request->content_kh;
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
        

        $post = Post::find($id);
        $post->post_type_id = $request->postType;
        $post->title_en = $request->title_en;
        $post->title_kh = $request->title_kh;
        $post->content_en = $body_en;
        $post->content_kh = $body_kh;
        $post->activate_code = $request->activate_code;
        $post->is_published = $request->status;
        $post->updated_by = Auth::User()->id;
        $post->save();

        $attachemnts = Attachment::where(['name'=>'thumbnails','post_id'=> $id])->first();
        if($imageFiles = $request->file('thumbnail')){
                $name = $imageFiles->getClientOriginalName();
                $mimetype = number_format($imageFiles->getSize()/1048576,3).' MB'; 
                $path = $imageFiles->storeAs('public/thumbnails', $name);
                if($attachemnts->path){
                    $this->deleteFile($attachemnts->path);
                }
                    Attachment::create([
                    'post_id' => $post->id,
                    'name' => 'thumbnails',
                    'path' => $path,
                    'size' => $mimetype
                    ]);
            }

        $attachemnts = Attachment::where(['name' => 'posts','post_id' => $id])->get();
        if($request->hasfile('filenames'))
         {
            foreach($request->file('filenames') as $file)
            {
                $name = $file->getClientOriginalName();
                $mimetype = number_format($file->getSize()/1048576,3).' MB'; 
                $path = $file->storeAs('public/posts', $name);
                Attachment::create([
                    'post_id' => $post->id,
                    'name' => 'posts',
                    'path' => $path,
                    'size' => $mimetype
                ]);
            }
         }
        
        return redirect()->route('posts.index')
                        ->with('success','Post has been created successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        $attachments = Attachment::where(['name' => 'posts','post_id' => $id])->get();
        foreach($attachments AS $item){
            Storage::delete($item->path); 
            $item->delete();
        }
        return redirect('/posts')->with('error', 'Post has been deleted successfully!');
    }

    public function deleteImage($id){
        $attachemnt = Attachment::find($id);
        $this->deleteFile($attachemnt->path);
        $attachemnt->delete();

        return back()->with('success', 'The image has been deleted successfully!');
    }

    /**
     * Undocumented function
     *
     * @param [type] $path
     * @return void
     */
    public function deleteFile($path){
        if(Storage::exists($path)){
            try{
                Storage::delete($path);
            }catch(\Exception $e){
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }
        }
        return;
    }
}
