
// pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//	(input - .slice .indexOf)

// variable global de la página. Un array con un elemento por cada usuario del xml. 
//En realidaes un array de arrays, matriz bidimensional.
let registrados = [];



function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {  //
      miFuncion(this,"Desde GitHub con atributos");
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
  xhr.send();
}



function miFuncion(xml) {
  var i;
  var usrNom;
  var usrPsw;
 // var usuario = [];
 // var tabla = "<br/>";
  var xmlDoc = xml.responseXML;
  
  var x = xmlDoc.getElementsByTagName("usuario");
  //x=[USR1,USR2,...,CANDIDO]  ESTAMOS OBTENIENDO EL ARRAY porque es tag, si fuera id devolveria un unico elemento
  //tabla es un string que contiene codigo html para poder mostrar el xml en formato tabla
  
   let tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i <x.length; i++) { 
	// leo las etiquetas que me interesan del objeto
	let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue; //obt un elem de un array getElementsByTagName("nombre")[0]
	let usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
	tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>"; //agregamos una fila
	// actualizo el array bidimensional con los usuarios registrados
	let usuario = [usrNom,usrPsw];
	registrados.push(usuario);
  }
  tabla += "</table>"//cerramos la etiqueta tabla
  document.getElementById("mensaje").innerHTML = tabla;
  
  // muestro en consola el array de usuarios registrados
	registrados.forEach((usuario) => {
		usuario.forEach((datos) => {
			console.log(datos);
		});
	});
}
//nombre del primer usuario
let indiceCampoNombre = 0;
let indiceCampoClave=1;

//obtengo el nombre del primer usuario

let nomUsr1=registrados[0][indiceCampoNombre];

//obtengo clave del usuario 3

let nomUsr3=registrados[2][indiceCampoClave];

function mayor(){
   // document.write(registrados.sort());
   let ordenado=  registrados.sort();
    document.getElementById('p1').innerHTML='ordenado';
}
function menor(){
   registrados.sort();
   document.write(registrados.reverse());
   document.getElementById('p1').innerHTML='Párrafo de texto'
}

function mostrarUsuario(){
    prompt("indica indice nombre")
    
   // prompt("indica indice clave")
    let indiceCampoNombre = 0;
    let indiceCampoClave=1;

    document.getElementById("usuario").innerHTML="registrados[indiceCampoNombre][indiceCampoClave]";
}