@extends('layouts.auth')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-5 col-sm-12 mx-auto">
                <div class="card pt-4">
                    <div class="card-body">
                        <div class="text-center mb-5">
                            <img src="vendor_be/images/favicon.svg" height="48" class='mb-4'>
                            <h3>Sign In</h3>
                            <p>Please sign in to continue to Portfolio.</p>
                        </div>
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <div class="form-group position-relative has-icon-left">
                                <label for="username">Email</label>
                                <div class="position-relative">
                                    <input type="email" name="email" class="form-control" id="username">
                                    <div class="form-control-icon">
                                        <i data-feather="user"></i>
                                    </div>
                                    @error('email')
                                        <span class="invalid-feedback" role="alert" style="display:flow-root">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group position-relative has-icon-left">
                                @if (Route::has('password.request'))
                                    <div class="clearfix">
                                        <label for="password">Password</label>
                                        <a href="password/reset" class='float-right'>
                                            <small>Forgot password?</small>
                                        </a>
                                    </div>
                                @endif
                                <div class="position-relative">
                                    <input type="password" name="password" class="form-control" id="password">
                                    <div class="form-control-icon">
                                        <i data-feather="lock"></i>
                                    </div>
                                    @error('password')
                                        <span class="invalid-feedback" role="alert" style="display:flow-root">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class='form-check clearfix my-4'>
                                <div class="checkbox float-left">
                                    <input type="checkbox" id="checkbox1" class='form-check-input'>
                                    <label for="checkbox1">Remember me</label>
                                </div>
                                @if (Route::has('register.request'))
                                    <div class="float-right">
                                        <a href="register">Don't have an account?</a>
                                    </div>
                                @endif
                            </div>
                            <div class="clearfix">
                                <button class="btn btn-primary float-right">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
