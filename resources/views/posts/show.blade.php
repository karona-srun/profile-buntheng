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
                            <li class="breadcrumb-item"><a href="javascript:">Post Information Detail</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <a href="{{ route('post.index') }}" class="btn shadow-2 btn-primary pull-right" title=""
                            data-toggle="tooltip" data-original-title="Create Post"><i class="feather icon-arrow-left"></i>
                            Back</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-body">
            <div class="page-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                            <h5>Post Information Detail <span class=" badge badge-primary">{{ $post->is_public === 0 ? 'Private' : 'Public' }}</span></h5>
                            </div>
                            <div class="card-body">
                                <dl class="dl-horizontal row">
                                    <dt class="col-sm-3">Title</dt>
                                    <dd class="col-sm-9">{{ Session::get('locale') == "kh" ? $post->title_kh : $post->title_en }}</dd>
                                    <dt class="col-sm-3">Post Type</dt>
                                    <dd class="col-sm-9">{{ Session::get('locale') == "kh" ? $post->post_type->post_type_kh : $post->post_type->post_type_en }}</dd>
                                    <dt class="col-sm-3 text-danger">Created at</dt>
                                    <dd class="col-sm-9 text-danger">{{ $post->created_at->format('d/m/Y h:i:s A') }}</dd>
                                    <dd class="col-sm-3 text-danger">Created by</dd>
                                    <dt class="col-sm-9 text-danger">{{ $post->creator->name}}</dt>
                                    <dt class="col-sm-3 text-danger">Updated at</dt>
                                    <dd class="col-sm-9 text-danger">{{ $post->updated_at->format('d/m/Y h:i:s A') }}</dd>
                                    <dd class="col-sm-3 text-danger">Updated by</dd>
                                    <dt class="col-sm-9 text-danger">{{ $post->updator->name}}</dt>
                                    <dd class="col-sm-3">Thumbnail</dd>
                                    <dt class="col-sm-9 text-truncate"><img src="{{ asset('images/attachment.png')}}" class="img-fluid img-thumbnail" alt="" srcset=""></dt>
                                    <dt class="col-sm-3">Body</dt>
                                    <dd class="col-sm-9">{!! Session::get('locale') == "kh" ? $post->body_kh : $post->body_en !!}</dd>
                                    
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
