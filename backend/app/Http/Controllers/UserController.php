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
            'username' => 'required|string|max:100',
            'password' => 'required|string',
            'no_telepon' => 'required|string',
            'email' => 'required|string',
            'kota' => 'required|string',
            'nama_acara' => 'required|string',
            'tanggal_acara' => 'required|date_format:Y-m-d',
            'konfirmasi' => 'required|string'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $users = User::create([
            'username' => $request-> username,
            'password' =>  $request-> password,
            'no_telepon' =>  $request-> no_telepon,
            'email' =>  $request-> email,
            'kota' =>  $request-> kota,
            'nama_acara' =>  $request-> nama_acara,
            'tanggal_acara' =>  $request-> tanggal_acara,
            'konfirmasi' =>  $request-> konfirmasi
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

    // public function update(Request $request, $id){
    //     $validator = Validator::make($request->all(), [
    //         'username' => 'required',
    //         'password' => 'required',
    //         'no_telepon' => 'required',
    //         'email' => 'required',
    //         'kota' => 'required',
    //         'nama_acara' => 'required',
    //         'tanggal_acara' => 'required',
    //         'konfirmasi' => 'required'
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => $validator->errors()
    //         ], 422);
    //     }

    //     $user = User::find($id);

    //     if (!$user) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'User tidak ditemukan'
    //         ], 404);
    //     }

    //     $user->update([
    //         'username' => $request->username,
    //         'password' => $request->password,
    //         'no_telepon' => $request->no_telepon,
    //         'email' => $request->email,
    //         'kota' => $request->kota,
    //         'nama_acara' => $request->nama_acara,
    //         'tanggal_acara' => $request->tanggal_acara,
    //         'konfirmasi' => $request->konfirmasi
    //     ]);

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Data berhasil diperbarui',
    //         'data' => $user
    //     ], 201);
    // } > blom bisa

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
