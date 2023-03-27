<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Selecciones extends Controller
{
    //
    function allMovies(){
        $movies = DB::select('select * from movies');

        return $movies;
    }

    function genre($genero){
        
        $genre = DB::select(`select * from movies INNER JOIN movies_genres ON movies.id = movies_genres. movie_id where movies_genres.genre = '$genero'`);

        return $genre;
    }

    function year($año){
        
        $year = DB::select(`select * from movies where year = '$año'`);

        return $year;
    }
}
