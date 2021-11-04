/* 4.- PRESTAMO DE EQUIPO 
-REALIZAR UNA APLICACION QUE PERMITAREALIZAR PRESTAMO DE EQUIPOS DE COMPUTO 

5 EQUIPOS DE COMPUTO DEFINIDOS POR NOSOTROS

EL EQUIPO DE COMPUTO DEBE TENER LA SIGUIENTE INFORMACION 
NOMBRE
CODIGO
CANTIDAD

PARA REALIZAR UN PRESTAMO DE EQUIPO EL USUARIO NO DEBE TENER UN PRESTAMO ACTIVO, Y DEBE DE ESTAR DISPONIBLE EL
EQUIPO DE COMPUTO 

MOSTRAR TODOS LOS PRESTAMOS
MOSTRAR PRESTAMOS DE UN USUARIO EN ESPECIFICO
OSTRAR LA INFORMACION DE LOS EQUIPOS DE COMPUTO PRESTADO Y EN ALMACEN
*/

const menu = ("1.- MOSTRAR PRESTAMOS\n2.-MOSTRAR PRESTAMOS DE UN USUARIO EN ESPECIFICO\n3.-MOSTRAR EQUIPOS DE COMPUTO EN ALMACEN\n4.-MOSTRAR EQUIPOS DE COMPUTO PRESTADOS\n5.- HACER UN PRESTAMO");
alert(menu);
var computadora1;
var andres;
equiposComputo = ["COMPUTADORA X 1212", "COMPUTADORA Y 1313", "COMPUTADORA Z 1414", "COMPUTADORA V 1515", "COMPUTADORA W 1616"];
const v = "COMPUTADORA V";
const w = "COMPUTADORA W";
const x = "COMPUTADORA X";
const y = "COMPUTADORA Y";
const z = "COMPUTADORA Z";
var equipo;
var equipo1;
var opcion = prompt("DIGITE EL NUMERO DE LA OPCION QUE DESEA UTILIZAR");

if (opcion == 1) {

    alert("AUN NO HAY PRESTAMOS");
}
if (opcion == 2) {
    alert("AUN NO HAY USUARIOS EN NUESTRA BASE DE DATOS");

}
if (opcion == 3) {
    alert("EQUIPOS DE COMPUTO / ALMACEN\n1.-COMPUTADORA X 1212\n2.-COMPUTADORA Y 1313\n3.- COMPUTADORA Z 1414\n4.-COMPUTADORA V 1515\n5.-COMPUTADORA W 1616");
}
if (opcion == 4) {
    alert("EQUIPOS DE COMPUTO / PRESTADOS\n AUN NO HEMOS PRESTADO NINGUN EQUIPO DE COMPUTO");
}
if (opcion == 5) {
    var computadora = prompt("CUAL EQUIPO  DESEA (INGRESE NUMERO DE PRODUCTO)\n1.-COMPUTADORA X 1212\n2.-COMPUTADORA Y 1313\n3.- COMPUTADORA Z 1414\n4.-COMPUTADORA V 1515\n5.-COMPUTADORA W 1616");
    var usuario = prompt("INGRESE SU NOMBRE O CLAVE UNICA  PARA SER REGISTRADO");
    if (computadora == 1) {
        alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA X\n CODIGO 1212");
        var equipo = "COMPUTADORA X 1212 *1";
    }
    if (computadora == 2) {
        alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA Y\n CODIGO 1313");
        var equipo = "COMPUTADORA Y 1313 *1";
    }
    if (computadora == 3) {
        alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA Z\n CODIGO 1414");
        var equipo = "COMPUTADORA Z 1414 *1";
    }

    if (computadora == 4) {
        alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA V\n CODIGO 1515");
        var equipo = "COMPUTADORA V 1515 *1";
    }
    if (computadora == 5) {
        alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA W\n CODIGO 1616");
        var equipo = "COMPUTADORA W 1616 *1";
    }
}


var siNo = prompt("DESEAS REALIZAR ALGO MAS (1 = SI, 2= NO)");
if (siNo == 1) {
    //REGREASAR AL MENU
    //alert(menu);
    alert(menu);

    if (siNo == 2) {
        alert("VUELVA PRONTO");
    }

}

var opcion = prompt("DIGITE EL NUMERO DE LA OPCION QUE DESEA UTILIZAR");

