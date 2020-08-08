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

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Hello hello " + nombreUsuario;
  }

function iniciarSesion(){
    var clave = parseInt(document.getElementById('contrasena').value);
    var usuario = document.getElementById('ingreso-Usuario').value;

    if(nombreUsuario === usuario){
        console.log("bien hecho");
        if(claveCorrecta === clave){
            estadoDelUsuario = true;
            cargarNombreEnPantalla();
            mostrarPantallaDeOperaciones();
            document.getElementById('saldo-cuenta').innerHTML = `$ ${saldoEnCuenta}`;
            document.getElementById('saldo-saldo').innerHTML += limiteExtraccion;
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

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Hello hello " + nombreUsuario;
  }

function terminarSesion(){
    estadoDelUsuario = false;
    mostrarPantallaDeLogin();
}

// function extraerDinero(){
//     saldoEnCuenta -= parseInt(prompt())
// }

//**********               ************/

//actualizar saldo en pantalla
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoEnCuenta;
}

//función flecha limite en pantalla fuction --- =>
const actualizarLimiteEnPantalla = () => {
    document.getElementById("saldo-saldo").innerHTML =limiteExtraccion;
};

const pagarServicios = () => {
    let agua = 500;
    let telefono = 425;
    let luz = 215;
    let internet = 100;

    let misServicios = ["Agua", "Telefono", "Luz", "Internet"];

    if(estadoDelUsuario){
        let servicio = prompt(`Ingrese el número que corresponda al servicio a pagar
        1. Agua - Valor ${agua}
        2. Telefono - Valor ${telefono}
        3. Luz - Valor ${luz}
        4. Internet - Valor ${internet}
        `);

        switch (servicio) {
            case "1":
            depositarServicio(agua, misServicios[0]);
            break;
            case "2":
            depositarServicio(telefono, misServicios[1]);
            break;
            case "3":
            depositarServicio(luz, misServicios[2]);
            break;
            case "4":
            depositarServicio(internet, misServicios[3]);
            break;
            default:
            alert("No hay opción valida");
            break;
        }
    }
    else{
        alert('Servicio No Disponible.  Debes primero ingresar Usurio y Contraseña');
    }
};

function depositarServicio(tipoDeServicio, nombreServicio) {
    saldoEnCuenta -= tipoDeServicio;
    actualizarSaldoEnPantalla();
    alert(
        `Has pagado ${tipoDeServicio} del servicio ${nombreServicio} y tu nuevo saldo es ${saldoEnCuenta}`
    );
}

function servicios(escogerServicio){
switch(escogerServicio){
    case "1":
    break;
    case "2":
    depositarServicio(telefono, misServicios[1]);
    break;
    case "3":
    depositarServicio(luz, misServicios[2]);
    break;
    case "4":
    depositarServicio(internet, misServicios[3]);
    break;
    default:
    alert("No hay opción valida");
    break;
}
};

function depositarServicio(tipoDeServicio, nombreServicio) {
    saldoEnCuenta -= tipoDeServicio;
    actualizarSaldoEnPantalla();
    alert(
        `Has pagado ${tipoDeServicio} del servicio ${nombreServicio} y tu nuevo saldo es ${saldoEnCuenta}`
    );
}
//evento para pagar servicios
//listener sobre el elemento,
document.getElementById("servicios").addEventListener("click", pagarServicios);
function extraerDinero() {
    if(estadoDelUsuario){
        let dineroAExtraer = parseInt(prompt("Digite el Valor a extraer"), 0);

        if (dineroAExtraer > saldoEnCuenta) {
            alert("Error, su saldo es insuficiente");
        } else if (dineroAExtraer > limiteExtraccion) {
            alert("No puede exceder el limite de extraccion");
        } else if (dineroAExtraer < saldoEnCuenta) {
            saldoEnCuenta = saldoEnCuenta - dineroAExtraer;
            alert("su saldo se actualizo");
            actualizarSaldoEnPantalla();
        } else {
            alert("Error,Digite un valor correcto");
        }
    }
    else{
        alert('Servicio No Disponible.  Debes primero ingresar Usurio y Contraseña');
    }
}

function depositarDinero() {
    if(estadoDelUsuario){
        var cantidad = parseInt(prompt("ingrese la cantidad a depositar"), 0);

        if (isNaN(cantidad)) {
            return alert("Ingrese numeritooos no retiramos letras");
        } else if (cantidad <= 0) {
            return alert("Ups! si hago esto te robo platica");
        }
        //saldoEnCuenta = saldoEnCuenta + cantidad
        saldoEnCuenta += cantidad;
        actualizarSaldoEnPantalla();
        alert("Su nuevo saldo es: " + saldoEnCuenta);
            }
    else{
        alert('Servicio No Disponible.  Debes primero ingresar Usurio y Contraseña');
    }
}

function cambiarLimiteDeExtraccion() {
    if(estadoDelUsuario){
        var nuevoLimite = parseInt(prompt("Ingrese su nuevo límite de estrasion"), 0);
        if(nuevoLimite%100 == 0){
            limiteExtraccion = nuevoLimite;
            actualizarLimiteEnPantalla();
            alert(
                "Pum pum!! Se ha actualizado tu límite de extracción, nuevo valor " +
                limiteExtraccion);
        }
        else{
            alert('Solo puedes ingresar múltiplos de 100');
        }
    }else{
        alert('Servicio No Disponible.  Debes primero ingresar Usurio y Contraseña');
    }

}

function transferirDinero(){
    if(estadoDelUsuario){
        var cantidadParaTransferir = parseInt(prompt("Ingrese la cantidad a transferir", 0));
        if(cantidadParaTransferir <= saldoEnCuenta){
            saldoEnCuenta -= cantidadParaTransferir;
            actualizarSaldoEnPantalla();
        }
        else{
            alert('¡¡No puedes transferir más dinero del que tienes en la cuenta!!');
        }
    }
    else{
        alert('Servicio No Disponible.  Debes primero ingresar Usurio y Contraseña');
    }
}