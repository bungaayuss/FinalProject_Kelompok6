<?php

namespace App\Http\Controllers;

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
        $validator = Validator::make($request->all(),[
            'tanggal_pesan' => 'required|date_format:Y-m-d',
            'foto' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'subtotal' => 'required|integer',
            'user_id' => 'required|integer',
            'admin_id' => 'required|integer'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $image = $request->file('photo');
        $image->store('authors', 'public');

        $transaction = Transaction::create([
            'tanggal_pesan' => $request-> tanggal_pesan,
            'foto' =>  $request-> hashName(),
            'subtotal' =>  $request-> subtotal,
            'user_id' =>  $request-> user_id,
            'admin_id' =>  $request-> admin_id
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
