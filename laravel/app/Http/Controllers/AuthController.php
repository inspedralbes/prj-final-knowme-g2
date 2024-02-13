<?php

namespace App\Http\Controllers;

use App\Models\Domain;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\UserApi;


class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'user' => 'required|string',
            'name' => 'required|string',
            'surnames' => 'required|string',
            'email'=> 'required|string|unique:users_api,email',
            'password'=> 'required|string|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/|confirmed'
        ]); 



        $user = UserApi::create([
            'user'=> $fields['user'],
            'name'=> $fields['name'],
            'surnames'=> $fields['surnames'],
            'email'=> $fields['email'],
            'password'=> $fields['password']
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token'=> $token
        ];

        return response($response, 201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'user'=> 'required|string',
            'password'=> 'required|string'
        ]);

        //Check email
        $user = UserApi::where('user', $fields['user'])->first();

        //Check password
        if(!$user || $fields['password'] != $user->password){
            return response([
                'message' => 'Credencials incorrectes'
            ], 401);
        }

        $token = $user->createToken($user['user'])->plainTextToken;

        $response = [
            'user' => $user,
            'token'=> $token
        ];

        return response($response, 201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();

        return [
            'message'=> 'Logged out'
        ];
    }

    public function update(Request $request){

        $fields = $request->validate([
            'user' => 'string',
            'name' => 'string',
            'surnames' => 'string',
        ]);

        $user = auth()->user();
        $user->update($fields);

        $response = [
            'user' => $user,
            'message'=> 'User updated!'
        ];

        return response($response, 201);
    }

    public function changePassword(Request $request){
        $fields = $request->validate([
            'oldPassword'=> 'required|string',
            'password'=> 'required|string|confirmed'
        ]);

        $user = auth()->user();
        
        if ($fields['oldPassword'] != $user->password){
            return response([
                'message' => 'Old password incorrect'
            ], 401);
        }

        $user->update([
            'password'=> $fields['password']
        ]);

        return  [
            'message'=> 'Password updated!'
        ];
    }

    public function delete(Request $request){
        $user = auth()->user();
        Domain::where('user_id', $user->id)->delete();
        $user->delete();
        $user->tokens()->delete();

        return  [
            'message'=> 'User deleted!'
        ];
    }
}