/* 
JavaScript / XML
web o pagina: ejercicios de XML y JavaScript
autor: Prof. Carlos Boni
fecha: 27 abril 2021
resumen: lectura y carga en array bidimensional de un XML
*/

// variable global de la pagina
let registrados = [];// global




function leerXML2() {
  // lee desde aquí.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde aquí");
    }
  };
  xhr.open("GET", "registrados.xml", true);
  xhr.send();
}

function miFuncion(xml,fuente) {
  var i;  //fuente es irrelevante en nuestro caso
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var tabla=fuente + "<br/>";
  var x = xmlDoc.getElementsByTagName("usuario"); //obtengo todos los obj usuario
  
  tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";  //monto un string
  for (i = 0; i <x.length; i++) { 
	// leo las etiquetas que me interesan del objeto
	usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
	usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
	tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
	// actualizo el array bidimensional con los usuarios registrados
	usuario = [usrNom,usrPsw]; //array de dos elementos
	registrados.push(usuario); //manejo de arrays  no sabemos filas, dos columnas
  }
  tabla += "</table>"
  document.getElementById("contenidoXML").innerHTML = tabla; //agrego linea
  
  // muestro en consola el array de usuarios registrados
	registrados.forEach((usuario) => {
		usuario.forEach((datos) => {
			console.log(datos);
		});
	});
  //procesamos el array donde tenemos cargado el xml
}
