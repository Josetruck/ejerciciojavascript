var palabra = [prompt("introduce la primera palabra"),prompt("introduce la segunda palabra"),prompt("introduce la tercera palabra"),prompt("introduce la cuarta palabra"),prompt("introduce la quinta palabra"),prompt("introduce la sexta palabra"),prompt("introduce la séptima palabra")]
/* método rápido

palabra.sort();
console.log(palabra)
alert(palabra)
*/

var mem;
var k;
console.log(palabra)
for(k = 1; k < 7; k++){ // este bloque se repite 7 veces para que finalmente la cifra mayor quede a la derecha del todo.
    for (let i = 0; i < 7 ;i++){// este bloque se repite 7 veces para desplazar la cifra mayor un paso a la derecha.
        if (palabra[i] > palabra[i + 1]){
            mem = palabra[i];
            palabra[i] = palabra[i + 1];
            palabra[i + 1] = mem;
        }
    } 

} alert(palabra);
console.log(palabra)
