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
            'user_id' => 'nullable|integer',
            'admin_name' => 'nullable|string'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $image = $request->file('image');
        $image->store('confirmations', 'public');

        $confirmation = Confirmation::create([
            'transactions_id' =>  $request-> transactions_id,
            'image' => $request-> hashName(),
            'payment_date' =>  $request-> payment_date,
            'amount' =>  $request-> amount,
            'status' => $request-> status,
            'user_id' =>  $request-> user_id ?? null,
            'admin_name' => $request-> admin_name ?? null
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
            'status' => 'required|in:Waiting verification,Paid,Rejected'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $confirmation = Confirmation::findOrFail($id);

        $confirmation->user_id = auth()->id();
        $confirmation->admin_name = auth()->user()->name; 
        $confirmation->status = $request->status;
        $confirmation->save();

        $confirmation->transaction->update(['status' => $request->status]);

        return response()->json([
            'success' => true,
            'message' => 'Status berhasil diperbarui',
            'data' => [
                'confirmation' => $confirmation,
                'admin_name' => $confirmation->admin->name,
        ]
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
