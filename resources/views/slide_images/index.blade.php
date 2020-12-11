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

        .save-button {
            display: none;
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

        #add_more {
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

    </style>
@endsection
@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Slide Images</h3>
                <p class="text-subtitle text-muted">User can create by below. <a href="{{ route('slide-images.create') }}"
                        class="btn icon icon-left btn-primary"><i data-feather="plus"></i> Create</a></p>
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
    <br>
    <section class="section">
        <div class="row">
            @foreach ($post as $i => $item)
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-content">
                            <img class="card-img-top img-fluid" src="{{ Storage::url($item->path) }}" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">{{ Session::get('locale') == 'kh' ? $item->title_kh : $item->title_en }}</h4>
                                <p class="card-text">
                                    {{ Session::get('locale') == 'kh' ? Illuminate\Support\Str::limit($item->content_kh, 200) : Illuminate\Support\Str::limit($item->content_en, 200) }}
                                </p>
                                <a class="btn btn-primary block" href="{{ route('slide-images.show', $item->id) }}">Edit</a>
                                <a class="btn btn-danger block confirmation ml-3" href="#" data-toggle="modal"
                                    data-target="#small-modal" data-id="{{ $item->id }}">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="modal fade text-left modal-borderless fade" tabindex="-1" role="dialog" id="small-modal"
            style="display: none; padding-left: 0px;" aria-modal="true">
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
                        <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal"><i
                                class="mdi mdi-close"></i>
                            Close</button>
                        <form action="" method="post" id="form">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn btn-sm btn-danger"><i class="mdi mdi-delete"></i>
                                Delete</button>
                        </form>
                    </div>
                </div>
            </div>
    </section>
@endsection
@section('js')
    <script type="text/javascript">
        $(document).ready(function() {

            $('.confirmation').click(function() {
                $('#form').attr('action', "slide-images/" + $(this).attr('data-id'));
            })

        });

    </script>
@endsection
