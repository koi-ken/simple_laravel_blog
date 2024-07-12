<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;

class ArticleController extends Controller
{
    //
    public function store(Request $request){
        $request->validate([
            'title' => ['required', 'string'],
            'post' => ['required', 'string'],
        ]);

        $article = Article::create([
            'title' => $request->title,
            'post' => $request->post,
            'user_id' => Auth::id(),
        ]); 

        event(new Registered($article));

        return response()->noContent();
    }

    public function index(Request $request): JsonResponse{
        $user_id = Auth::id();
        
        $articles = DB::table('articles')
            ->where('user_id', $user_id)
            ->orderBy('id', 'desc')
            ->limit(15)
            ->get();

        return response()->json([
            'message' => 'success',
            'payload' => $articles
        ]);

    }
}
