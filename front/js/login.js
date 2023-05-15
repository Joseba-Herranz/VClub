// function vistaPrev(){
//   document.getElementById("save").addEventListener("click", function(event) {
        
//     event.preventDefault();
    
//     guardado();
// });

// document.getElementById("regis").addEventListener("click", function(event) {
    
//     event.preventDefault();
//     console.log("dentro");
//     registro();
// });

// document.getElementById("login").addEventListener("click", function(event) {
    
//     event.preventDefault();
    
//     login();
// });

  /////////
  //Login//
  /////////

  function login(){
    console.log("dentro")
      const email = document.getElementById('logE').value;
      const password = document.getElementById('logP').value;

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://hz114496:1912/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          localStorage.setItem("token", result['authorisation']['token']);
          document.getElementById("form").style.display = "none";
          document.getElementById("contenido").style.display = "block";
          console.log("dentro")

          window.location.href = "https://developer.imdb.com/non-commercial-datasets/";
        })
        .catch(error => {
          alert("Tu correo o contraseña no son correctos");
        });
  }

  ////////////
  //Registro//
  ////////////

  function registro(){
    console.log("Dentro");
      const nombre = document.getElementById('regN').value;
      const email = document.getElementById('regE').value;
      const password = document.getElementById('regP').value;

      var formdata = new FormData();
      formdata.append("name", nombre);
      formdata.append("email", email);
      formdata.append("password", password);

      var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
      };

      fetch("http://hz114496:1912/api/register", requestOptions)
      .then(response => response.json())
      .then(result => {
          localStorage.setItem("token", result['authorisation']['token']);
          // localStorage.setItem("antes", ) Prueba para saber si el usuario estaba logeado antes 
          document.getElementById("form").style.display = "none";
          document.getElementById("contenido").style.display = "block";
      })
      .catch(error => {
        console.log(error)
        alert("El correo que esta usando esta en uso o su contraseña es menor del minimo");
      });
  }

  ////////////
  //Log Out///
  ////////////

  function logOut(){
      localStorage.removeItem("token");
  }
