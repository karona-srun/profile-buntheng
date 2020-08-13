<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Template - Index</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">
    <link href="{{ asset('img/favicon.png') }}" rel="icon">
    <link href="{{ asset('img/apple-touch-icon.png') }}" rel="apple-touch-icon">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900"
        rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/icofont/icofont.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/animate.css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/venobox/venobox.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/owl.carousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/aos/aos.css') }}" rel="stylesheet">
    <link href="{{ asset('css/stylefe.css') }}" rel="stylesheet">
</head>

<body>
    @include('layouts.header')
    <main id="main">

        <!-- ======= Breadcrumbs Section ======= -->
        <section class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Portfolio Details</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li>Portfolio Details</li>
                    </ol>
                </div>

            </div>
        </section><!-- Breadcrumbs Section -->

        <!-- ======= Portfolio Details Section ======= -->
        <section class="portfolio-details">
            <div class="container">
                <img src="{{ asset('img/portfolio/portfolio-details-1.jpg') }}" class="img-fluid" alt="">
                <img src="{{ asset('img/portfolio/portfolio-details-2.jpg') }}" class="img-fluid" alt="">
                <img src="{{ asset('img/portfolio/portfolio-details-3.jpg') }}" class="img-fluid" alt="">
                <div class="portfolio-description">
                    <h2>This is an example of portfolio detail</h2>
                    <p>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia
                        quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim.
                        Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla
                        at esse enim cum deserunt eius.
                    </p>
                </div>
            </div>
        </section>


        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="section-title">
                    <h2>OUT WORK</h2>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/portfolio/portfolio-1.jpg') }}" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>App 1 Title</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                    <a href="{{ asset('img/portfolio/portfolio-1.jpg') }}" data-gall="portfolioGallery" class="venobox"
                                        title="Title 1" data-desc="Description 1"><i class="icofont-eye"></i></a>
                                    <a href="#portfolio-details.html" title="More Details"><i
                                            class="icofont-image"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/portfolio/portfolio-2.jpg') }}" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div class="portfolio-links">
                                    <a href="{{ asset('img/portfolio/portfolio-2.jpg') }}" data-gall="portfolioGallery" class="venobox"
                                        title="Title 2" data-desc="Description 2"><i class="icofont-eye"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i
                                            class="icofont-image"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/portfolio/portfolio-3.jpg') }}" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                    <a href="{{ asset('img/portfolio/portfolio-3.jpg')}}" data-gall="portfolioGallery" class="venobox"
                                        title="Title 3" data-desc="Description 3"><i class="icofont-eye"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i
                                            class="icofont-image"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn btn-primary" style="float: right; background: #5c768d !important;">See More</a>
            </div>
        </section>
    </main>
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>Mamba</h3>
                        <p>
                            A108 Adam Street <br>
                            NY 535022, USA<br><br>
                            <strong>Phone:</strong> +1 5589 55488 55<br>
                            <strong>Email:</strong> info@example.com<br>
                        </p>
                        <div class="social-links mt-3">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>

                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>Mamba</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer>

    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

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

</body>

</html>
