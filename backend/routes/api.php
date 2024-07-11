<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SigninController;
use App\Http\Controllers\ArticleController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware(['auth:sanctum'])->post('/article.store', [ArticleController::class, 'store']);
Route::middleware(['auth:sanctum'])->get('/articles.get', [ArticleController::class, 'index']);


Route::post('/v1/login', [LoginController::class, 'login']);
