<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => 'required|email:rfc,dns',
            'password' => 'required|min:8'
        ]);

        
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
 
            return redirect()->intended('dashboard');
        }
    }
}
