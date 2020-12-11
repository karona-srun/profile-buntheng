<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','IndexController@index');
Route::get('/details/{id}','IndexController@details');
Route::get('posts/show-work/{id}','IndexController@showWork');

Route::get('lang/{locale}', 'LocalizationController@index');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('post-types','PostTypeController');
Route::resource('posts','PostController');
Route::delete('posts/delete-image/{id}','PostController@deleteImage');
Route::resource('users','UserController');
Route::get('users/edit-password/{id}','UserController@editPassword');
Route::post('users/change-password/{id}','UserController@changePassword');
Route::resource('slide-images','SlideImagesController');

