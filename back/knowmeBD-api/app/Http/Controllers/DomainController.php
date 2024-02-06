<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Domain;

class DomainController extends Controller
{
    
    public function create(Request $request){
        $fields = $request->validate([
            'webURL' => 'required|string',
            'content' => 'required|string',
            'category' => 'required|string',
            'isPublic' => 'required|boolean'
        ]);

        $domain = Domain::create([
            'webURL'=> $fields['webURL'],
            'content'=> $fields['content'],
            'category'=> $fields['category'],
            'isPublic'=> $fields['isPublic']
        ]);

        $response = [
            'domain' => $domain
        ];

        return response($response, 201);
    }

    public function update(Request $request){
        
    }

}
