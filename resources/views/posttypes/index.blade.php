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
                        <li class="breadcrumb-item"><a href="javascript:">Post Type List</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                <a href="{{ route('post_type.create') }}" class="btn shadow-2 btn-primary pull-right" title="" data-toggle="tooltip" data-original-title="Create Post Type">Create <i class="feather icon-plus"></i></a>
                </div>
            </div>
        </div>
    </div>

    <div class="main-body">
        <div class="page-wrapper">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Table</h5>
                            {{-- <span class="d-block m-t-5">use class <code>table-striped</code> inside table element</span> --}}
                        </div>
                        <div class="card-block table-border-style">
                            <div class="table-responsive">
                                <table id="zero-configuration" class="display nowrap table-striped table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Post type</th>
                                            <th>Status</th>
                                            <th>Description</th>
                                            <th>Created by</th>
                                            <th>Created at</th>
                                            <th>Updated by</th>
                                            <th>Updated at</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($collection as $i => $item)
                                        <tr>
                                        <td scope="row">{{ ++$i }}</td>
                                            <td>{{ $item->post_type }}</td>
                                            <td><span class="badge badge-primary">{{ $item->is_public === 0 ? 'Private' : 'Public' }}</span></td>
                                            <td>{{ $item->description === null ? 'Created post type': $item->description }}</td>
                                            <td>{{ $item->creator->name }}</td>
                                            <td>{{ $item->created_at->format('d/m/Y h:i:s A') }}</td>
                                            <td>{{ $item->updator->name }}</td>
                                            <td>{{ $item->updated_at->format('d/m/Y h:i:s A') }}</td>
                                            <td>
                                                <div class="btn btn-group">
                                                <a href="{{ route('post_type.edit',$item->id)}}" class="btn btn-outline-primary shadow-2 btn-small"><i class="feather icon-edit-1"></i></a> 
                                                <form action="{{ route('post_type.destroy', $item->id)}}" method="post">
                                                  @csrf
                                                  @method('DELETE')
                                                  <button type="submit" class="btn btn-outline-danger shadow-2 btn-small"><i class="feather icon-trash-2"></i></button>
                                                </form>
                                            </div>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
