console.log("Hello my banking app");
// DECLARACIÓN DE VARIABLES
let nombreUsuario = "John Flórez";
let saldoEnCuenta = 5000;
let limiteExtraccion = 500;
let claveCorrecta = 1234;

var estadoDelUsuario = false;

var elemento1 = document.getElementById('cuenta-ingreso');
var elemento2 = document.getElementById('cuenta-info');
var elemento3 = document.getElementById('usuario-equivocado');
var elemento4 = document.getElementById('Clave-equivocada');

elemento1.style.display = 'block';
elemento2.style.display = 'none';
elemento3.style.display = 'none';
elemento4.style.display = 'none';

function mostrarPantallaDeOperaciones(){
    elemento1.style.display = 'none';
    elemento2.style.display = 'block';
    elemento3.style.display = 'none';
    elemento4.style.display = 'none';
}

function mostrarPantallaDeLogin(){
    elemento1.style.display = 'block';
    elemento2.style.display = 'none';
    elemento3.style.display = 'none';
    elemento4.style.display = 'none';
}

function mostrarPantallaDeUsuarioEquivocado(){
    elemento1.style.display = 'none';
    elemento2.style.display = 'none';
    elemento3.style.display = 'block';
    elemento4.style.display = 'none';
}

function mostrarPantallaDeClaveEquivocada(){
    elemento1.style.display = 'none';
    elemento2.style.display = 'none';
    elemento3.style.display = 'none';
    elemento4.style.display = 'block';
}

function resetearCampos(){
    document.getElementById('ingreso-Usuario').value='';
    document.getElementById('contrasena').value='';
}

function iniciarSesion(){
    var clave = parseInt(document.getElementById('contrasena').value);
    var usuario = document.getElementById('ingreso-Usuario').value;

    if(nombreUsuario === usuario){
        console.log("bien hecho");
        if(claveCorrecta === clave){
            estadoDelUsuario = true;
            mostrarPantallaDeOperaciones();
        }
        else{
            console.log("Contrseña Incorrecta");
            mostrarPantallaDeClaveEquivocada();
            document.getElementById('contrasena').value='';
        }
    }
    else{
        console.log("Nombre de Usurio NO EXISTE ó EQUIVOCADO");
        mostrarPantallaDeUsuarioEquivocado();
        resetearCampos();
    }
}

function terminarSesion(){
    estadoDelUsuario = false;
    mostrarPantallaDeLogin();
}
