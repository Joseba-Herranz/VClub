//At the start all movies will apear
function allMovies(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      var mov = "</br>";
    fetch("http://127.0.0.1:8000/api/allMovies", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.data.forEach(element => {
                mov += `<h4>${element.name}</h4> </br>`;
                if(element.rankscore != null){
                    mov += `<p>Year: ${element.year} Score: ${element.rankscore}</p>`;
                }else{
                    mov += `<p>Year: ${element.year} Score: No Score</p>`;
                }
                mov += `<button onclick="addList(${element.movieID})" >My List</button>`;
                mov += '</br>';
                mov += '-------------------';
                document.getElementById("movieList").innerHTML = mov;
            });
        })
        .catch(error => console.log('error', error));
}

//Only movies with score
function withScore(){
    document.getElementById("movieList").innerHTML = "<center><h1>Wait a bit</h1></center>";
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      var mov = "</br>";

    fetch("http://127.0.0.1:8000/api/allMovies", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.data.forEach(element => {
                if(element.rankscore != null){
                mov += `<h4>${element.name}</h4> </br>`;
                mov += `<p>Year: ${element.year} Score: ${element.rankscore}</p>`;
                mov += `<button onclick="addList(${element.movieID})">My List</button>`;
                mov += '</br>';
                mov += '-------------------';
            }
                document.getElementById("movieList").innerHTML = mov;
            });
        })
        .catch(error => console.log('error', error));
}

//Add to myList
function addList(movieID){    
    console.log(movieID);
    var formdata = new FormData();
    formdata.append("id", movieID);
    formdata.append("user", "1");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/myList", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
 }

 //Obtain the list
 function myList(){
    usuario();
    console.log("myList");
    var formdata = new FormData();
    formdata.append("id", "1");

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    var mov = "</br>";

    fetch("http://127.0.0.1:8000/api/obtenerLista", requestOptions)
    .then(response => response.json())
    .then(result =>  {
        console.log(result)
        result.data.forEach(element => {
            mov += `<h4>${element.name}</h4> </br>`;
            mov += `<p>Year: ${element.year} Score: ${element.rankscore}</p>`;
            mov += `<button onclick="borrado(${element.movieID})">Delete</button>`;
            mov += '</br>';
            mov += '-------------------';
            
        document.getElementById("movieList").innerHTML = mov;
        });
    })
    .catch(error => console.log('error', error));
    
 }

 //Delete movies
function borrado(movieID){
    var formdata = new FormData();
    formdata.append("id", movieID);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/borrar", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

//All actors
function actores(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      var mov = "</br>";
    fetch("http://127.0.0.1:8000/api/actores", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.data.forEach(element => {
                mov += `<h4>${element.first_name} ${element.last_name}</h4>`;
                
                mov += '-------------------';
                document.getElementById("movieList").innerHTML = mov;
            });
        })
        .catch(error => console.log('error', error));
}

//All directors
function directores(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      var mov = "</br>";
    fetch("http://127.0.0.1:8000/api/directores", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.data.forEach(element => {
                mov += `<h4>${element.first_name} ${element.last_name}</h4>`;
               
                mov += '-------------------';
                document.getElementById("movieList").innerHTML = mov;
            });
        })
        .catch(error => console.log('error', error));
} 

//Filtro
function genre(){
    var generosSelect = document.getElementById("generos");
    var genero = generosSelect.value;
    console.log("Género seleccionado: " + genero);

    var formdata = new FormData();
    formdata.append("genre", genero);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    var mov = "</br>";
    fetch("http://127.0.0.1:8000/api/filtro", requestOptions)
    .then(response => response.json())
    .then(result => {
        result.data.forEach(element => {
            mov += `<h4>${element.name}</h4> </br>`;
            if(element.rankscore != null){
                mov += `<p>Year: ${element.year} Score: ${element.rankscore}</p>`;
            }else{
                mov += `<p>Year: ${element.year} Score: No Score</p>`;
            }
            mov += `<button onclick="addList(${element.movieID})">My List</button>`;
            mov += '</br>';
            mov += '-------------------';
            document.getElementById("movieList").innerHTML = mov;
        });
    })
    .catch(error => console.log('error', error));
}

//Nombre usuario (En desarrollo por errores en la llamada)
function usuario(){
    var formdata = new FormData();

    var requestOptions = {
    method: 'GET',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/usuario", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}