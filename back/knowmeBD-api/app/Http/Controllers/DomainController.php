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

        if(!$user){
            return response(['error' => 'Unauthorized'], 401);
        } else if (Domain::where('id_user', $user->id)->count() >= 1){
            return response(['error' => 'Ja tens un portfoli creat!'], 403);
        }

        $fields = $request->validate([
            'webURL' => 'required|string|unique:domains,webURL',
            'content' => 'required|string',
            'category' => 'required|string',
            'isPublic' => 'required|boolean'
        ]);

        $domain = Domain::create([
            'id_user'=> $user->id,
            'webURL'=> $fields['webURL'],
            'content'=> $fields['content'],
            'category'=> $fields['category'],
            'isPublic'=> $fields['isPublic']
        ]);

        $response = [
            'domain' => $domain,
            'user' => $user,
            'id_user' => $user->id,
        ];

        return response($response, 201);
    }

    public function update(Request $request){
        $user = auth()->user();
        
        if(!$user){
            return response(['error' => 'Unauthorized'], 401);
        } else if (Domain::where('id_user', $user->id)->count() == 0){
            return response(['error' => 'No tens cap portfoli creat!'], 403);
        }

        $fields = $request->validate([
            'webURL' => 'string|unique:domains,webURL',
            'content' => 'string',
            'category' => 'string',
            'isPublic' => 'boolean'
        ]);

        $domain = Domain::where('id_user', $user->id)->first();

        $domain->update([
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

    public function delete(Request $request){
        $user = auth()->user();
        
        if(!$user){
            return response(['error' => 'Unauthorized'], 401);
        } else if (Domain::where('id_user', $user->id)->count() == 0){
            return response(['error' => 'No tens cap portfoli creat!'], 403);
        }

        $domain = Domain::where('id_user', $user->id)->first();

        $domain->delete();

        return response(['message' => 'Portfoli eliminat!'], 201);
    }

}
