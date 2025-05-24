<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConfirmationController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// register
Route::post('/register', [AuthController::class, 'register']);

// login
Route::post('/login', [AuthController::class, 'login']);

// logout
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// middleware user
Route::middleware('auth:api')->group(function () {
    Route::middleware(['role:user'])->group(function () {  
       //user
        Route::apiResource('users', UserController::class);
    });
});

// middleware admin
Route::middleware('auth:api')->group(function () {
    Route::middleware(['role:admin'])->group(function () {  
       //
    });
});

//categories
Route::apiResource('categories', CategoryController::class);

//packages
Route::apiResource('packages', PackageController::class);

//admin
Route::apiResource('admins', AdminController::class);

//confirmations
Route::apiResource('confirmations', ConfirmationController::class);

//transactions
Route::apiResource('transactions', TransactionController::class);
