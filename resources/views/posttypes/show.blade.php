@extends('layouts.app')
@section('css')
    <style>
        .float-right {
            margin-top: -40px;
        }

        .save-button {
            display: none;
        }

        .custom-file-label {
            cursor: pointer;
        }

    </style>
@endsection
@section('content')
<div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Post Type List</h3>
                <p class="text-subtitle text-muted">User can create by below.</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class='breadcrumb-header'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('post-types.index') }}">Post Type</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('post-types.index') }}">Post Type List</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Create Post Type</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="col-md-12">
            <div class="card">
                <form action="{{ route('post-types.update', $posttype->id) }}" method="post" enctype="multipart/form-data"
                    id="form1">
                    @method('PATCH')
                    @csrf
                    <div class="card-header">
                        <h4 class="card-title">Post Type</h4>
                        <div class="float-right">
                            <a href="{{ route('post-types.index') }}" class="btn btn-danger"><i data-feather="x"></i> Close</a>
                            <button type="button" class="btn btn-primary update-button"><i data-feather="refresh-cw"></i> Update</button>
                            <button type="submit" class="btn btn-primary save-button"><i data-feather="save"></i> Save</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Title (AS ENGLISH)</label>
                                <input type="text" class="form-control" name="post_type_en" placeholder="Enter title" value="{{ $posttype->post_type_en}}">
                                    <p><small class="text-red">{{ $errors->first('post_type_en') }}</small></p>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description (AS English)</label>
                                    <textarea class="form-control" name="description_en"
                                        rows="2">{{ $posttype->description_en }}</textarea>
                                    <p><small class="text-red">{{ $errors->first('description_en') }}</small></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Title (AS KHMER)</label>
                                    <input type="text" class="form-control" name="post_type_kh" placeholder="Enter title" value="{{ $posttype->post_type_kh }}">
                                    <p><small class="text-red">{{ $errors->first('post_type_kh') }}</small></p>
                                </div>
                                <div class="form-group">
                                    <label for="helperText">Status</label>
                                    <div class="form-group">
                                        <select class="choices form-select status" id="status" name="status">
                                            <option value="0" {{ $posttype->is_published == 0 ? "selected":"" }}>Draft</option>
                                            <option value="1" {{ $posttype->is_published == 1 ? "selected":"" }}>Published</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description (AS Khmer)</label>
                                    <textarea class="form-control" name="description_kh"
                                        rows="2">{{ $posttype->description_kh }}</textarea>
                                    <p><small class="text-red">{{ $errors->first('description_kh') }}</small></p>
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
            $('.summernote_en').summernote({
                height: 200,
                tooltip: false,
            });
            $('.summernote_kh').summernote({
                height: 200,
                tooltip: false,
            });

            $('input[type=text],textarea, *').prop('readonly', true);

            $('.save-button').click(function() {
                $('.save-button').hide();
                $('.update-button').show();
                $('input[type=text],textarea, *').prop('readonly', true);
                //event.preventDefault();
            })

            $('.update-button').click(function() {
                $('.update-button').hide();
                $('.save-button').show();
                $('input[type=text],textarea, *').prop('readonly', false);
                event.preventDefault();
            })
        })
    </script>
@endsection
