<section id="work" class="portfolio">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="section-title">
            <h2>{{ __('app.portfolioPage') }}</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    @foreach ($posttype as $item)
                        <li
                            data-filter=".filter-{{ Session::get('locale') == 'kh' ? $item->post_type_kh : $item->post_type_en }}">
                            {{ Session::get('locale') == 'kh' ? $item->post_type_kh : $item->post_type_en }}
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>

        <div class="row portfolio-container">
            @foreach ($post as $item)
                <div
                    class="col-lg-4 col-md-6 portfolio-item filter-{{ Session::get('locale') == 'kh' ? $item->post_type->post_type_kh : $item->post_type->post_type_en }}">
                    <div class="portfolio-wrap">
                        <img src="{{ Storage::url($item->thumbnail($item->id)[0]) }}" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>{{ Session::get('locale') == 'kh' ? $item->title_kh : $item->title_en }}</h4>
                            <p>{{ Session::get('locale') == 'kh' ? $item->post_type->post_type_kh : $item->post_type->post_type_en }}
                            </p>
                            <div class="portfolio-links">
                                <a href="{{ Storage::url($item->thumbnail($item->id)[0]) }}"
                                    data-gall="portfolioGallery" class="venobox"
                                    title="{{ Session::get('locale') == 'kh' ? $item->title_kh : $item->title_en }}"
                                    data-desc="{{ Session::get('locale') == 'kh' ? Illuminate\Support\Str::limit($item->content_kh, 3000) : Illuminate\Support\Str::limit($item->content_en, 3000) }} "><i
                                        class="icofont-eye"></i></a>
                                <a href="{{ url('details', $item->id) }}" title="More Details"><i
                                        class="icofont-image"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
