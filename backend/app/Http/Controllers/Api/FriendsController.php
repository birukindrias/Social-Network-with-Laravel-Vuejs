<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FreindsResource;
use App\Models\Freinds;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FriendsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $posts = PostsModel::has('user')->get();
        $friends = Freinds::where(['user_id'=> Auth::id(),
        'status'=>'pending'])->with ('users')->get()->sortDesc();
        // $friends = friendsModel::get()->friends();
        // return $friends;
        return FreindsResource::collection($friends);
    }
    public function yourFriends()
    {
        // $posts = PostsModel::has('user')->get();
        $friends = Freinds::where(['user_id'=> Auth::id(),
        'status'=>'accepted'])->with ('users')->get()->sortDesc();
        // $friends = friendsModel::get()->friends();
        // return $friends;
        return FreindsResource::collection($friends);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function freindRequestsend(Request $request)
    {
        Freinds::create([
            'user_id' => Auth::id(),
            'status' => 'pending'
            ,
            'friend_id' => $request->friend_id,
        ]);
        return true;

    }

    /**
     * Store a newly created resource in storage.
     */
    public function freindRequestAccept(Request $request)
    {
        DB::table('freinds')
            ->where('friend_id', $request->friend_id)
            ->where('user_id', Auth::id())
            ->update(['status' => 'accepted']);
        // Freinds::where('friend_id', $request->friend_id)->where('user_id', Auth::id())->update(['status'=> 'accept']);
        return true;
    }

    /**
     * Display the specified resource.
     */
    public function freindRequestDecline(Request $request)
    {
        DB::table('freinds')
            ->where('friend_id', $request->friend_id)
            ->where('user_id', Auth::id())
            ->delete();
        // Freinds::where('friend_id', $request->friend_id)->where('user_id', Auth::id())->update(['status'=> 'accept']);
        return true;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
