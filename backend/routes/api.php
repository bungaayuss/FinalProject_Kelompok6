<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\TransactionDetailController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ConfirmationController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//categories
Route::apiResource('categories', CategoryController::class);

//packages
Route::apiResource('packages', PackageController::class);

// transactions_details
Route::apiResource('transaction_details', TransactionDetailController::class);

//user
Route::apiResource('users', UserController::class);

//admin
Route::apiResource('admins', AdminController::class);

//confirmations
Route::apiResource('confirmations', ConfirmationController::class);

//transactions
Route::apiResource('transactions', TransactionController::class);
