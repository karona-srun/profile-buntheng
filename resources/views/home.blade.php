@extends('layouts.app')

@section('content')
    <div class="page-title">
        <h3>{{ __('app.dashboard')}}</h3>
    <p class="text-subtitle text-muted">{{ __('app.describe_dashboard')}}</p>
    </div>
    <section class="section">
        <div class="row mb-2">
            <div class="col-12 col-md-3">
                <div class="card card-statistic">
                    <div class="card-body p-0">
                        <div class="d-flex flex-column">
                            <div class='px-3 py-3 d-flex justify-content-between'>
                                <h3 class='card-title'>{{ __('app.post')}}</h3>
                            </div>
                            <div class="chart-wrapper ml-100 d-flex align-items-start">
                                <h5 class="card-title">{{ $dataCount['posts'] }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="card card-statistic">
                    <div class="card-body p-0">
                        <div class="d-flex flex-column">
                            <div class='px-3 py-3 d-flex justify-content-between'>
                                <h3 class='card-title'>{{ __('app.postType')}}</h3>
                            </div>
                            <div class="chart-wrapper ml-100 d-flex align-items-start">
                                <h5 class="card-title">{{ $dataCount['postType'] }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="card card-statistic">
                    <div class="card-body p-0">
                        <div class="d-flex flex-column">
                            <div class='px-3 py-3 d-flex justify-content-between'>
                                <h3 class='card-title'>{{ __('app.slideImage')}}</h3>
                            </div>
                            <div class="chart-wrapper ml-100 d-flex align-items-start">
                                <h5 class="card-title">{{ $dataCount['slideImages'] }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

