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
}
