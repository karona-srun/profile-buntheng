@extends('layouts.app')
@section('css')
<style>
    .deleteAttachment{
        display: block;
    }
    .viewImage{
        width: 150px;
        height: 150px;
        padding-top: 5px;
    }
    .btn-sm{
        padding: 0.3rem 1em !important;
    }
</style>
@endsection
@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Post Images Upload</h3>
                <p class="text-subtitle text-muted">User can create your post by below.</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class='breadcrumb-header'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts List</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Posts</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="card">
            <div class="card-body">
                <form method="post" enctype="multipart/form-data" id="myform" action="{{ url('posts-upload-image') }}" >
                    {{ csrf_field() }}
                    <div class="form-group p-3">
                        <p class="form-label">Big size 1140px x 700px</p>
                        <p class="form-label">Medium size 552px x 400px</p>
                        <p class="form-label">Small size 370px x 300px</p>
                    </div>
                    <input type="hidden" name="post_id" value="{{ $id }}">
                    <input type="file" id="filename" class="btn btn-defualt" name="filename[]" multiple accept="image/*" onchange="this.form.submit()"/>
                </form>
                <br />
                <div id="image_preview">
                    <div class="row p-3">
                    @foreach($post as $att)
                    <div class="col-md-2" id="{{ $att->id }}">
                        <button type="button" data-id="{{ $att->id }}" class="btn btn-sm btn-danger deleteAttachment">Delete</button>
                        <img src="{{ $att->path }}" class="viewImage" alt="" srcset="">
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
        </div>
    </section>
@endsection
@section('js')
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $("#filename").change(function(e) {
        e.preventDefault();
        $('#image_preview').html("");
        var total_file = document.getElementById("filename").files.length;
        for (var i = 0; i < total_file; i++) {
            $('#image_preview').append("<img src='" + URL.createObjectURL(event.target.files[i]) + "' class='viewImage' >");
        }
        this.form.submit();
    });

    $('.deleteAttachment').click(function(e){
        var id = $(this).data("id");
        var token = $("meta[name='csrf-token']").attr("content");
        $.ajax(
        {
            url: "/posts-delete-image/"+id,
            type: 'DELETE',
            data: {
                "id": id,
                "_token": token,
            },
            success: function (){
                e.preventDefault();
                $('#'+id).remove();
            }
        });
    })
</script>
@endsection