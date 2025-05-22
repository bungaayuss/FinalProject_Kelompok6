<?php

namespace App\Http\Controllers;

use App\Models\TransactionDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionDetailController extends Controller
{
    public function index(){
        $transaction_details = TransactionDetail::all();
        
        if ($transaction_details->isEmpty()){
            return response()->json([
                "success" => true,
                "message" => "Resource data not found!"
            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $transaction_details
        ], 200);
    }

    public function store(Request $request){
        // 1. Validator
        $validator = Validator::make($request->all(), [
            'harga' => 'required|numeric',
        ]);

        // 2. Check Validator eror
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        // 3. Insert data
        $transaction_detail = TransactionDetail::create([
            'harga' => $request->harga
        ]);
        
        // 4. Response
        return response()->json([
            "success" => true,
            "message" => "Resource added successfully",
            "data" => $transaction_detail
        ]);
    }

    public function show(string $id){
        $transaction_detail = TransactionDetail::find($id);
        
        if (!$transaction_detail){
            return response()->json([
                "success" => false,
                "message" => "Resource not found"
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "Get detail resource",
            "data" => $transaction_detail
        ], 200);
    }

     public function update(string $id, Request $request){
        // 1. Mencari data
        $transaction_detail = TransactionDetail::find($id);

        if (!$transaction_detail){
            return response()->json([
                "success" => false,
                "message" => "Resource not found"
            ], 404);
        }

        // 2. Validator
        $validator = Validator::make($request->all(), [
            'harga' => 'required|numeric',
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        // 3. Siapkan data yang ingin diupdate
        $data = [
            'harga' => $request->harga
        ];  

        // 4. Update data baru ke database
        $transaction_detail->update($data);

        return response()->json([
            "success" => true,
            "message" => "Resource updated successfully",
            "data" => $transaction_detail
        ], 200);
    }

    public function destroy(string $id){
       $transaction_detail = TransactionDetail::find($id);

       if (!$transaction_detail){
            return response()->json([
                "success" => false,
                "message" => "Resource not found"
            ], 404);
       }

       $transaction_detail->delete();
       return response()->json([
            "success" => true,
            "message" => "Delete resource successfully"
        ], 200);
    }
    
}
