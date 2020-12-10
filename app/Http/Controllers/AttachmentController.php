<?php

namespace App\Http\Controllers;

use App\Attachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Image;

class AttachmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Attachment::where('name','slideimages')->get(); 
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
            'filenames' => 'required',
            'filenames.*' => 'mimes:jpg,jpeg,png,gif',
        ]);

        if($request->hasfile('filenames'))
         {
            foreach($request->file('filenames') as $file)
            {
                $name = $file->getClientOriginalName();
                $mimetype = number_format($file->getSize()/1048576,3).' MB'; 
                $path = $file->storeAs('public/slideimages', $name);
                if($path) {
                    $save   =   Attachment::create([
                    'post_id' => 'N/A',
                    'name' => 'slideimages',
                    'path' => $path,
                    'size' => $mimetype
                    ]);
                }
            }
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
    public function show(Attachment $attachment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function edit(Attachment $attachment)
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
    public function update(Request $request, Attachment $attachment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
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
        if($path){
            try{
                Storage::delete($path);
            }catch(\Exception $e){
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }
        }
    }
}
