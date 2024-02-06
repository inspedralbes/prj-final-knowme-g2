<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DomainController;

//public routes
    //users
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);


//protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    //users
    Route::post('/logout', [AuthController::class,'logout']);
    Route::put('/users/update', [AuthController::class, 'update']);
    Route::put('/users/changePassword', [AuthController::class, 'changePassword']);
    Route::delete('/users/delete', [AuthController::class, 'delete']);
    //domains
    // Route::get('/users/{id}/domains', [DomainController::class, 'show']);
    // Route::post('/users/{id}/domains', [DomainController::class, 'create']);
    // Route::get('/users/{id}/domains/{domain_id}', [DomainController::class, 'find']);
    // Route::put('/users/{id}/domains/{domain_id}', [DomainController::class, 'update']);
    // Route::delete('/users/{id}/domains/{domain_id}', [DomainController::class, 'delete']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });