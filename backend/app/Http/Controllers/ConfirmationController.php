<?php

namespace App\Http\Controllers;

use App\Models\Confirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ConfirmationController extends Controller
{
    public function index(){
        $confirmation = Confirmation::all();
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $confirmation
        ], 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'gambar' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'tanggal_bayar' => 'required|date_format:Y-m-d',
            'subtotal' => 'required|integer',
            'transaction_id' => 'required|integer'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $image = $request->file('photo');
        $image->store('authors', 'public');

        $confirmation = Confirmation::create([
            'gambar' => $request-> hashName(),
            'tanggal_bayar' =>  $request-> tanggal_bayar,
            'subtotal' =>  $request-> subtotal,
            'transaction_id' =>  $request-> transaction_id,
        ]);

        return response()->json([
            "success" => true,
                "message" => "Get All Resource",
                "data" => $confirmation
        ], 201); 
    }

    public function show($id){
        $confirmation = Confirmation::find($id);

        if (!$confirmation) {
            return response()->json([
                'success' => false,
                'message' => 'Data konfirmasi tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Data konfirmasi ditemukan',
            'data' => $confirmation
        ], 200);
    }

    public function destroy($id){
        $confirmation = Confirmation::find($id);

        if (!$confirmation) {
            return response()->json([
                'success' => false,
                'message' => 'Data konfirmasi tidak ditemukan'
            ], 404);
        }

        $confirmation->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data konfirmasi berhasil dihapus'
        ], 200);
    }
}
