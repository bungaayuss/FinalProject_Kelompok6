<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PackageController extends Controller
{
    public function index(){
        $packages = Package::all();

        if ($packages->isEmpty()){
            return response()->json([
                "success" => true,
                "message" => "Resource data not found!"
            ], 200);
        }
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $packages
        ], 200);
    }

    public function store(Request $request){
        // 1. Validator
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
            'deskripsi' => 'required|string',
            'foto' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'harga' => 'required|numeric',
            'categories_id' => 'required|exists:categories,id',
        ]);

        // 2. Check Validator eror
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        // 3. Upload Image
        $image = $request->file('foto');
        $image->store('packages', 'public');
        
        // 4. Insert data
        $package = Package::create([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'foto' => $request->foto,
            'harga' => $request->harga,
            'categories_id' => $request->categories_id
        ]);
        
        // 5. Response
        return response()->json([
            "success" => true,
            "message" => "Resource added successfully",
            "data" => $package
        ]);
    }
}
