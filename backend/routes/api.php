<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SigninController;

Route::post('/v1/login', [LoginController::class, 'login'])->middleware(['auth:sanctum']);
Route::post('/v1/user.store', [SigninController::class, 'store'])->middleware(['auth:sanctum']);
