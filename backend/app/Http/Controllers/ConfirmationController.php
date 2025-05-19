<?php

namespace App\Http\Controllers;

use App\Models\Confirmation;
use Illuminate\Http\Request;

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
}
