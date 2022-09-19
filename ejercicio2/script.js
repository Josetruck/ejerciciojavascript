var frase = prompt("Inserta una frase.");
var letra = prompt("Inserta la letra que quieres buscar.");
var cantidad = 0;


for (let i = 0; i < frase.length; i++){
    if (frase[i] == letra) {
        cantidad = cantidad + 1;
    }
}
alert(cantidad);