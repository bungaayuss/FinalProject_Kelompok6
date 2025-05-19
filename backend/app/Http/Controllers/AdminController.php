<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use Illuminate\Http\Request;

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
}
