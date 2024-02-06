<?php

namespace App\Http\Controllers;

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
            'email'=> 'required|string|unique:users,email',
            'password'=> 'required|string|confirmed'
        ]);

        $user = UserApi::create([
            'user'=> $fields['user'],
            'name'=> $fields['name'],
            'surnames'=> $fields['surnames'],
            'email'=> $fields['email'],
            'password'=> bcrypt($fields['password'])
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
        if(!$user || !Hash::check($fields['password'], $user->password)){
            return response([
                'message' => 'Credencials incorrectes'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token'=> $token
        ];

        return response($response, 201);
    }

    public function logout(Request $request){
        auth()->user()->User::tokens()->delete();

        return [
            'message'=> 'Logged out'
        ];
    }

    public function updatePersonalData(Request $request, $id){

        $fields = $request->validate([
            'user' => 'string',
            'name' => 'string',
            'surnames' => 'string',
        ]);

        $user = UserApi::update([
            'user'=> $fields['user'],
            'name'=> $fields['name'],
            'surnames'=> $fields['surnames'],
            'email'=> $fields['email'],
            'password'=> bcrypt($fields['password'])
        ]);

        // $user = UserApi::find($id);
        // $user->update($request->all());
        return $user;
    }

    public function deleteUser(Request $request, $id){
        $user = UserApi::find($id);
        $user->delete();
        return  [
            'message'=> 'User deleted!'
        ];
    }
}