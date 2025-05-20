<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\TransactionDetailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [CategoryController::class, 'index']); 
Route::get('/packages', [PackageController::class, 'index']); 
Route::get('/transaction_details', [TransactionDetailController::class, 'index']); 