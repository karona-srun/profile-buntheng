@extends('layouts.app')

@section('content')
    <div class="row pd-5">
        <div class="col-6">
            <h4>Post type create</h4>
            <p class="text-gray">Welcome aboard, Allen Clerk</p>
        </div>
        <div class="col-6">
            <a href="{{ route('post_type.index') }}" class="btn btn-primary has-icon pull-right">
                <i class="mdi mdi-chevron-double-left"></i> Back</a>
        </div>
    </div>

    <div class="content-viewport">
        <div class="row">
            <div class="col-lg-12 equel-grid">
                <div class="grid">
                    <p class="grid-header">Form Edit Post Type</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form method="post" action="{{ route('post_type.update', $posttype->id) }}">
                                @method('PATCH') 
                                @csrf
                                <div class="form-group col-md-6">
                                    <label for="postTypeEN">Post Type [as english]</label>
                                    <input type="text" name="post_type_en" class="form-control form-control-lg" id="postTypeEN"
                                placeholder="Post type" value="{{ $posttype->post_type_en }}">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="postTypeKH">Post Type [as khmer]</label>
                                    <input type="text" name="post_type_kh" class="form-control form-control-lg" id="postTypeKH"
                                        placeholder="Post type" value="{{ $posttype->post_type_kh }}">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Status">Status</label>
                                    <select class="custom-select" name="status">
                                        <option value="0" {{ $posttype->is_public == 0 ? 'selected' : '' }}>Private</option>
                                        <option value="1" {{ $posttype->is_public == 1 ? 'selected' : '' }}>Public</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Status">Description [as english] </label>
                                    <textarea class="form-control" name="description_en" id="descriptionEN" cols="12"
                                        rows="5">{{ $posttype->description_en }}</textarea>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Status">Description [as khmer] </label>
                                    <textarea class="form-control" name="description_kh" id="descriptionKH" cols="12"
                                        rows="5">{{ $posttype->description_kh }}</textarea>
                                </div>
                                <div class="form-group col-md-6">
                                    <button type="submit" class="btn btn-primary has-icon"><i class="mdi mdi-check"></i>
                                        Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
