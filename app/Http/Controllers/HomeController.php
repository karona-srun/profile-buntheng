<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use CyrildeWit\EloquentViewable\Support\Period;
use App\{Post,PostType,User};
use DB;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $posts = Post::all();
        $postType = PostType::all();

        // foreach($posts as $post) {
        //     $post->unique_views_count = views($post)->count();
        // }
        // dd($post->unique_views_count);
        
        // dd(views($post)->remember()->count());
        // views($post)->period(Period::create('2018-01-24', '2018-05-22'))->remember()->count();
        // views($post)->period(Period::upto('2018-11-10'))->unique()->remember()->count();
        // views($post)->period(Period::pastMonths(1))->remember()->count();
        // views($post)->period(Period::subHours(1))->remember()->count();

        $record = User::select(\DB::raw("COUNT(*) as count"), \DB::raw("DAYNAME(created_at) as day_name"), \DB::raw("DAY(created_at) as day"))
        ->where('created_at', '>', Carbon::today()->subDay(6))
        ->groupBy('day_name','day')
        ->orderBy('day')
        ->get();
  
     $chart = [];
 
     foreach($record as $row) {
        $chart['label'][] = $row->day_name;
        $chart['data'][] = (int) $row->count;
      }
 
    $chart['chart_data'] = json_encode($chart);

    // dd($chart['chart_data']);
        return view('home',['chart'=>$chart]);
    }
}
