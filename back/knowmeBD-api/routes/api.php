<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DomainController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//public routes
    //users
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);


//protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    //users
    Route::put('/users/{id}', [AuthController::class, 'update']);
    Route::delete('/users/{id}', [AuthController::class, 'delete']);
    Route::post('/logout', [AuthController::class,'logout']);
    //domains
    Route::get('/users/{id}/domains', [DomainController::class, 'show']);
    Route::post('/users/{id}/domains', [DomainController::class, 'create']);
    Route::get('/users/{id}/domains/{domain_id}', [DomainController::class, 'find']);
    Route::put('/users/{id}/domains/{domain_id}', [DomainController::class, 'update']);
    Route::delete('/users/{id}/domains/{domain_id}', [DomainController::class, 'delete']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});