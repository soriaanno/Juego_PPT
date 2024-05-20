"use strict"
let puntosJugador = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosJugador = document.querySelector("#puntos-jugador");
let contenedorPuntosPC = document.querySelector("#puntos-maquina");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elijeTuArma = document.querySelector("#elije-tu-arma");

let contenedorEleccionJugador = document.querySelector("#eleccion-jugador");
let contenedorEleccionPC = document.querySelector("#eleccion-maquina");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {

    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionJugador = e.currentTarget.id; 


    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📋"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✂️"
    }

    if (
        (eleccionJugador === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionJugador === "tijera✂️" && eleccionPC === "papel📋") ||
        (eleccionJugador === "papel📋" && eleccionPC === "piedra🪨")
    ) {
        ganaJugador();
    } else if (
        (eleccionPC === "piedra🪨" && eleccionJugador === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionJugador === "papel📋") ||
        (eleccionPC === "papel📋" && eleccionJugador === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionJugador.innerText = eleccionJugador;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosJugador === 5 || puntosPC === 5) {

        if (puntosJugador === 5) {
            instrucciones.innerText = "🔥 ¡Has ganado la partida! 🔥"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡Perdiste..! 😭"
        }

        elijeTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaJugador() {
    puntosJugador++;
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 👌"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La maquina gano un punto! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elijeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosJugador = 0;
    puntosPC = 0;

    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 10 puntos gana."
}
