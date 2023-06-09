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

        $user = DB::select("SELECT * FROM myList LEFT JOIN movies ON myList.movieID = movies.movieID WHERE myList.userID = $usuario");

        return response()->json([
            'data'=>$user
        ]);

    }

    function borrar(Request $request){
        $request->validate([
            'id' => 'required',
        ]);

        $movieID = $request->input('id');


        $movie = DB::select("DELETE FROM myList WHERE movieID = $movieID");

        return response()->json([
            'message' => 'La pelicula ha sido eliminada.'
        ]);
    }

    function directores(Request $request){
        $directores = DB::select('select * from directors');

        return response()->json([
            'data' => $directores
        ]);
    }

    function actores(Request $request){
        $actores = DB::select('select * from actors');

        return response()->json([
            'data' => $actores
        ]);
    }

    function filtro(Request $request){
        $request->validate([
            'genre' => 'required',
        ]);

        $genero = $request->input('genre');

        $genero = DB::select("SELECT * FROM movies JOIN movies_genres ON movies.movieID = movies_genres.movie_id WHERE movies_genres.genre = '$genero'");

        return response()->json([
            'data' => $genero
        ]);
    }

    function usuario(){
        $user = DB::select('select * from users where id=1');

        return response()->json([
            'data' => $user
        ]);

    }

}