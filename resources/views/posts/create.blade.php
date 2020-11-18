@extends('layouts.app')
@section('css')
    <style>
        .user-image{
            border: 1px solid #e3e6e9;
        }

        .imgPreview img {
            margin: 5px;
            padding: 2px;
            height: 150px;
            width: 150px;
            border: 1px solid #ccc;
            border-radius: 5px;
        } 
        
        #imgPreview-Delete{
            cursor: pointer;
            display: initial;
            margin-top: 125px;
            margin-left: -125px;
            position: absolute;
        }

        .custom-file{
            margin-top: 15px;
        }

    </style>
@endsection
@section('content')
    <div class="row pd-5">
        <div class="col-6">
            <h4>Post</h4>
            <p class="text-gray">Welcome aboard, Allen Clerk</p>
        </div>
        <div class="col-6">
            <a href="{{ route('post.index') }}" class="btn btn-primary has-icon pull-right"><i class="mdi mdi-chevron-double-left"></i> Back</a>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 equel-grid">
            <div class="grid">
                <p class="grid-header">Form Create Post</p>
                <div class="grid-body">
                    <div class="item-wrapper">
                        <form method="post" action="{{ route('post.store') }}" enctype="multipart/form-data">       
                            @csrf
                            <div class="form-group col-md-6">
                                <label for="inputEmail1">Title (as english)</label>
                                <input type="text" class="form-control" name="title_en" id="inputEmail1" placeholder="Enter title">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail1">Title (as khmer)</label>
                                <input type="text" class="form-control" name="title_kh" id="inputEmail1" placeholder="Enter title">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="Thumbnail">Thumbnail [Size: 300px X 300px]</label>
                                <input type="file" name="thumbnail" class="form-control" onchange="previewFile(this);">
                                <img id="previewImg" class="previewImg img-fluid img-thumbnail" src="{{ asset('images/attachment.png') }}" alt="Placeholder">
                            </div>
                            <div class="form-group col-md-12">
                                <div class="user-image text-center">
                                    <div class="imgPreview"> </div>
                                </div> 
                                <div class="custom-file col-md-6">
                                    <input type="file" name="imageFile[]" class="custom-file-input" id="images" multiple="multiple">
                                    <label class="custom-file-label" for="images">Choose image</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail1">Status</label>
                                <select class="form-control" name="status" id="exampleFormControlSelect1">
                                    <option value="0">Private</option>
                                    <option value="1">Public</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail1">Post Type</label>
                                <select class="form-control select-custom" name="post_type_id" id="exampleFormControlSelect1">
                                    @foreach ($collection as $item)
                                        <option value="{{ $item->id}}">{{ $item->post_type_en }} | {{ $item->post_type_kh }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputEmail1">Content (as english)</label>
                                <textarea class="form-control summernoteExample" name="body_en" id="summernoteExample" rows="3">{{ old('body_en')}}</textarea>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputEmail1">Content (as khmer)</label>
                                <textarea class="form-control summernoteExample" name="body_kh" id="" rows="3">{{ old('body_kh')}}</textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <button type="submit" class="btn btn-primary has-icon"><i
                                        class="mdi mdi-clipboard-check"></i> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
<script>
    function previewFile(input){
        var file = $("input[type=file]").get(0).files[0];
 
        if(file){
            var reader = new FileReader();
 
            reader.onload = function(){
                $("#previewImg").attr("src", reader.result);
            }
 
            reader.readAsDataURL(file);
        }
    }
    $(function() {
        
        // Multiple images preview with JavaScript
        var multiImgPreview = function(input, imgPreviewPlaceholder) {
            if (input.files) {
                var filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        $($.parseHTML('<img id="'+i+'"><i id="imgPreview-Delete" data-id="'+i+'" class="badge badge-danger col-1">Delete</i>')).attr('src', event.target.result).appendTo(imgPreviewPlaceholder);
                    }
                    reader.readAsDataURL(input.files[i]); 
                   
                }
            } 
           
        };

        $('#images').on('change', function() {
            multiImgPreview(this, 'div.imgPreview');
        });

        $("body").on("click","#imgPreview-Delete",function(){ 

           
        });
    });  
</script>
@endsection
