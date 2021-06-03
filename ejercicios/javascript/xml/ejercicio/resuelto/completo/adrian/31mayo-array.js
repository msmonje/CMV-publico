



function direccionDeOrden(dir) {
  if (dir == "mayor") {
    return 0;
  } else if (dir == "menor") {
    return 1;
  } else {
    document.write('Por favor, introduce "mayor" o "menor"');
  }

}



let arrayDesordenado = [6]
for (let i = 0; i < 6; i++) {
  let num = Math.floor(Math.random() * 7) + 1;
  arrayDesordenado[i] = num;
}
var devolucion = document.getElementById('arrayDesordenado');
devolucion.innerHTML = arrayDesordenado;

function ordenar(mayor) {
  arrayDesordenado.sort(function (a, b) {
    return b - a;
  });
  if (mayor == 1) {
    devolucion.innerHTML = arrayDesordenado;
  } else {
    devolucion.innerHTML = arrayDesordenado.reverse();
  }


}

let registrados = [];
leerXML();

function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var tabla = "<br/>";
  var x = xmlDoc.getElementsByTagName("usuario");
  // obtenemos algo como     x =[{USR1},{USR2},...,{CANDIDO}]


  //tabla es una variable String que contiene codigo HTML para poder mostrar en pantalla el XML con formato tabla
  tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i < x.length; i++) {
    // leo las etiquetas que me interesan del objeto
    usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
    tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
    // actualizo el array bidimensional con los usuarios registrados
    usuario = [usrNom, usrPsw];
    registrados.push(usuario);
  }
  tabla += "</table>"
  document.getElementById("mensaje").innerHTML = tabla;

  // muestro en consola el array de usuarios registrados
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      console.log(datos);
    });
  });



}



function ordenarUsuarios() {
  //Ordenamos  la matriz
  registrados.sort((usuario1, usuario2) =>
    usuario1[0].localeCompare(usuario2[0]),
  );
  let tabla = "";
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
      for (let i = 0; i < registrados.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let usrNom = registrados[i][0];
        let usrPsw = registrados[i][1];
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>"
    });
  });
  document.getElementById("mensaje").innerHTML = tabla;
}

function ordenarClaves() {
  //Ordenamos  la matriz
  registrados.sort((usuario1, usuario2) =>
    usuario2[1].localeCompare(usuario1[1]),
  );
  let tabla = "";
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
      for (let i = 0; i < registrados.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let usrNom = registrados[i][0];
        let usrPsw = registrados[i][1];
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>"
    });
  });
  document.getElementById("mensaje").innerHTML = tabla;
}

function filtrarBusqueda() {
  let name = document.getElementById('nombre').value;
  let cont = 0;
  let tabla = "";
  let salida = false;
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      if (!salida) {
        tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
        for (let i = 0; i < registrados.length; i++) {

          let usrNom = registrados[i][0];
          let usrPsw = registrados[i][1];
          // actualizo la tabla de visualización
          if (usrNom == name) {
            tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
          } else {
            salida = true;
            cont++;
          }
        }
        tabla += "</table>"
      }
    });
  });
  if (cont < registrados.length) {
    document.getElementById("mensaje").innerHTML = tabla;
  } else {
    alert("Ese usuario no existe, introduce otro");
  }
}