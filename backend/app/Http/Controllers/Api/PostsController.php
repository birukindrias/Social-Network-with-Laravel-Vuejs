<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostsRequest;
use App\Http\Requests\UpdatePostsRequest;
use App\Http\Resources\PostsResource;
// use App\Models\Posts;
use App\Models\Posts as PostsModel;
use Illuminate\Support\Facades\Auth;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()

    {
        // $posts = PostsModel::has('user')->get();
        $posts = PostsModel::with(['user','likes','comments.users'])->get()->sortDesc();
        // $posts = PostsModel::get()->posts();
        // return $posts;
        return  PostsResource::collection($posts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostsRequest $request)
    {
        $post =  PostsModel::create([
            'text_body' => $request->text_body,
            'user_id' => Auth::id(),
        ]);
        return 'true';
    }

    /**
     * Display the specified resource.
     */
    public function show(PostsModel $posts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PostsModel $posts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostsRequest $request, PostsModel $posts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostsModel $posts)
    {
        //
    }
}
