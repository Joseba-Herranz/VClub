//At the start
function allMovies(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      var mov = "</br>";
    //   var nulo = 0;
    //   var no_nulo = 0;
    fetch("http://127.0.0.1:8000/api/allMovies", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.data.forEach(element => {
                mov += `<h4>${element.name}</h4> </br>`;
                // mov += `<p>Year: ${element.year} </p> </br>`;
                if(element.rankscore != null){
                    // console.log("No es nulo " + element.rankscore);
                    // no_nulo++;
                    // console.log(no_nulo);
                    mov += `<p>Year: ${element.year} Rank: ${element.rankscore}</p>`;
                    
                }else{
                    // console.log("Es nulo " + element.rankscore);
                    // nulo++;
                    // console.log(nulo);
                    mov += `<p>Year: ${element.year} Rank: No rank</p>`;
                }
                mov += '</br>';
                mov += '-------------------'
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
    //   var nulo = 0;
    //   var no_nulo = 0;
    fetch("http://127.0.0.1:8000/api/allMovies", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.data.forEach(element => {
                if(element.rankscore != null){
                mov += `<h4>${element.name}</h4> </br>`;
                mov += `<p>Year: ${element.year} Score: ${element.rankscore}</p>`;
                mov += '</br>';
                mov += '-------------------'
            }
                document.getElementById("movieList").innerHTML = mov;
            });
        })
        .catch(error => console.log('error', error));
}

//