<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    public function index(){
        $packages = Package::all();
        
        return response()->json([
            "success" => true,
            "message" => "Get All Resource",
            "data" => $packages
        ], 200);
    }
}
