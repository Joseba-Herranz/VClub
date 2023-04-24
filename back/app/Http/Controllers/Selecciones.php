<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Selecciones extends Controller
{
    //
    function allMovies(){
        $movies = DB::select('select * from movies');

        return response()->json([
            'data' => $movies
        ]);
    }

    function genre(Request $request){
        $request->validate([
            'genre' => 'required',
        ]);

        $genero = $request->input('genre');

        $genre = DB::select("select * from movies inner join movies_genres on movies.id = movies_genres.movie_id where movies_genres.genre = '$genero'");

         return response()->json([
            'data' => $genre
        ]);
    }

    function year(Request $request){
        
        $request->validate([
            'year' => 'required',
        ]);

        $año = $request->input('year');

        $year = DB::select("select * from movies where year = $año");

        return response()->json([
            'data' => $year
        ]);
    }

    function myList(Request $request) {
        $request->validate([
            'id' => 'required',
            'user' => 'required',
        ]);
    
        $pelicula = $request->input('id');
        $user = $request->input('user');
    
        DB::table('myList')->insert([
            'userID' => $user,
            'movieID' => $pelicula
        ]);
    
        return response()->json([
            'message' => 'La pelicula ha sido anadida a la lista.'
        ]);
    }

    function obtenerLista(Request $request){
        $request->validate([
            'id' => 'required',
        ]);

        $usuario = $request->input('id');

        $user = DB::select("select * from myList where userID = $usuario ");

        return response()->json([
            'data'=>$user
        ]);

    }
}