if (opcion == 1) {

    alert(equipo);
}
if (opcion == 2) {
    var a = prompt("INGRESE SU NOMBRE O CLAVE PARA BUSCARLO");
    if (a == usuario) {
        alert(usuario + equipo);
    }
    if (a != usuario)
        alert("USUARIO NO ENCONTRADO");
}
if (opcion == 3) {
    alert("EQUIPOS DE COMPUTO / ALMACEN\n " + equiposComputo + "\nNO DISPONIBLES " + equipo);

}
if (opcion == 4) {
    alert("EQUIPOS DE COMPUTO / PRESTADOS\n " + equipo);
}
if (opcion == 5) {
    var equipo1 = prompt("CUAL EQUIPO  DESEA (INGRESE NUMERO DE PRODUCTO)\n1.-COMPUTADORA X 1212\n2.-COMPUTADORA Y 1313\n3.- COMPUTADORA Z 1414\n4.-COMPUTADORA V 1515\n5.-COMPUTADORA W 1616");
    var usuario1 = prompt("INGRESE SU NOMBRE O CLAVE UNICA  PARA BUSCARLO");

    if (usuario1 == usuario) {
        alert("NO PUEDE PEDIR OTRO PRESTAMO");
    }
    if (usuario1 != usuario)
        if (equipo1 == computadora) {
            alert("EQUIPO NO DISPONIBLE");
        }
    if (equipo1 == "1") {
        var equipo1 = "COMPUTADORA X CODIGO 1212 *1";
        alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA X\n CODIGO 1212");

        if (equipo1 == "2") {
            var equipo1 = "COMPUTADORA  Y CODIGO 1313 *1";
            alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA Y\n CODIGO 1313");

        }

        if (equipo1 == "3") {
            var equipo1 = "COMPUTADORA Z CODIGO 1414 *1";
            alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA Z\n CODIGO 1414");

        }

        if (equipo1 == "4") {
            var equipo1 = "COMPUTADORA V CODIGO 1515 *1";
            alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA V\n CODIGO 1515");

        }

        if (equipo1 == 5) {
            var equipo1 = "COMPUTADORA W CODIGO 1616 *1";
            alert("PRESTAMO DE COMPUTADORA EXITOSO\nCOMPUTADORA W\n CODIGO 1616");



        }

    }
    alert("1.- MOSTRAR PRESTAMOS\n2.-MOSTRAR PRESTAMOS DE UN USUARIO EN ESPECIFICO\n3.-MOSTRAR EQUIPOS DE COMPUTO EN ALMACEN Y PRESTADOS\n");
    var opcione = prompt("DIGITE EL NUMERO DE OPCION");
    if (opcione == 1) {

        if (equipo1 == 1) {
            alert(equipo + "\n" + "COMPUTADORA X  1212 *1");
        }
    }
    if (equipo1 == 2) {
        alert(equipo + "\n" + "COMPUTADORA Y  1313 *1");
    }
    if (equipo1 == 3) {
        alert(equipo + "\n" + "COMPUTADORA Z  1414 *1");
    }
    if (equipo1 == 4) {
        alert(equipo + "\n" + "COMPUTADORA V  1515 *1");
    }
    if (equipo1 == 5) {
        alert(equipo + "\n" + "COMPUTADORA W  1616 *1");
    }
    if (opcione == 2) {
        var h = prompt("INGRESE SU CLAVE");
    }
    if (h == usuario) {
        alert(usuario + "\n" + equipo)
    }
    if (h == usuario1) {
        if (equipo1 == 1) {
            alert(usuario1 + "\n" + "COMPUTADORA X  1212 *1");
        }
        if (equipo1 == 2) {
            alert(usuario1 + "\n" + "COMPUTADORA Y  1313 *1");
        }
        if (equipo1 == 3) {
            alert(usuario1 + "\n" + "COMPUTADORA Z  1414 *1");
        }
        if (equipo1 == 4) {
            alert(usuario1 + "\n" + "COMPUTADORA V  1515 *1");
        }
        if (equipo1 == "5") {
            alert(usuario1 + "\n" + "COMPUTADORA W  1616 *1");
        }
    }
    if (opcione == 3) {
        alert("COMPUTADORA X 1212 *1, COMPUTADORA Y 1313 *1, COMPUTADORA Z 1414 *1, COMPUTADORA V 1515 *1, COMPUTADORA W 1616 *1\nDEBE IGNORAR LOS EQUIPOS ANTERIORES DE ESTA LISTA");

    }

}
