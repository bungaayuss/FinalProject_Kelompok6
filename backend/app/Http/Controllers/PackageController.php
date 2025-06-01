<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PackageController extends Controller
{
    public function index(){
        $packages = Package::with('category')->get();

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
            'foto' => $image->hashName(),
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

    public function show(string $id){
        $package = Package::find($id);
        
        if (!$package){
            return response()->json([
                "success" => false,
                "message" => "Resource not found"
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "Get detail resource",
            "data" => $package
        ], 200);
    }

    public function update(string $id, Request $request){
        // 1. Mencari data
        $package = Package::find($id);

        if (!$package){
            return response()->json([
                "success" => false,
                "message" => "Resource not found"
            ], 404);
        }

        // 2. Validator
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
            'deskripsi' => 'required|string',
            'foto' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
            'harga' => 'required|numeric',
            'categories_id' => 'required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        // 3. Siapkan data yang ingin diupdate
        $data = [
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'harga' => $request->harga,
            'categories_id' => $request->categories_id
        ];

        // 4. Handle image (upload & delete image)
        if ($request->hasFile('foto')) {
            $image = $request->file('foto');
            $image->store('packages', 'public');

            if ($package->foto){
                Storage::disk('public')->delete('packages/'.$package->foto);
            }

            $data['foto'] = $image->hashName();
        }
            

        // 5. Update data baru ke database
        $package->update($data);

        return response()->json([
            "success" => true,
            "message" => "Resource updated successfully",
            "data" => $package
        ], 200);
    }

    public function destroy(string $id){
       $package = Package::find($id);

       if (!$package){
            return response()->json([
                "success" => false,
                "message" => "Resource not found"
            ], 404);
       }

       if ($package->foto){
        // delete from storage
        Storage::disk('public')->delete('packages/'.$package->foto);
       }

       $package->delete();

       return response()->json([
            "success" => true,
            "message" => "Delete resource successfully"
        ], 200);
    }
}
