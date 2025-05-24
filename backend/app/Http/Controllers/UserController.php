<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(){
        $user = User::all();
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $user
        ], 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:users',
            'password' => 'required|string',
            'no_telepon' => 'required|string',
            // 'email' => 'required|string',
            // 'kota' => 'required|string',
            // 'nama_acara' => 'required|string',
            // 'tanggal_acara' => 'required|date_format:Y-m-d'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $users = User::create([
            'name' => $request-> name,
            'email' => $request-> email,
            'password' =>  $request-> password,
            'no_telepon' =>  $request-> no_telepon,
            // 'email' =>  $request-> email,
            // 'kota' =>  $request-> kota,
            // 'nama_acara' =>  $request-> nama_acara,
            // 'tanggal_acara' =>  $request-> tanggal_acara
        ]);

        return response()->json([
            "success" => true,
                "message" => "Get All Resource",
                "data" => $users
        ], 201); 
    }

    public function show($id){
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail user ditemukan',
            'data' => $user
        ], 200);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'password' => 'required|string',
            'no_telepon' => 'required|string',
            // 'email' => 'required|string',
            // 'kota' => 'required|string',
            // 'nama_acara' => 'required|string',
            // 'tanggal_acara' => 'required|date_format:Y-m-d'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User tidak ditemukan'
            ], 404);
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'no_telepon' => $request->no_telepon,
            // 'email' => $request->email,
            // 'kota' => $request->kota,
            // 'nama_acara' => $request->nama_acara,
            // 'tanggal_acara' => $request->tanggal_acara
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data berhasil diperbarui',
            'data' => $user
        ], 201);
    }

    public function destroy($id){
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User tidak ditemukan'
            ], 404);
        }

        $user->delete();

        return response()->json([
            'success' => true,
            'message' => 'User berhasil dihapus'
        ], 200);
    }
}
