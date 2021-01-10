<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>{{ config('app.name', 'Buntheng') }}</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">
    <link href="img/favicon.png" rel="icon">
    <link href="img/apple-touch-icon.png" rel="apple-touch-icon">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900"
        rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/icofont/icofont.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/animate.css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/venobox/venobox.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/owl.carousel/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/aos/aos.css') }}" rel="stylesheet">
    <link href="{{ asset('css/stylefe.css') }}" rel="stylesheet">
</head>

<body>
    @include('layouts.header')
    <section id="hero">
        <div class="hero-container">
            <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div class="carousel-inner" role="listbox">
                    @foreach ($slides as $i => $slide)
                        <div class="carousel-item {{ $i == 0 ?'active':''}}"
                            style="background-image: url('{{ Storage::url($slide->path) }}');">
                            <div class="carousel-container">
                                <div class="carousel-content container">
                                <h2 class="animate__animated animate__fadeInDown">{{ Session::get('locale') == 'kh' ? $slide->title_kh : $slide->title_en }}</h2>
                                    <p class="animate__animated animate__fadeInUp">{{ Session::get('locale') == 'kh' ? $slide->content_kh : $slide->content_en }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>

                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>

    <main id="main">
        @include('layouts.portfolioPage')
        <section id="contact" class="contact">
            @include('layouts.contact')
        </section>
        </section>
    </main>
    <footer id="footer">
        <div class="container">
            <div class="copyright">
                {{ __('app.copyright')}}
            </div>
            <div class="credits">
                {{ __('app.developer')}} <a href="https://facebook.com/karona.srun" target="_blink">{{ __('app.credits')}}</a>
            </div>
        </div>
    </footer>

    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

    <!-- Vendor JS Files -->
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('vendor/jquery.easing/jquery.easing.min.js') }}"></script>
    <script src="{{ asset('vendor/php-email-form/validate.js') }}"></script>
    <script src="{{ asset('vendor/jquery-sticky/jquery.sticky.js') }}"></script>
    <script src="{{ asset('vendor/venobox/venobox.js') }}"></script>
    <script src="{{ asset('vendor/waypoints/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('vendor/counterup/counterup.min.js') }}"></script>
    <script src="{{ asset('vendor/owl.carousel/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
    <script src="{{ asset('vendor/aos/aos.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script>
        $(document).ready(function(){
            $('.button-search').click(function(){ 
                //$("#form-search").submit();
                event.preventDefault();
                
                $('html, body').animate({
                    scrollTop: $($(this).attr('data-id')).offset().top - 70,
                    },800,'linear');
            });
        })
    </script>
</body>

</html>
