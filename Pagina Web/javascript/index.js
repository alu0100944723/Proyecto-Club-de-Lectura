document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems,{
    duration: 100,
    dist: 20,
    shift: 10,
    padding: 20,
    numVisible: 3,
    indicators: true,
    Width: 1000
  })
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


function changeCheckbox(event) {
    let item = document.getElementById('chkPref');
    switch(item.getAttribute('aria-checked')) {
        case "true":
            item.setAttribute('aria-checked', "false");
            break;
        case "false":
            item.setAttribute('aria-checked', "true");
            break;
    }
}

function review()
{
        var user = firebase.auth().currentUser;
        var titulo = document.Formulario2.libro.value;
        var reseña = document.Formulario2.reseña.value;
        var puntuacion = document.Formulario2.puntuacion.value;
  var data = {
        Titulo: titulo,
        Reseña: reseña,
        ISBN: isbn,
        Uid: user.uid
      }
        var databaseRef = firebase.database().ref('comentarios/');
        var updates = {};
        databaseRef.push(data);
        document.getElementById("Aviso").innerHTML="Se ha añadido con éxito";
       
}

/*function auntenticado(){
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
  if (user!=null) {
    document.getElementById("usuario").innerHTML="Bienvenido"+" "+user.displayName;
});
}
*/