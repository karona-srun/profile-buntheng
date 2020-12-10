<?php

namespace App\Http\Controllers;

use Auth;
use App\PostType;
use Illuminate\Http\Request;

class PostTypeController extends Controller
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
        $collection = PostType::get();
        return view('posttypes.index',['collection' => $collection]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('posttypes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'post_type_en'=>'required',
            'post_type_kh'=>'required',
            'description_en' => 'required',
            'description_kh' => 'required',
            'status'=>'required'
        ]);

        $posttype = new PostType([
            'post_type_en' => $request->post_type_en,
            'post_type_kh' => $request->post_type_kh,
            'is_published' => $request->status,
            'description_en' => $request->description_en,
            'description_kh' => $request->description_kh,
            'created_by' => Auth::user()->id,
            'updated_by' => Auth::user()->id,
        ]);
        $posttype->save();
        return redirect('/post-types')->with('success', 'Post Type has been created successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PostType  $postType
     * @return \Illuminate\Http\Response
     */
    public function show(PostType $postType)
    {
        $posttype = PostType::find($postType->id);
        return view('posttypes.show', ['posttype' => $posttype]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PostType  $postType
     * @return \Illuminate\Http\Response
     */
    public function edit(PostType $postType)
    {
        $posttype = PostType::find($postType->id);
        return view('posttypes.edit', ['posttype' => $posttype]);  
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PostType  $postType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'post_type_en'=>'required',
            'post_type_kh'=>'required',
            'description_en' => 'required',
            'description_kh' => 'required',
            'status'=>'required'
        ]);

        $posttype = PostType::find($id);
        $posttype->post_type_en = $request->post_type_en;
        $posttype->post_type_kh = $request->post_type_kh;
        $posttype->is_published = $request->status;
        $posttype->description_en = $request->description_en;
        $posttype->description_kh = $request->description_kh;
        $posttype->updated_by = Auth::user()->id;
        $posttype->save();

        return redirect('/post-types')->with('success', 'Post Type has been updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PostType  $postType
     * @return \Illuminate\Http\Response
     */
    public function destroy(PostType $postType)
    {
        $posttype = PostType::find($postType->id);
        $posttype->delete();

        return redirect('/post-types')->with('error', 'Post Type has been deleted successfully!');
    }
}
