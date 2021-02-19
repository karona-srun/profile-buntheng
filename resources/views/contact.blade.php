@extends('layouts.app_front')
@section('contact')
    <div class="container mt-5">
        <h1>{{ __('app.contactPage') }}</h1>
    </div>
    <div class="container py-5">
        <div class="row">
            @include('flash-message')
            <div class="col-lg-12 col-lg-offset-2">
                <form id="contact-form" method="GET" action="{{ url('/send-mail') }}" role="form">
                    @csrf
                    <div class="controls">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_name">{{ __('app.firstname') }} *</label>
                                    <input id="form_name" type="text" name="firstname" class="form-control" placeholder=""
                                        required="required" data-error="Firstname is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_lastname">{{ __('app.lastname') }} *</label>
                                    <input id="form_lastname" type="text" name="lastname" class="form-control"
                                        placeholder="" required="required" data-error="Lastname is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_email">{{ __('app.email') }} *</label>
                                    <input id="form_email" type="email" name="email" class="form-control" placeholder=""
                                        required="required" data-error="Valid email is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_phone">{{ __('app.phone') }}</label>
                                    <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_phone">{{ __('app.company') }}</label>
                                    <input id="form_phone" type="tel" name="company" class="form-control" placeholder="">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_phone">{{ __('app.purpose') }} *</label>
                                    <textarea id="form_message" name="purpose" class="form-control" rows="3" required
                                        data-error="Please,leave us a message."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_message">{{ __('app.message') }} *</label>
                                    <textarea id="form_message" name="message" class="form-control"
                                        placeholder="{{ __('app.write_message') }}" rows="4" required
                                        data-error="Please,leave us a message."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-outline-primary col-2 btn-send"
                                    value="{{ __('app.submit') }}">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
