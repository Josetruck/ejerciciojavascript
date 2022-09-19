var user = prompt("Introduce tu nombre de usuario");
var pass = prompt("Introduce una contraseña");
var intento = 0;
do{
    var userx = prompt("Introduce tu nombre de usuario");
    var passx = prompt("Introduce una contraseña");
    intento = intento + 1;
    if (user === userx  && pass === passx){
        alert("Validación completada")
        intento = intento +3;
    } else {
        alert("Validación fallida.")
    }
} while(intento < 3);
