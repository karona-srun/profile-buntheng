<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 ">
                <div class="copyright text-center">
                    <div>{{ __('app.city') }}</div>
                    <div class="country">{{ __('app.country') }}</diV>
                </div>
                <div class="credits text-center">
                    @ {{ now()->year }} <a href="{{ url('/') }}"
                        target="_blink">{{ config('app.name', 'Buntheng') }}</a>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 copyright text-center">
                <p>thengchea97@gmail.com</p>
                <p class="telephone">(+855) 96 272 062</p>
                
            </div>
            <div class="col-12 col-sm-12 col-md-4">
                <div class="copyright text-center">
                    <div class="social-links">
                        <div>
                        <a href="https://www.instagram.com/buntheng_design/" target="_blink" class="instagram"><i class="icofont-instagram"></i> Instagram</a>
                        </div>
                        <div>
                        <a href="https://www.behance.net/bunthengdesign" target="_blink" class="instagram"><i class="icofont-behance"></i> Behance&nbsp;&nbsp;&nbsp;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
