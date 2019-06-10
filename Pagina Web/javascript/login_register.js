
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });



function comprobarpasswd(pass, rpass){
  if (pass == rpass){
    return true;
    console.log('No coinciden')
  }
  else return false;
}

function storeData(){
  
    var email = document.Registro.email_usuario.value;
    var pass = document.Registro.contraseña_usuario.value;
    var rpass = document.Registro.rep_contraseña_usuario.value;
    var name = document.Registro.nombre_usuario.value;
    var es_autor = document.Registro.es_autor.value;

    if(comprobarpasswd(pass,rpass)){
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      document.getElementById("Aviso").innerHTML=errorMessage;
    }).then(function(){
      if(es_autor=="Sí") {
        var data = {
          Email: email,
          Nombre: name,
          Es_autor: 'Sí',
        }
        var databaseRef = firebase.database().ref('autores/');
        var updates = {};
        updates[name] = data;
        databaseRef.update(updates);
        document.getElementById("Aviso").innerHTML="Se ha registrado con éxito";
        //setTimeout("location.href='news.html'",5000);
      }
      else {
        var data = {
          Email: email,
          Nombre: name,
          Es_autor: 'No',
        }
        var databaseRef = firebase.database().ref('usuarios/');
        var updates = {};
        updates[name] = data;
        databaseRef.update(updates);
        document.getElementById("Aviso").innerHTML="Se ha registrado con éxito";
        //setTimeout("location.href='news.html'",5000);
      }
    });
  }
    else {
      document.getElementById("Aviso").innerHTML="Las contraseñas no coinciden"
      //setTimeout("location.href='register.html'",10000);
    }
}
    function signin(){

      var email = document.Inicio.email_usuario.value;
      var pass = document.Inicio.contraseña_usuario.value;
      
      firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("Aviso2").innerHTML="Error: Vuelve a introducir tus datos por favor";
      }).then(function(){
       
        document.getElementById("Aviso2").innerHTML="Bienvenido"+" "+ email;
      
        });
      
    }
