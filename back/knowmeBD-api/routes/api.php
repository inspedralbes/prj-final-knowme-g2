<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DomainController;

//public routes
    //users
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    //domains
    // Route::get('/domains', [DomainController::class, 'index']);
    // Route::get('/domains/{id}', [DomainController::class, 'show']);

//protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    //users
    Route::post('/logout', [AuthController::class,'logout']);
    Route::put('/users/update', [AuthController::class, 'update']);
    Route::put('/users/changePassword', [AuthController::class, 'changePassword']);
    Route::delete('/users/delete', [AuthController::class, 'delete']);
    //domains
    Route::post('/domains', [DomainController::class, 'create']);
    Route::put('/domains/update', [DomainController::class, 'update']);
    Route::delete('/domains/delete', [DomainController::class, 'delete']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });