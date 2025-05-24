<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function index(){
        $admin = Admins::all();
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $admin
        ], 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:100',
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $admin = Admins::create([
            'name' =>  $request-> name,
            'username' => $request-> username,
            'password' =>  $request-> password
        ]);

        return response()->json([
            "success" => true,
                "message" => "Get All Resource",
                "data" => $admin
        ], 201); 
    }

    public function show($id){
        $admin = Admins::find($id);

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Admin tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail admin ditemukan',
            'data' => $admin
        ], 200);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $admin = Admins::find($id);

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Data  tidak ditemukan'
            ], 404);
        }

        $admin->update([
            'name' =>  $request-> name,
            'username' => $request-> username,
            'password' =>  $request-> password
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data berhasil diperbarui',
            'data' => $admin
        ], 201);
    }

    public function destroy($id){
        $admin = Admins::find($id);

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Admin tidak ditemukan'
            ], 404);
        }

        $admin->delete();

        return response()->json([
            'success' => true,
            'message' => 'Admin berhasil dihapus'
        ], 200);
    }
}
