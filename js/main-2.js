console.log("Hello my banking app");
// DECLARACIÓN DE VARIABLES
let nombreUsuario = "John Flórez";
let saldoEnCuenta = 5000;
let limiteExtraccion = 500;
let claveCorrecta = 1234;

var estadoDelUsuario = false;

var elemento1 = document.getElementById('cuenta-ingreso');
var elemento2 = document.getElementsByClassName('cuenta-info');

elemento1.style.display = 'block';
elemento2.style.display = 'block'