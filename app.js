let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados= [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++; 
        limpiarCaja ();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ''; 
}

function generarNumeroSecreto() {
    let numeorGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeorGenerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
                
        if (listaNumeroSorteados.includes(numeorGenerado)) {

        } else{
            listaNumeroSorteados.push(numeorGenerado);
            return numeorGenerado;
        }              
    }        
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarjuego(){
    limpiarCaja();
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales()