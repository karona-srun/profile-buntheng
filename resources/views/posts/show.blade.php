@extends('layouts.app')
@section('css')
    <style>
        .float-right {
            margin-top: -40px;
        }

        #preview {
            max-height: 180px;
            height: auto;
            width: 300px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding: 5px;
        }

        #img_container {
            border-radius: 5px;
            margin-top: 3px;
            margin-bottom: 3px;
            width: auto;
        }

        .imgInp {
            display: none;
            margin-top: 10px;
            padding: 10px;
        }

        .save-button {
            display: none;
        }

        @keyframes blinkingText {
            0% {
                color: #000;
            }

            50% {
                color: #transparent;
            }

            99% {
                color: transparent;
            }

            100% {
                color: #000;
            }
        }

        .custom-file-label {
            cursor: pointer;
        }
        #add_more{
            display: none;
        }

        .photo-thumbnail {
            width: 220px;
            height: 120px;
            border-radius: 4px;
            margin-right: 5px;
        }

        .remove-img {
            display: none;
            margin-top: -120px;
            position: relative;
            margin-right: 48px;
            padding: 5px 15px 5px 15px;
        }

        .confirmation{
            display: none;
            margin-top: -120px;
            position: relative;
            margin-right: 48px;
            padding: 5px 15px 5px 15px;
        }
        .image-answer:hover .remove-img{
            display: block;
        }
        .image-answer:hover .confirmation{
            display: block;
        }

    </style>
