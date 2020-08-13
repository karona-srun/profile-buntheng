@extends('layouts.app')

@section('content')
    <div class="row pd-5">
        <div class="col-6">
            <h4>Post</h4>
            <p class="text-gray">Welcome aboard, Allen Clerk</p>
        </div>
        <div class="col-6">
            <a href="{{ route('post.create') }}" class="btn btn-primary has-icon pull-right"><i
                    class="mdi mdi-plus"></i> Create</a>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="grid">
                <div class="grid-body">
                    <div class="item-wrapper">
                        <div class="table-responsive">
                            <table id="sample-data-table" class="data-table table table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Post</th>
                                        <th>Status</th>
                                        <th>Created by</th>
                                        <th>Created at</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($collection as $i => $item)
                                        <tr id="tr_{{ $item->id }}">
                                            <td>{{ ++$i }}</td>
                                            <td>{{ Session::get('locale') == 'kh' ? substr($item->title_kh, 0, 20) : substr($item->title_en, 0, 20) }}...
                                            </td>
                                            <td><label
                                                    class="{{ $item->is_public == 1 ? 'badge badge-success' : 'badge badge-danger' }}">{{ $item->is_public == 1 ? 'Public' : 'Private' }}</label>
                                            </td>
                                            <td>{{ $item->creator->name }}</td>
                                            <td>{{ $item->created_at->format('d/m/Y h:i:s A') }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <a href="{{ route('post.show', $item->id) }}"
                                                        class="btn btn-sm btn-info social-icon-btn"><i
                                                            class="mdi mdi-eye"></i></a>
                                                    <a href="{{ route('post.edit', $item->id) }}"
                                                        class="btn btn-sm btn-warning social-icon-btn"><i
                                                            class="mdi mdi-grease-pencil"></i></a>
                                                    <button type="button"
                                                        class="btn btn-sm btn-warning social-icon-btn confirmation"
                                                        data-toggle="modal" data-target="#small-modal"
                                                        data-id="{{ $item->id }}"><i class="mdi mdi-delete"></i></button>
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
    <div class="modal fade" tabindex="-1" role="dialog" id="small-modal" style="display: none; padding-left: 0px;"
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
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal"><i class="mdi mdi-close"></i> Close</button>
                    <form action="" method="post" id="form">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-danger"><i class="mdi mdi-delete"></i> Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script>
        $(document).ready(function() {
            $('.confirmation').click(function() {
                $('#form').attr('action', "post/" + $(this).attr('data-id'));
            })
        })

    </script>
@endsection