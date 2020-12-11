<?php

namespace App\Http\Controllers;

use App\SlideImages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Image;

class SlideImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = SlideImages::get(); 
        return view('slide_images.index',['post'=>$post]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('slide_images.create');
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
            'thumbnail' => 'required',
            'thumbnail.*' => 'mimes:jpg,jpeg,png,gif',
        ]);

        if($imageFiles = $request->file('thumbnail')){
                $name = $imageFiles->getClientOriginalName();
                $mimetype = number_format($imageFiles->getSize()/1048576,3).' MB'; 
                $path = $imageFiles->storeAs('public/slideimages', $name);
                SlideImages::create([
                    'title_en' => $request->title_en,
                    'title_kh' => $request->title_kh,
                    'content_en' => $request->content_en,
                    'content_kh' => $request->content_kh,
                    'path' => $path,
                    'is_published' => $request->status,
                ]);
            }


        return redirect()->route('slide-images.index')
                        ->with('success','Slide images has been uploaded successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = SlideImages::find($id); 
        return view('slide_images.show',['post'=>$post]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        request()->validate([
            'title_en' => 'required',
            'title_kh' => 'required',
            'content_en' => 'required',
            'content_kh' => 'required',
        ]);

        $slide = SlideImages::find($id);
        if($imageFiles = $request->file('thumbnail')){
            $name = $imageFiles->getClientOriginalName();
            $mimetype = number_format($imageFiles->getSize()/1048576,3).' MB'; 
            $path = $imageFiles->storeAs('public/slideimages', $name);
            if($slide->path){
                $this->deleteFile($slide->path);
            }
            $slide->path = $path;
            
        }
        $slide->title_en = $request->title_en;
        $slide->title_kh = $request->title_kh;
        $slide->content_en = $request->content_en;
        $slide->content_kh = $request->content_kh;
        $slide->is_published = $request->status;
        $slide->save();

        return redirect()->route('slide-images.index')
                        ->with('success','Slide images has been updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SlideImages  $attachment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attachemnt = SlideImages::find($id);
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
        if($path){
            try{
                Storage::delete($path);
            }catch(\Exception $e){
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }
        }
    }
}
