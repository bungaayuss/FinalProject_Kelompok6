<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConfirmationController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Pest\Plugins\Only;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//Guest
Route::apiResource('packages', PackageController::class)->only(['index', 'show']);
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);

// register
Route::post('/register', [AuthController::class, 'register']);

// login
Route::post('/login', [AuthController::class, 'login']);

// logout
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

//User
Route::middleware('auth:api')->group(function () {
    //1. update profile user (role customer)
    Route::put('update', [UserController::class, 'update']);

    //2. confirmations
    Route::apiResource('confirmations', ConfirmationController::class)->only(['index', 'show', 'store']);
    
    //3. transaction
    Route::apiResource('transactions', TransactionController::class)->only(['index', 'show', 'store']);

    //4. packages
    Route::apiResource('packages', PackageController::class)->only(['index', 'show']);

    //5. categories
    Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);

    //Admin
    Route::prefix('admin')->middleware(['role:admin'])->group(function () { 
        //1. liat user
        Route::apiResource('users', UserController::class)->only(['index', 'show']);
    
        //2. confirmationz
        Route::apiResource('confirmations', ConfirmationController::class);
    
        //3. transacton
        Route::apiResource('transactions', TransactionController::class)->except(['store']);
    
        //4. packages
        Route::apiResource('packages', PackageController::class);
    
        //5. category
        Route::apiResource('categories', CategoryController::class);
    });
});