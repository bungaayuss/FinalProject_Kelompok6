<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ConfirmationController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [UserController::class, 'index']); 
Route::get('/admins', [AdminController::class, 'index']); 
Route::get('/confirmations', [ConfirmationController::class, 'index']); 
Route::get('/transactions', [TransactionController::class, 'index']); 