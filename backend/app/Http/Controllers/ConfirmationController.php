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
            'transactions_id' => 'required|integer',
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'amount' => 'required|numeric',
            'payment_date' => 'required|date_format:Y-m-d',
            'status' => 'required|in:Waiting verification,Paid,Rejected',
            'admins_id' => 'required|integer'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $image = $request->file('photo');
        $image->store('confirmations', 'public');

        $confirmation = Confirmation::create([
            'transactions_id' =>  $request-> transactions_id,
            'image' => $request-> hashName(),
            'payment_date' =>  $request-> payment_date,
            'amount' =>  $request-> amount,
            'status' => $request-> status,
            'admins_id' =>  $request-> admins_id,
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

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'admins_id' => 'required|exists:admins,id',
            'status' => 'required|in:Waiting verification,Paid,Rejected'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $confirmation = Confirmation::find($id);

        if (!$confirmation) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $confirmation->admins_id = $request->admins_id;
        $confirmation->status = $request->status;
        $confirmation->save();

        $confirmation->transaction->update(['status' => $request->status]);

        return response()->json([
            'success' => true,
            'message' => 'Status berhasil diperbarui',
            'data' => $confirmation
        ]);
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
