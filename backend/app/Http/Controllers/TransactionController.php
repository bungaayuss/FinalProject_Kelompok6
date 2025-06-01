<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index(){
        $transaction = Transaction::all();
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $transaction
        ], 200);
    }

    public function store(Request $request){
        $customerId = $request->user()->id;

        $validator = Validator::make($request->all(),[
            'packages_id' => 'required|integer',
            'event_name' => 'required|string',
            'event_date' => 'required|string',
            'event_detail' => 'required|string'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $package = Package::findOrFail($request->packages_id);
        $total = $package->price;

        $transaction = Transaction::create([
            'user_id' => $customerId,
            'packages_id' => $request->packages_id,
            'event_name' => $request->event_name,
            'event_date' => $request->event_date,
            'event_detail' => $request->event_detail,
            'transaction_date' => now()->toDateString(),
            'total' => $total,
            'status' => 'Waiting verification'
        ]);

        return response()->json([
            "success" => true,
                "message" => "Get All Resource",
                "data" => $transaction
        ], 201); 
    }

    public function show($id){
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                'success' => false,
                'message' => 'Transaksi tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Transaksi ditemukan',
            'data' => $transaction
        ], 200);
    }

    public function destroy($id){
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                'success' => false,
                'message' => 'Transaction tidak ditemukan'
            ], 404);
        }

        $transaction->delete();

        return response()->json([
            'success' => true,
            'message' => 'Transaction berhasil dihapus'
        ], 200);
    }
}
