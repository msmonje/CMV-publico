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
    xhr.open("GET", "https://msmonje.github.io/CMV-publico/ejercicios/proyecto/datos.xml", true);
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
        let pie= x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>" + pie +"</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        let elemento = [usrNom, usrPsw, pie];
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

// function mostrarClave(){
//     // obtenemos el usuario del campo input y
//     // validamos que exista en el array
//     // si no, mostramos un alert y no hacemos nada
//     // si existe actualizamos el elemento con id clavebuscada

//     // sintaxis jQuery: nombre = $("#nom").val();

//         let nombre = $("#nom").val();

//         let clave= registrados.indexOf(nombre) ; //.getElementsByTagName("clave")[0].childNodes[0].nodeValue;


//         //document.getElementById("claveBuscada").innerHTML = ;

// }



function mostrar() {
    // muestro en pantalla el array de usuarios registrados
    // en formato tabla en el id solicitado
    let tabla = "";
    registrados.forEach((elemento) => {
        // usuario.forEach((datos) => {
            tabla = "<table><tr><th>NOMBRE</th><th>URL</th></tr>";
            for (i = 0; i < registrados.length; i++) {
                // leo las etiquetas que me interesan del objeto
                usrNom = registrados[i][0];
                usrPsw = registrados[i][1];
                pie = registrados[i][2];
                // actualizo la tabla de visualización
                tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>" + pie +"</td></tr>";
                // actualizo el array bidimensional con los usuarios registrados
            }
            tabla += "</table>"
        // });
    });
    // la mostramos en el html
    //document.getElementById("solicitado").innerHTML = tabla;
}

function mostrarFoto() {
    // muestro en pantalla el array de usuarios registrados
    // en formato tabla en el id solicitado
    let nom = $("#nom").val();
    let foto = null;
    let tabla = "";
    tabla = "<table><tr><th>NOMBRE</th><th>URL</th></tr>";
    for (i = 0; i < registrados.length; i++) {
        if (nom == registrados[i][0]) {
            foto = registrados[i][1];

            // actualizo la tabla de visualización
            tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>" + pie +"</td></tr>";
            // actualizo el array bidimensional con los usuarios registrados
        }
    }
    if (foto == null) {
        tabla = "No se encuentra"
    }


    tabla += "</table>"

    // la mostramos en el html
    //document.getElementById("solicitado").innerHTML = tabla;
}
function mostrarImagen() {
    // muestro en pantalla el array de usuarios registrados
    // en formato tabla en el id solicitado
    //let nom = $("#nom").val();
    let foto = null;
    let bloque = "<div class=\"carousel-inner\">";
    let bots = "";
    foto = registrados[0][1];
    let pie = registrados [0][2]

    // actualizo la tabla de visualización
    bloque += "<div class=\"carousel-item active\"> <img class=\"carru\"  src='" + foto +"'/><div id='pie' class='carousel-caption d-none d-md-block'><p id=\"detalle\">" + pie + "</p></div></div>";
    //bloque = "<div class=\"carousel-inner\">";
    for (i = 1; i < registrados.length; i++) {
       // if (nom == registrados[i][0]) {
            foto = registrados[i][1];
         pie= registrados [i][2];

            bloque += "<div class=\"carousel-item \"> <img class=\"carru\" src='" + foto + "' alt='" + pie + "'/><div id='pie' class='carousel-caption d-none d-md-block'><p id=\"detalle\">" + pie + "</p></div></div>";
           // bots += "<button type=\"button\" data-bs-target=\"#carouselExampleC\" data-bs-slide-to=\"" + i +"\"aria-label=\"Slide 2\"></button>";
            
       // }
   }
   bloque+="</div>"
    

    // la mostramos en el html
    //document.getElementById("botones").innerHTML = bots;
    document.getElementById("miCarru").innerHTML = bloque;
}

