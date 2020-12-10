@extends('layouts.app')

@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Posts List</h3>
                <p class="text-subtitle text-muted">User can operation by below. <a href="{{ route('posts.create') }}"
                        class="btn icon icon-left btn-primary"><i data-feather="plus"></i> Create</a></p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class='breadcrumb-header'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Posts List</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    @include('flash-message')
    <section class="section">
        <div class="card">
            <div class="card-body">
                <table class='table table-striped' id="table1">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Thumbnail</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Activate Code</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($collection as $i => $item)
                            <tr>
                                <td>{{ ++$i }}</td>
                                <td>
                                    {{ Session::get('locale') == 'kh' ? Illuminate\Support\Str::limit($item->title_kh, 30) : Illuminate\Support\Str::limit($item->title_en, 30) }}
                                </td>
                                <td>
                                <img src="{{ Storage::url($item->thumbnail($item->id)[0]) }}" alt="thumbnail" width="70px"
                                        height="70px">
                                </td>
                                <td>{{ $item->post_type->post_type_en }}</td>
                                <td>
                                    @if ($item->is_published == 1)
                                        <span class="badge bg-success">Published</span>
                                    @else
                                        <span class="badge bg-warning">Draft</span>
                                    @endif
                                </td>
                                <td><span class="badge bg-info">{{ $item->activate_code }}</span></td>
                                <td>
                                    <div class="btn-group mb-1">
                                        <div class="dropdown">
                                            <button class="btn btn-primary dropdown-toggle mr-1" type="button"
                                                id="dropdownMenuButtonIcon" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i class="bx bx-error-circle mr-50"></i> Action
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButtonIcon">
                                                <a class="dropdown-item" href="{{ route('posts.show', $item->id) }}"><i
                                                        data-feather="folder-minus"></i> View</a>
                                                <a class="dropdown-item" target="blink" href="{{ url('posts/show-work', $item->id) }}"><i
                                                        data-feather="folder-minus"></i> Work</a>
                                                <a class="dropdown-item confirmation" href="#"
                                                        data-toggle="modal" data-target="#small-modal"
                                                        data-id="{{ $item->id }}"><i
                                                        data-feather="trash"></i>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
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
    </div>
    </section>
@endsection
@section('js')
    <script>
        $(document).ready(function() {
            $('.confirmation').click(function() {
                $('#form').attr('action', "posts/" + $(this).attr('data-id'));
            })
        })
    </script>
@endsection
