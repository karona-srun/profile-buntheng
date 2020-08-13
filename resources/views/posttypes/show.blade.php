@extends('layouts.app')

@section('content')
    <div class="row pd-5">
        <div class="col-6">
            <h4>Post​ type show</h4>
            <p class="text-gray">Welcome aboard, Allen Clerk</p>
        </div>
        <div class="col-6">
            <a href="{{ route('post_type.index') }}" class="btn btn-primary has-icon pull-right">
                <i class="mdi mdi-chevron-double-left"></i> Back</a>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 equel-grid">
            <div class="grid">
                <p class="grid-header">Information Details</p>
                <div class="grid-body">
                    <div class="item-wrapper">
                        <form>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Type [english] :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->post_type_en}}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Type [khmer] :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->post_type_kh}}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Status :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10" class="{{ $posttype->is_public == 1 ? 'badge badge-primary' : 'badge badge-danger' }}">{{ $posttype->is_public == 1 ? 'Public' : 'Private' }}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Created at :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->created_at->format('d/m/Y h:i:s A') }}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Created by :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->creator->name }}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Updated by :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->updated_at->format('d/m/Y h:i:s A') }}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Updated by :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->updator->name }}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Description [english] :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->description_en }}</label>
                                </div>
                            </div>
                            <div class="form-group row showcase_row_area">
                                <div class="col-md-2 showcase_text_area">
                                    <label for="inputEmail10">Description [khmer] :</label>
                                </div>
                                <div class="col-md-10 showcase_content_area">
                                    <label for="inputEmail10">{{ $posttype->description_kh }}</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
