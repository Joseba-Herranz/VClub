<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Selecciones;

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

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(Selecciones::class)->group(function(){
    Route::get('allMovies','allMovies');
    Route::post('genre', 'genre');
    Route::post('year', 'year');
    Route::post('myList', 'myList');
    Route::post('obtenerLista', 'obtenerLista');
    Route::post('borrar', 'borrar');
    Route::get('directores', 'directores');
    Route::get('actores', 'actores');
    Route::post('filtro', 'filtro');
    Route::get('usuario', 'usuario');
});