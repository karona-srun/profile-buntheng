@extends('layouts.app_front')
@section('contentpost')
    {{-- <section class="breadcrumbs">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h2>{{ __('app.portfolioPage') }}</h2>
            </div>
        </div>
    </section> --}}
    <section class="portfolio-details">
        <div class="container">
            <div class="portfolio-description">
                <h2>{{ Session::get('locale') == 'kh' ? $posts->title_kh : $posts->title_en }}</h2>
                <p>{!! Session::get('locale') == 'kh' ? $posts->content_kh : $posts->content_en !!}</p>
            </div>
        </div>
        <div class="container">
            @foreach ($posts->images($posts->id) as $i => $item)
                <img src="{{ Storage::url($item->path) }}" class="img-fluid mb-4" alt="">
            @endforeach
        </div>
    </section>
    </main>
@endsection
