//Pedir nombre mediante prompt y mostrarlo
var nombre = prompt("Hola disculpa pero...¿Cuál es tu nombre?");

alert("ahh ya sé tu nombre es " + nombre );
console.log("tu nombre es " + nombre);

//Pedir un numero mediante prompt y sumarlo con otro
var numero1 = prompt("Si quieres puedo sumar 2 números por ti, dime un número:");
var numero2 = prompt("Ahora dame otro número más");

var suma = parseInt(numero1)  + parseInt(numero2) ;

console.log(parseInt(suma));
alert("La suma es " + suma);

//Pedir texto mediante prompt luego otro y concatenarlos mediante un alert
var animal = prompt("¿Cuál es tu animal favorito?");
var color = prompt("¿Cuál es tu color favorito?");

alert("Entonces tu nombre es " + nombre + " tu color favorito es " + color +  " tu animal favorito es " + animal + " y tu número de la suerte es " + suma );