@endsection
@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Post Detail</h3>
                <p class="text-subtitle text-muted">User can view detail your post by below.</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class='breadcrumb-header'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts List</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Posts Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <section class="section">
        @include('flash-message')      
        <div class="col-md-12">
            <div class="card">
                <form action="{{ route('posts.update', $post->id) }}" method="post" enctype="multipart/form-data"
                    id="form1">
                    @method('PATCH')
                    @csrf
                    <div class="card-header">
                        <h4 class="card-title">Post Detail</h4>
                        <div class="float-right">
                            <a href="{{ route('posts.index') }}" class="btn btn-danger"><i data-feather="x"></i> Close</a>
                            <button type="button" class="btn btn-primary update-button"><i data-feather="refresh-cw"></i>
                                Update</button>
                            <button type="submit" class="btn btn-primary save-button"><i data-feather="save"></i>
                                Save</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Title (AS ENGLISH)</label>
                                    <input type="text" class="form-control" name="title_en" placeholder="Enter title"
                                        value="{{ $post->title_en }}">
                                    <p><small class="text-red">{{ $errors->first('title_en') }}</small></p>
                                </div>
                                <div class="form-group">
                                    <label for="helperText">THUMBNAIL [SIZE: 300PX X 300PX]</label>
                                    <div id='img_container'>
                                        <img id="preview" src="{{ Storage::url($post->thumbnail($post->id)[0]) }}" alt="thumbnail">
                                        @if (!asset($post->thumbnail($post->id)))
                                            <img id="preview"
                                                src="https://webdevtrick.com/wp-content/uploads/preview-img.jpg"
                                                alt="your image" title='' />
                                        @endif
                                    </div>
                                    <div class="input-group">
                                        <input type="file" id="inputGroupFile01" name="thumbnail"
                                            class="imgInp custom-file-input" aria-describedby="inputGroupFileAddon01"
                                            accept="image/*" value="{{ Storage::url($post->thumbnail($post->id)[0]) }}">
                                        <label class="form-control custom-file-label"
                                            for="inputGroupFile01">Thumbnail</label>
                                        <button class="btn btn-primary" type="button" id="chooseThumbnail">Choose
                                            Thumbnail</button>
                                    </div>
                                    <p><small class="text-red">{{ $errors->first('thumbnail') }}</small></p>
                                </div>
                                <div class="form-group" style="margin-top: -6px !important;">
                                    <label for="exampleFormControlTextarea1" class="form-label">CONTENT (AS English)</label>
                                    <textarea class="form-control summernote_en" name="content_en"
                                        rows="3">{!!  $post->content_en !!}</textarea>
                                    <p><small class="text-red">{{ $errors->first('content_en') }}</small></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Title (AS KHMER)</label>
                                    <input type="text" class="form-control" name="title_kh" placeholder="Enter title"
                                        value="{{ $post->title_kh }}">
                                    <p><small class="text-red">{{ $errors->first('title_kh') }}</small></p>
                                </div>
                                <div class="form-group">
                                    <label for="helperText">Post Type</label>
                                    <div class="form-group">
                                        <select class="choices form-select postType" id="postType" name="postType">
                                            @foreach ($postype as $item)
                                                <option value="{{ $item->id }}">{{ $item->post_type_en }} |
                                                    {{ $item->post_type_kh }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <br><br>
                                <div class="form-group">
                                    <label for="helperText">Status</label>
                                    <div class="form-group">
                                        <select class="choices form-select status" id="status" name="status">
                                            <option value="0" {{ $post->is_published == 0 ? 'selected' : '' }}>Draft
                                            </option>
                                            <option value="1" {{ $post->is_published == 1 ? 'selected' : '' }}>Published
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="basicInput">Generate Activate code</label>
                                    <div class="input-group input-group-sm">
                                        <input type="text" name="activate_code"
                                            class="form-control form-control-sm activate-code-input"
                                            value="{{ $post->activate_code }}" placeholder="xxxxxx">
                                        <button class="btn btn-primary activate-code" type="button"
                                            id="button-addon1">Generate</button>
                                    </div>
                                </div>
                                <div class="form-group" style="margin-top: 17px !important;">
                                    <label for="exampleFormControlTextarea1" class="form-label">CONTENT (AS KHMER)</label>
                                    <textarea class="form-control summernote_kh" name="content_kh"
                                        id="exampleFormControlTextarea1" rows="3">{!!  $post->content_kh !!}</textarea>
                                    <p><small class="text-red">{{ $errors->first('content_kh') }}</small></p>
                                </div>
                            </div>
                        </div>
                        {{-- <div class="form-group">
                            <label for="basicInput">Add New Images <button type="button" class="btn btn-primary"
                                    id="add_more">Add Image</button></label>
                            <hr>
                            
                            <div class="row add-rows">
                                @foreach ($post->images($post->id) as $i => $item)
                                <div class="col-lg-3 col-md-6 col-sm-6 image-answer mb-4">
                                    <div class=" float-none">
                                        <input type="image" class="add_image photo-thumbnail"
                                            src="{{ Storage::url($item->path) }}">
                                        <input type="hidden" name="filenames[{{$i}}]" value="{{ Storage::url($item->path) }}">
                                        <input type="file" class="select_file" accept="image/*" name="filenames[{{$i}}]"
                                            id="file-0" style="display: none;" value="{{ Storage::url($item->path) }}">
                                       
                                        <a class="btn btn-danger confirmation float-right" href="#"
                                                        data-toggle="modal" data-target="#small-modal"
                                                        data-id="{{ $item->id }}"> Delete Image</a>
                                    </div>
                                </div>  
                                @endforeach
                            </div>
                          
                        </div> --}}
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade text-left modal-borderless fade" tabindex="-1" role="dialog" id="small-modal" style="display: none; padding-left: 0px;"
        aria-modal="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirmation</h5><button type="button" class="close" data-dismiss="modal"
                        aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure to delete the selected record ?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal"><i class="mdi mdi-close"></i>
                        Close</button>
                    <form action="" method="post" id="form">
                        @method('DELETE')
                        @csrf
                        <button type="submit" class="btn btn-sm btn-danger"><i class="mdi mdi-delete"></i> Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('js')
    <script type="text/javascript">
        $(document).ready(function() {

            $('.confirmation').click(function() {
                $('#form').attr('action', "delete-image/" + $(this).attr('data-id'));
            })

            $('input[type=text],textarea, *').prop('readonly', true);

            $('.save-button').click(function(event) {
                $('.save-button').hide();
                $('.update-button').show();
                $('input[type=text],textarea, *').prop('readonly', true);
                $('#add_more').css('display','none');
                // $('.confirmation').css('display','none');
            })

            $('.update-button').click(function(event) {
                $('.update-button').hide();
                $('.save-button').show();
                $('input[type=text],textarea, *').prop('readonly', false);
                $('#add_more').css('display','inline');
                // $('.confirmation').css('display','inline');
            })

            $('.activate-code').click(function() {
                var a = Math.floor(100000 + Math.random() * 900000);
                a = String(a);
                a = a.substring(0, 6);
                $('.activate-code-input').val(a);
            })

            $("#inputGroupFile01").change(function(event) {
                readURL(this);
            });

            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var filename = $("#inputGroupFile01").val();
                    filename = filename.substring(filename.lastIndexOf('\\') + 1);
                    reader.onload = function(e) {
                        debugger;
                        $('#preview').attr('src', e.target.result);
                        $('#preview').hide();
                        $('#preview').fadeIn(500);
                        $('.custom-file-label').text(filename);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }

            var i = 1;
            //Add more
            $('#add_more').click(function(e) {
                var index = $('#index').val();
                //add new answer
                var newRow = '<div class="col-lg-3 col-md-4 col-sm-6 image-answer mb-4">' +
                    '<div class="">' +
                    '<input type="image" class="add_image photo-thumbnail" src="{{ asset('img/placeholder.png') }}">'+
                    '<input type="file" class="select_file" accept="image/*" name="filenames['+i+']" id="file-0"style="display: none;">' +
                    '<button class="btn btn-danger remove-img remove_answer float-right" type="button"><iclass="fldemo glyphicon glyphicon-remove"></iclass=>Delete Image</button>' +
                    '</div>' +
                    '</div>';
                //append new answers
                $('.add-rows').append(newRow);
                i++;
            })

            //remove answer
            $(document).on('click', '.remove_answer', function() {
                //remove the answer div
                $(this).parent().parent().remove()
                i-- //decrease counter
            })

            //Load preview image on each answer
            $(document).on('click', '.add_image', function(e) {
                e.preventDefault()
                //add file to input / trigger click
                $(this).next('input').click();
            })

            //Watch the change on select file
            $(document).on('change', '.select_file', function(e) {

                e.preventDefault()
                //get the sibling img src of the change file
                var prevInput = $(this).prev('input')
                //Call read file preview
                previewFile(this, prevInput);
                
            });

            //Preview img
            function previewFile(input, previewSrc) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        //load file into actual preview img
                        $(previewSrc).attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]); // convert to base64 string
                }
            }
        });

    </script>
@endsection
