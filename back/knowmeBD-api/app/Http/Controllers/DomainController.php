<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Domain;
use App\Models\UserApi;
use Illuminate\Support\Facades\Auth;

class DomainController extends Controller
{
    
    public function create(Request $request){
        $user = auth()->user();

        $fields = $request->validate([
            'webURL' => 'required|string',
            'content' => 'required|string',
            'category' => 'required|string',
            'isPublic' => 'required|boolean'
        ]);

        $domain = Domain::create([
            'id'=> $user->id,
            'webURL'=> $fields['webURL'],
            'content'=> $fields['content'],
            'category'=> $fields['category'],
            'isPublic'=> $fields['isPublic']
        ]);

        $response = [
            'domain' => $domain,
            'user' => $user
        ];

        return response($response, 201);
    }

    public function update(Request $request){
        
    }

}
