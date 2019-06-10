
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


function incluir()
{
	var titulo = document.Formulario.titulo.value;
    var autor = document.Formulario.autor.value;
    var isbn = document.Formulario.isbn.value;
    var fecha_publicacion = document.Formulario.fecha_publicacion.value;
    var num_paginas = document.Formulario.num_paginas.value;
    var regex=/^([0-9]{13})+$/;

	if((regex.test(isbn) == true)&&(isbn!="")&&(autor!="")&&(titulo!=""))
	{

			var databaseRef = firebase.database().ref('libros/');
        var data = {
  			Titulo: titulo,
  			Autor: autor,
  			ISBN: isbn,
  			Fecha_Publicacion: fecha_publicacion,
  			Num_paginas: num_paginas
  		}
   		var updates = {};
   		updates[isbn] = data;
   		databaseRef.update(updates);

   		$("#text").text('El libro ha sido añadido correctamente');
   		
   	}	
    else
    {
    	if(regex.test(isbn) == false)
    	{
       		$("#text").text('Formato de ISBN no válido. Deben ser 13 números');
       	}
       	else
       	{
       		$("#text").text('Los campos Autor, ISBN y Título son obligatorios');
       	}
    }
}
