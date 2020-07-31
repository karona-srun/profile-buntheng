@extends('layouts.app')

@section('content')
<div class="pcoded-inner-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Post Type Page</h5>
                    </div>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:">Edit Post Type</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                <a href="{{ route('post_type.index') }}" class="btn btn-secondary pull-right" title="" data-toggle="tooltip" data-original-title="Post Type List">List</a>
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
                                <div class="col-md-6">
                                    <form method="post" action="{{ route('post_type.update', $posttype->id) }}">
                                        @method('PATCH') 
                                        @csrf
                                        <div class="form-group">
                                            <label>Post Type</label>
                                        <input type="text" name="post_type" class="form-control" placeholder="Post type" required value="{{ $posttype->post_type }}">
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Satus</label>
                                            <select class="form-control" name="status" id="exampleFormControlSelect1">
                                                <option value="0" {{ $posttype->is_public === 0 ? 'selected' : '' }} >Private</option>
                                                <option value="1" {{ $posttype->is_public === 1 ? 'selected' : ''}}>Public</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Description</label>
                                            <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3">{{ $posttype->description }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary">Update</button>
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
