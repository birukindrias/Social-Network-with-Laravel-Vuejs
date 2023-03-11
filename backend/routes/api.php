<?php

use App\Events\Hello;
use App\Http\Controllers\Api\FriendsController;
use App\Http\Controllers\Api\LikesController;
use App\Http\Controllers\Api\PostsController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CommentsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/test', function () {
   Hello::dispatch();
    return "Event has been sent!";
});
Route::post('/regi', [UserController::class, 'register']);
Route::get('/users', [UserController::class, 'index']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/posts', [PostsController::class, 'index']);
Route::get('/comments', [CommentsController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/getCurrentUser', [UserController::class, 'getCurrentUser']);
    Route::post('/post', [PostsController::class, 'store']);
    Route::post('/like', [LikesController::class, 'store']);
    Route::post('/comment', [CommentsController::class, 'store']);
    Route::post('/freindRequestsend', [FriendsController::class, 'freindRequestsend']);
    Route::post('/freinds', [FriendsController::class, 'index']);
    Route::post('/freindRequestAccept', [FriendsController::class, 'freindRequestAccept']);
    Route::post('/freindRequestDecline', [FriendsController::class, 'freindRequestDecline']);
    Route::post('/yourFriends', [FriendsController::class, 'yourFriends']);
    // Route::post('/post', [PostController::class, 'post']);
});
// Route::get('/getCurrentUser', [UserController::class, 'getCurrentUser']);
// Route::post('/regi',  [UserController::class, 'index'])->name('user.main');
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
