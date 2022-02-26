<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

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

Route::get('/', function () {
    return view('welcome');
});
Route::post('/getForm',[FormController::class,'getForm']);
Route::post('/store',[FormController::class,'store']);
Route::post('/userResponse',[FormController::class,'userResponse']);
Route::post('/getUserResponse',[FormController::class,'getUserResponse']);
