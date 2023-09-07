<?php

namespace App\Classes;

use App\Interfaces\UserLoginInterface;
use App\Repositories\UserRepository;

class UserLogin implements UserLoginInterface
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function login(array $credentials)
    {
        $user = $this->userRepository->checkByEmail($credentials['email']);

        if ($user && password_verify($credentials['password'], $user->password)) {
            return response()->json(['success' => true, 'user' => $user]);
        } else {
            return response()->json(['message' => 'Blogi prisijungimo duomenys'], 401);
        }
    }
}