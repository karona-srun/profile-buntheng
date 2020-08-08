@extends('layouts.app')

@section('content')
<div class="pcoded-inner-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Post Page</h5>
                    </div>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:">Create Post</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                <a href="{{ route('post.index') }}" class="btn btn-primary shadow-2 pull-right" title="" data-toggle="tooltip" data-original-title="Post List"><i class="feather icon-arrow-left"></i> Back</a>
                </div>
            </div>
        </div>
    </div>

    <div class="main-body">
        <div class="page-wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Basic Componant</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <form method="post" action="{{ route('post.update', $post->id) }}" enctype="multipart/form-data">
                                        @method('PATCH') 
                                        @csrf
                                        <div class="form-group">
                                            <label>Title (as English)</label>
                                        <input type="text" name="title_en" class="form-control" placeholder="Post" required value="{{ $post->title_en }}">
                                        </div>
                                        <div class="form-group">
                                            <label>Title (as Khmer)</label>
                                            <input type="text" name="title_kh" class="form-control" placeholder="Post" required value="{{ $post->title_kh }}">
                                        </div>
                                        <div class="form-group">
                                            <label>Thumbnail</label>
                                            <input type="file" name="thumbnail" class="form-control" onchange="previewFile(this);">
                                            <img id="previewImg" class="previewImg img-fluid img-thumbnail" src="{{ asset('images/attachment.png') }}" alt="Placeholder">
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Satus</label>
                                            <select class="form-control" name="status" id="exampleFormControlSelect1">
                                                <option value="0" {{ $post->is_public === 0 ? 'selected' : ''}}>Private</option>
                                                <option value="1" {{ $post->is_public === 1 ? 'selected' : ''}}>Public</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Post Type</label>
                                            <select class="form-control select-custom" name="post_type_id" id="exampleFormControlSelect1">
                                                @foreach ($collection as $item)
                                                    <option value="{{ $item->id}}" {{ $post->post_type_id === $item->id ? 'selected' : ''}}>{{ $item->post_type_en }} | {{ $item->post_type_kh }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Body (as English)</label>
                                            <textarea class="form-control summernote" name="body_en" id="exampleFormControlTextarea1" rows="5">{{ $post->body_en }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Body (as Khmer)</label>
                                            <textarea class="form-control summernote" name="body_kh" id="exampleFormControlTextarea1" rows="5">{{ $post->body_kh }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn shadow-2 btn-primary"><i class="feather icon-save"></i> Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
