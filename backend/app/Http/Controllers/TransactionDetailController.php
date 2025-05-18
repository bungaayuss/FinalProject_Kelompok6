<?php

namespace App\Http\Controllers;

use App\Models\TransactionDetail;
use Illuminate\Http\Request;

class TransactionDetailController extends Controller
{
    public function index(){
        $transaction_details = TransactionDetail::all();
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $transaction_details
        ], 200);
    }
}
