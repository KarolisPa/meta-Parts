<?php

namespace App\Interfaces;

interface UserLoginInterface
{
    public function login(array $credentials);
}