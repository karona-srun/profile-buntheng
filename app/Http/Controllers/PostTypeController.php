<?php

namespace App\Http\Controllers;

use Auth;
use App\PostType;
use Illuminate\Http\Request;

class PostTypeController extends Controller
{
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
            'post_type'=>'required',
            'status'=>'required'
        ]);

        $posttype = new PostType([
            'post_type' => $request->post_type,
            'is_public' => $request->status,
            'description' => $request->description,
            'created_by' => Auth::user()->id,
            'updated_by' => Auth::user()->id,
        ]);
        $posttype->save();
        return redirect('/post_type')->with('success', 'Post Type has been created successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PostType  $postType
     * @return \Illuminate\Http\Response
     */
    public function show(PostType $postType)
    {
        //
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
    public function update(Request $request, PostType $postType)
    {
        $request->validate([
            'post_type'=>'required',
            'status'=>'required'
        ]);

        $posttype = PostType::find($postType->id);
        $posttype->post_type = $request->post_type;
        $posttype->is_public = $request->status;
        $posttype->description = $request->description;
        $posttype->updated_by = Auth::user()->id;
        $posttype->save();

        return redirect('/post_type')->with('success', 'Post Type has been updated successfully!');
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

        return redirect('/post_type')->with('success', 'Post Type has been deleted successfully!');
    }
}
