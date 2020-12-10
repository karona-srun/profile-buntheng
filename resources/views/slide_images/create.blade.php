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

        .addImg {
            display: none;
            margin-top: 10px;
            padding: 10px;
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

        .c-input-h {
            height: 38px;
        }

        .clone {
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

        .image-answer:hover .remove-img {
            display: block;
        }

    </style>
@endsection
@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Slide Images</h3>
                <p class="text-subtitle text-muted">User can create by below.</p>
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

    <section class="section">
        <div class="col-md-12">
            <div class="card">
                <form action="{{ route('slide-images.store') }}" method="post" enctype="multipart/form-data" id="form1">
                    @csrf
                    <div class="card-header">
                        <h4 class="card-title">Slide Images</h4>
                        <div class="float-right">
                            <a href="{{ route('slide-images.index') }}" class="btn btn-danger"><i data-feather="x"></i> Close</a>
                            <button type="submit" class="btn btn-primary save-button"><i data-feather="save"></i>
                                Save</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group">
                                <label for="basicInput">Add New Images <button type="button" class="btn btn-primary"
                                        id="add_more">Add Image</button></label>
                                <p class="text-red">{{ $errors->first('filenames') }}</p>
                                <hr>
                                <div class="row add-rows"></div>
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

            var counter = 0;
            //Add more
            $('#add_more').click(function(e) {
                //add new answer
                counter++; //increare counter
                var newRow = '<div class="col-lg-3 col-md-4 col-sm-6 image-answer mb-4">' +
                    '<div class="">' +
                    '<input type="image" class="add_image photo-thumbnail" src="{{ asset('img/placeholder.png ') }}">' +
                    '<input type="file" class="select_file" accept="image/*" name="filenames[' + counter +
                    ']" id="file-0"style="display: none;">' +
                    '<button class="btn btn-danger remove-img remove_answer float-right" type="button"><iclass="fldemo glyphicon glyphicon-remove"></iclass=>Remove Image</button>' +
                    '</div>' +
                    '</div>';
                //append new answers
                $('.add-rows').append(newRow);
            })

            //remove answer
            $(document).on('click', '.remove_answer', function() {
                //remove the answer div
                $(this).parent().parent().remove()
                counter-- //decrease counter
            })

            //Load preview image on each answer
            $(document).on('click', '.add_image', function(e) {
                e.preventDefault()
                //add file to input / trigger click
                $(this).next('input').click();
            })

            //Watch the change on select file
            $(document).on('change', '.select_file', function(e) {

                e.preventDefault()
                //get the sibling img src of the change file
                var prevInput = $(this).prev('input')
                //Call read file preview
                previewFile(this, prevInput);

            });

            //Preview img
            function previewFile(input, previewSrc) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        //load file into actual preview img
                        $(previewSrc).attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]); // convert to base64 string
                }
            }

        });

    </script>
@endsection
