<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Classes\UserLogin;

class UserController extends Controller
{  
    protected $loginHandler;

    public function __construct(UserLogin $userLogin) {
        $this->loginHandler = $userLogin;
    }

    public function login(Request $request)
    { 
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = $request->only('email', 'password');

        return $this->loginHandler->login($credentials);
    } 
}
