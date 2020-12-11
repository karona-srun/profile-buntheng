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

        .addImg {
            display: none;
            margin-top: 10px;
            padding: 10px;
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

        .c-input-h {
            height: 38px;
        }

        .clone {
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

        .image-answer:hover .remove-img {
            display: block;
        }

    </style>
@endsection
@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Slide Images</h3>
                <p class="text-subtitle text-muted">User can create by below.</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class='breadcrumb-header'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('slide-images.index') }}">Slide Images</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Create Slide Images</li>
                    </ol>
                </nav>
                @include('flash-message')
            </div>
        </div>
    </div>

    <section class="section">
        <div class="col-md-12">
            <div class="card">
                <form action="{{ route('slide-images.update', $post->id) }}" method="post" enctype="multipart/form-data" id="form1">
                    @method('PATCH')
                    @csrf
                    <div class="card-header">
                        <h4 class="card-title">Slide Images</h4>
                        <div class="float-right">
                            <a href="{{ route('slide-images.index') }}" class="btn btn-danger"><i data-feather="x"></i>
                                Close</a>
                            <button type="submit" class="btn btn-primary save-button"><i data-feather="save"></i>
                                Save</button>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">

                                <div class="form-group">
                                    <label for="helperText">THUMBNAIL [MAXIMUM SIZE: 1900PX × 1080PX]</label>
                                    <div id='img_container'>
                                        <img id="preview" src="{{ Storage::url($post->path) }}" alt="thumbnail">
                                        @if (!asset($post->path))
                                            <img id="preview"
                                                src="https://webdevtrick.com/wp-content/uploads/preview-img.jpg"
                                                alt="your image" title='' />
                                        @endif
                                    </div>
                                    <div class="input-group">
                                        <input type="file" id="inputGroupFile01" name="thumbnail"
                                            class="imgInp custom-file-input" aria-describedby="inputGroupFileAddon01"
                                            accept="image/*" value="{{ Storage::url($post->path) }}">
                                        <label class="form-control custom-file-label"
                                            for="inputGroupFile01">Thumbnail</label>
                                        <button class="btn btn-primary" type="button" id="chooseThumbnail">Choose
                                            Thumbnail</button>
                                    </div>
                                    <p><small class="text-red">{{ $errors->first('thumbnail') }}</small></p>
                                </div>
                                <div class="form-group" style="margin-top: -6px !important;">
                                    <label for="exampleFormControlTextarea1" class="form-label">CONTENT (AS English)</label>
                                <textarea class="form-control" name="content_en" rows="3">{{ $post->content_en}}</textarea>
                                    <p><small class="text-red">{{ $errors->first('content_en') }}</small></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Title (AS ENGLISH)</label>
                                    <input type="text" class="form-control" name="title_en" placeholder="Enter title"
                                        value="{{ $post->title_en}}">
                                    <p><small class="text-red">{{ $errors->first('title_en') }}</small></p>
                                </div>
                                <div class="form-group">
                                    <label for="basicInput">Title (AS KHMER)</label>
                                    <input type="text" class="form-control" name="title_kh" placeholder="Enter title"
                                        value="{{ $post->title_kh}}">
                                    <p><small class="text-red">{{ $errors->first('title_kh') }}</small></p>
                                </div>
                                <br><br>
                                <div class="form-group">
                                    <label for="helperText">Status</label>
                                    <div class="form-group">
                                        <select class="choices form-select status" id="status" name="status">
                                            <option value="0">Draft</option>
                                            <option value="1">Published</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1" class="form-label">CONTENT (AS KHMER)</label>
                                    <textarea class="form-control" name="content_kh" rows="3">{{ $post->content_kh}}</textarea>
                                    <p><small class="text-red">{{ $errors->first('content_kh') }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection

@section('js')
    <script type="text/javascript">
        $(document).ready(function() {
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
        });

    </script>
@endsection
