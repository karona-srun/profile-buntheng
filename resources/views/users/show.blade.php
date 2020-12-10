@extends('layouts.app')
@section('css')
    <style>
        .float-right {
            margin-top: -40px;
        }

        .custom-file-label {
            cursor: pointer;
        }

    </style>
@endsection
@section('content')
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>Users</h3>
                <p class="text-subtitle text-muted">User can create by below.</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class='breadcrumb-header'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('users.index') }}">Users</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('users.index') }}">User List</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Create User</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="col-md-12">
            <div class="card">
                <form action="{{ route('users.update', $user->id) }}" method="post" enctype="multipart/form-data"
                    id="form1">
                    @method('PATCH')
                    @csrf
                    <div class="card-header">
                        <h4 class="card-title">User</h4>
                        <div class="float-right">
                            <a href="{{ route('users.index') }}" class="btn btn-danger"><i data-feather="x"></i> Close</a>
                            <button type="submit" class="btn btn-primary save-button"><i data-feather="save"></i>
                                Save</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">User Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Enter username"
                                        value="{{ $user->name }}" required autocomplete="name">
                                    <p><small class="text-red">{{ $errors->first('username') }}</small></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Email</label>
                                    <input type="email" class="form-control" name="email"
                                        placeholder="Enter your email address" value="{{ $user->email }}" required
                                        autocomplete="email">
                                    <p><small class="text-red">{{ $errors->first('email') }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection
