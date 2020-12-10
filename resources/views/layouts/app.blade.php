<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" href="{{ asset('vendor_be/vendors/choices.js/choices.css') }}" />
    <link rel="stylesheet" href="{{ asset('vendor_be/css/bootstrap.css') }}">
    @yield('css')
    <link rel="stylesheet" href="{{ asset('vendor_be/vendors/summernote-0.8.18/summernote-bs4.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('vendor_be/vendors/chartjs/Chart.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor_be/vendors/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor_be/vendors/simple-datatables/style.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor_be/css/app.css') }}">
    <link rel="shortcut icon" href="{{ asset('vendor_be/images/favicon.svg') }}" type="image/x-icon">
</head>

<body>
    <div id="app">
        <div id="sidebar" class='active'>
            <div class="sidebar-wrapper active">
                <div class="sidebar-header">
                    <img src="{{ asset('vendor_be/images/logo.svg') }}" alt="" srcset="">
                </div>
                <div class="sidebar-menu">
                    <ul class="menu">
                    <li class='sidebar-title'>{{ __('app.mainMenu')}} </li>
                        <li class="sidebar-item active ">
                            <a href="{{ url('/home') }}" class='sidebar-link'>
                                <i data-feather="home" width="20"></i>
                            <span>{{ __('app.dashboard')}}</span>
                            </a>
                        </li>
                        <li class="sidebar-item  has-sub">
                            <a href="#" class='sidebar-link'>
                                <i data-feather="triangle" width="20"></i>
                                <span>{{ __('app.post')}}</span>
                            </a>
                            <ul class="submenu ">
                                <li>
                                <a href="{{ url('posts') }}">{{ __('app.list')}}{{ __('app.post')}}</a>
                                </li>
                                <li>
                                <a href="{{ url('post-types') }}">{{ __('app.list')}}{{ __('app.postType')}}</a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item">
                            <a href="{{ url('/slide-images') }}" class='sidebar-link'>
                                <i data-feather="image" width="20"></i>
                            <span>{{ __('app.slideImage')}}</span>
                            </a>
                        </li>
                        <li class="sidebar-item  has-sub">
                            <a href="#" class='sidebar-link'>
                                <i data-feather="user" width="20"></i>
                            <span>{{ __('app.security')}}</span>
                            </a>
                            <ul class="submenu ">
                                <li>
                                <a href="{{ route('users.index')}}">{{ __('app.list')}}{{ __('app.user')}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
            </div>
        </div>
        <div id="main">
            <nav class="navbar navbar-header navbar-expand navbar-light">
                <a class="sidebar-toggler" href="#"><span class="navbar-toggler-icon"></span></a>
                <button class="btn navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav d-flex align-items-center navbar-light ml-auto">
                        <li class="dropdown nav-icon mr-2">
                            <a href="#" data-toggle="dropdown"
                                class="nav-link  dropdown-toggle nav-link-lg nav-link-user">
                                <div class="d-lg-inline-block">
                                    <i data-feather="globe"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ url('lang/kh')  }}">
                                <img src="https://www.worldometers.info/img/flags/cb-flag.gif" alt="" width="30px" height="20px" srcset="">
                                {{ __('app.khmer')}}</a>
                                <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="{{ url('lang/en') }}">
                                <img src="https://www.worldometers.info/img/flags/us-flag.gif" alt="" width="30px" height="20px" srcset="">
                                {{ __('app.english')}}</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown"
                                class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                <div class="avatar mr-1">
                                    <img src="{{ asset('vendor_be/images/avatar/avatar-1.png') }}" alt="" srcset="">
                                </div>
                                <div class="d-none d-md-block d-lg-inline-block">{{ Auth::user() == '' ? '' : Auth::user()->name }}</div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="{{ url('users',Auth::user()->id) }}"><i data-feather="user"></i> {{ __('app.account')}}</a>
                            <a class="dropdown-item" href="{{ url('users/edit-password',Auth::user()->id) }}"><i data-feather="key"></i> {{ __('app.changePassword')}}</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    <i data-feather="log-out"></i> {{ __('app.logout')}}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                    style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="main-content container-fluid">
                @yield('content')
            </div>
            <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-left">
                        <p>2020 &copy; Prortfolio</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <script src="{{ asset('vendor_be/js/jquery-3.5.1.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>

    <script src="{{ asset('vendor_be/vendors/summernote-0.8.18/summernote-bs4.js') }}"></script>
    <script src="{{ asset('vendor_be/js/feather-icons/feather.min.js') }}"></script>
    <script src="{{ asset('vendor_be/vendors/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('vendor_be/vendors/chartjs/Chart.min.js') }}"></script>
    <script src="{{ asset('vendor_be/vendors/apexcharts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('vendor_be/js/pages/dashboard.js') }}"></script>
    <script src="{{ asset('vendor_be/vendors/simple-datatables/simple-datatables.js') }}"></script>
    <script src="{{ asset('vendor_be/js/vendors.js') }}"></script>
    <script src="{{ asset('vendor_be/vendors/choices.js/choices.min.js') }}"></script>
    <script src="{{ asset('vendor_be/js/main.js') }}"></script>
    <script src="{{ asset('vendor_be/js/app.js') }}"></script>
    @yield('js')
    <script>
        $(document).ready(function(){
            $('.summernote_en').summernote({
                toolbar: [
                    // [groupName, [list of button]]
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']]
                ],
                height: 200,
                tooltip: false,
            });
            $('.summernote_kh').summernote({
                toolbar: [
                    // [groupName, [list of button]]
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']]
                ],
                height: 200,
                tooltip: false,
            });
        })
    </script>
</body>

</html>
