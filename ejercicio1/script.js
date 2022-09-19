var n1 = prompt("Inserte un primer número");
var n2 = prompt("Inserte un segundo número");
var n3 = prompt("Inserte un tercer número");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);


if (n1 < n2 && n1 < n3) {
    alert(n1);
} else {
    if (n2 < n3 && n2 < n1){
        alert(n2)
    } else {
        if(n3 < n2 && n3 < n1){
            alert(n3)
        }
    }
}
