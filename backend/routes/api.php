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
Route::get('/categories', [CategoryController::class, 'index']);

//packages
Route::get('/packages', [PackageController::class, 'index']);

//user
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
// Route::get('/users/{id}/edit', [UserController::class, 'edit']);
// Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

//admin
Route::get('/admins', [AdminController::class, 'index']);
Route::post('/admins', [AdminController::class, 'store']);
Route::get('/admins/{id}', [AdminController::class, 'show']);
// Route::get('/admins/{id}/edit', [AdminController::class, 'edit']);
// Route::put('/admins/{id}', [AdminController::class, 'update']);
Route::delete('/admins/{id}', [AdminController::class, 'destroy']);

//confirmations
Route::get('/confirmations', [ConfirmationController::class, 'index']);
Route::post('/confirmations', [ConfirmationController::class, 'store']);
Route::get('/confirmations/{id}', [ConfirmationController::class, 'show']);
// Route::delete('/confirmations/{id}', [ConfirmationController::class, 'destroy']); 

//transactions
Route::get('/transactions', [TransactionController::class, 'index']);
Route::post('/transactions', [TransactionController::class, 'store']);
Route::get('/transactions/{id}', [TransactionController::class, 'show']);

//transaction_details
Route::get('/transaction_details', [TransactionDetailController::class, 'index']); 