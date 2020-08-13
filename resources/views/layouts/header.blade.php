<section id="topbar" class="">
    <div class="container clearfix">
        <div class="contact-info float-left">
            <i class="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
            <i class="icofont-phone"></i> +1 5589 55488 55
        </div>
        <div class="social-links float-right">
            
            <a href="{{ Session::get('locale') == "kh" ? url('lang/en') : url('lang/kh') }}" class="twitter">
            <img src="https://www.worldometers.info/img/flags/{{ Session::get('locale') == "kh" ? 'cb' : 'us'}}-flag.gif" alt="" width="30px" height="20px" srcset="">
                <i class="icofont-direction-sign"></i> {{ Session::get('locale') == "kh" ? 'Khmer' : 'English'}}
            </a>
            <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
            <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
            <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
            <a href="#" class="skype"><i class="icofont-skype"></i></a>
            <a href="#" class="linkedin"><i class="icofont-linkedin"></i></i></a>
        </div>
    </div>
</section>

<header id="header">
    <div class="container">
        <div class="logo float-left">
            <h1 class="text-light"><a href="index.html"><span>{{ __('app.appName') }}</span></a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            {{-- <a href="#"><img src="img/favicon.png" alt="" class="img-fluid"></a> --}}
        </div>
        <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
                <li class="active"><a href="#">{{ __('app.homePage') }}</a></li>
                <li><a href="#about">{{ __('app.aboutPage') }}</a></li>
                <li><a href="#services">{{ __('app.servicePage') }}</a></li>
                <li><a href="#portfolio">{{ __('app.portfolioPage') }}</a></li>
                <li class="drop-down"><a href="">Drop Down</a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li><a href="#">Drop Down 2</a></li>
                    </ul>
                </li>
                <li><a href="#contact">{{ __('app.contactPage') }}</a></li>
            </ul>
        </nav>
    </div>
</header>
