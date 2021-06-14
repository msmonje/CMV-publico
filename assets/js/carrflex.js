// ejercicios con arrays


// pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//    (input - .slice .indexOf)

// variable global de la pagina
// un array con un elemento por cada usuario del XML
// en realidad será un array de arrays, una matriz bidimensional
let registrados = [];


function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };
    xhr.open("GET", "https://msmonje.github.io/CMV-publico/ejercicios/javascript/xml/leerNuestraBD/datos.xml", true);
    //xhr.open("GET", "registrados2.xml", true);  si uso un archivo local----INICIAR APACHE!!!
    xhr.send();
    
}

function cargarArray(xml) {
    var i;
    var usrNom;
    var usrPsw;
    var elemento = [];
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("elemento");
    // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]

    // tabla es una variable string que contiene codigo
    // html para poder mostrar en pantalla el XML con formato tabla

    let tabla = "<table><tr><th>NOMBRE</th><th>URL</th></tr>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let usrPsw = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        let detalle= x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>" + detalle +"</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        let elemento = [usrNom, usrPsw, detalle];
        registrados.push(elemento);
    }
    tabla += "</table>";
    mostrarImagen();
    //document.getElementById("mensaje").innerHTML = tabla;

    // muestro en consola el array de usuarios registrados
    // una vez depurado, comentamos el codigo siguiente
    //   registrados.forEach((usuario) => {
    //       usuario.forEach((datos) => {
    //           console.log(datos);
    //       });
    //   });

}

function mostrarImagen() {
    // muestro en pantalla el array de usuarios registrados
    // en formato tabla en el id solicitado
    //let nom = $("#nom").val();
    let foto = null;
    let bloque = "<div class=\"carousel-inner\">";
    let bots = "";
    foto = registrados[0][1];
    let detalle = registrados [0][2]

    // actualizo la tabla de visualización
    bloque += "<div class=\"carousel-item active\"> <img class=\"carru\"  src='" + foto +"'/><div id='pie' class='carousel-caption d-none d-md-block'><p>" + detalle + "</p></div></div>";
    //bloque = "<div class=\"carousel-inner\">";
    for (i = 1; i < registrados.length; i++) {
       // if (nom == registrados[i][0]) {
            foto = registrados[i][1];
         detalle= registrados [i][2];

            bloque += "<div class=\"carousel-item \"> <img class=\"carru\" src='" + foto + "'/><div id='pie' class='carousel-caption d-none d-md-block'><p>" + detalle + "</p></div></div>";
           // bots += "<button type=\"button\" data-bs-target=\"#carouselExampleC\" data-bs-slide-to=\"" + i +"\"aria-label=\"Slide 2\"></button>";
            
       // }
   }
   bloque+="</div>"
    

    // la mostramos en el html
    //document.getElementById("botones").innerHTML = bots;
    document.getElementById("miCarru").innerHTML = bloque;
}

