var n1 = prompt("Introduzca el primer número");
var operacion = prompt("Introduzca el símbolo + si desea sumar o el símbolo - si desea restar");
var n2 = prompt("Introduzca el segundo número");
n1 = parseFloat(n1);
n2 = parseFloat(n2);

switch (operacion) {
    case "+":
       alert (n1 + n2);
       break;
    case "-":
        alert (n1 - n2);
        break;
    default:
            alert("Error:La operación no es posible")
    }