//At the start all movies will apear
function allMovies(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      var mov = "</br>";

    fetch("http://hz114496:1912/api/allMovies", requestOptions)
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

    fetch("http://hz114496:1912/api/allMovies", requestOptions)
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

    fetch("http://hz114496:1912/api/myList", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
 }

 //Obtain the list
 function myList(){
    console.log("myList");
    var formdata = new FormData();
    formdata.append("id", "1");

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    var mov = "</br>";

    fetch("http://hz114496:1912/api/obtenerLista", requestOptions)
    .then(response => response.json())
    .then(result =>  {
        console.log(result)
        result.data.forEach(element => {
            mov += `<h4>${element.name}</h4> </br>`;
            mov += `<p>Year: ${element.year} Score: ${element.rankscore}</p>`;
            mov += '</br>';
            mov += '-------------------';
            
        document.getElementById("movieList").innerHTML = mov;
        });
    })
    .catch(error => console.log('error', error));
 }