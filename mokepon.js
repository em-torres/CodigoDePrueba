let botonPersonajeJugador
let botonFuego
let botonAgua
let botonTierra
let botonReiniciar

let inputSubzero
let inputScorpion 
let inputTremor

let sectionMensajes

let spanVidasJugador
let spanvidasOponente
let spanPersonajeJugador
let spanPersonajeOponente

let ataqueJugador
let ataqueOponente
let resultadoFinal 

let vidasJugador
let vidasOponente
let veredictoFinal

function iniciarJuego() {
    botonPersonajeJugador = document.getElementById('boton-personaje')
    botonFuego = document.getElementById ('boton-fuego')
    botonAgua = document.getElementById ('boton-agua')
    botonTierra = document.getElementById ('boton-tierra')
    botonReiniciar = document.getElementById ('boton-reiniciar')
    spanPersonajeJugador = document.getElementById ("personaje-jugador")
    spanPersonajeOponente = document.getElementById("personaje-oponente")
    spanVidasJugador = document.getElementById ('vida-jugador')
    spanvidasOponente = document.getElementById ('vida-oponente')
    sectionMensajes = document.getElementById("mensajes")
    inputSubzero  = document.getElementById('subzero')
    inputScorpion = document.getElementById('scorpion')
    inputTremor = document.getElementById('tremor')

    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    vidasJugador = 3
    vidasOponente = 3
    spanvidasOponente.innerHTML = vidasOponente
    spanVidasJugador.innerHTML = vidasJugador

    ataqueJugador = ''
    ataqueOponente = ''
    resultadoFinal = ''
    veredictoFinal = ''
    spanPersonajeOponente.innerHTML = ''
    spanPersonajeJugador.innerHTML = ''
    sectionMensajes.innerHTML = ''

    inputSubzero.checked = false
    inputScorpion.checked = false
    inputTremor.checked = false
    desbloquearTodosLosPersonajes()
}

function desbloquearTodosLosPersonajes() {
    desbloquearElemento(inputSubzero)
    desbloquearElemento(inputScorpion)
    desbloquearElemento(inputTremor)
    desbloquearElemento(botonPersonajeJugador)
}

function bloquearTodosLosPersonajes() {
    bloquearElemento(inputSubzero)
    bloquearElemento(inputScorpion)
    bloquearElemento(inputTremor)
    bloquearElemento(botonPersonajeJugador)
}

function bloquearElemento(elemento) {
    elemento.disabled = true
}

function desbloquearElemento(elemento) {
    elemento.disabled = false
}

function reiniciarJuego () {
    iniciarJuego();
}

function seleccionarPersonajeJugador() {
    if (inputSubzero.checked == true) {
        spanPersonajeJugador.innerHTML = "Subzero"
        bloquearTodosLosPersonajes()
    } else if (inputScorpion.checked == true) {
        spanPersonajeJugador.innerHTML = "Scorpion"
        bloquearTodosLosPersonajes()
    } else if (inputTremor.checked == true) {
        spanPersonajeJugador.innerHTML = "Tremor"
        bloquearTodosLosPersonajes()
    } else if (!personajeSeleccionado()) {
        return
    }
    
    seleccionarPersonajeOponente()
}

function personajeSeleccionado() {
    if (spanPersonajeJugador.innerHTML != '') {
        return true
    }
    crearMensaje("POR FAVOR, ESCOGE UN PERSONAJE", 'notice')
    return false
}

function seleccionarPersonajeOponente() {
    let personajeAleatorio = aleatorio(1,3)

    if (personajeAleatorio == 1 ) {
        spanPersonajeOponente.innerHTML = "Subzero"
    } else if (personajeAleatorio == 2){
        spanPersonajeOponente.innerHTML = "Scorpion"
    } else {
        spanPersonajeOponente.innerHTML = "Tremor"
    }
}

function ataqueFuego () {
    if (personajeSeleccionado()) {
        ataqueJugador = 'Fuego'
        ataqueAleatorioOponente()
    }
}
function ataqueAgua () {
    if (personajeSeleccionado()) {
        ataqueJugador = 'Agua'
        ataqueAleatorioOponente()
    }
}
function ataqueTierra () {
    if (personajeSeleccionado()) {
        ataqueJugador = 'Tierra'
        ataqueAleatorioOponente()
    }
}

function ataqueAleatorioOponente() {
    if (veredictoFinal != '') {
        veredicto()
        return
    }
 ataqueOponente =  aleatorio(1,3)
    if (ataqueOponente == 1){
        ataqueOponente = 'Fuego'
    } else if (ataqueOponente == 2){
        ataqueOponente = 'Agua'
    } else {
        ataqueOponente = 'Tierra'
    }
    
    combate()
}

function combate() {        
    if (ataqueJugador == ataqueOponente ){
        resultadoFinal=("Empate 🤔")      
    } 
    else if (ataqueJugador == "Tierra" && ataqueOponente == "Agua") {
        resultadoFinal = ("Has ganado 🎉")    
        vidasOponente = vidasOponente -1     
        spanvidasOponente.innerHTML = vidasOponente
    } 
    else if (ataqueJugador == "Agua" && ataqueOponente == "Fuego") {
        resultadoFinal = ("Has ganado 🎉")                  
        vidasOponente = vidasOponente -1   
        spanvidasOponente.innerHTML = vidasOponente
    } else if (ataqueJugador == "Fuego" && ataqueOponente == "Tierra") {
        resultadoFinal = ("Has ganado 🎉")                  
        vidasOponente = vidasOponente -1   
        spanvidasOponente.innerHTML = vidasOponente
    } else {
        resultadoFinal = ("Has perdido 💀")
        vidasJugador = vidasJugador -1
        spanVidasJugador.innerHTML = vidasJugador 
    }

    crearMensaje("Tu personaje atacó con " + ataqueEmoji(ataqueJugador) + ", el contrincante atacó con " + ataqueEmoji(ataqueOponente) + ". "  + resultadoFinal )
    veredicto() 
}

function ataqueEmoji(ataque) {
    emoji = '🌱'

    if (ataque == 'Fuego') {
        return '🔥'
    } else if (ataque == 'Agua') {
        return '💧'
    }
    
    return emoji
}

function crearMensaje (mensaje, clase=null) {
    let parrafo = document.createElement("p")

    if (clase != null) {
        parrafo.classList.add(clase)
    }
    parrafo.innerHTML = mensaje
    sectionMensajes.prepend(parrafo) //el APENDCHILD sirve para agregar algo creado en JS  dentro del HTMl

}

function veredicto () {
    resultado = 'ganador'
    if (vidasOponente <= 0) {
        veredictoFinal = "HAS GANADO LA BATALLA!! !!FELICITACIONES!!"
    } else if (vidasJugador <= 0) {
        veredictoFinal="HAS PERDIDO LA BATALLA!!! RETIRADA!!"
        resultado = 'perdedor'
    }
    crearMensaje(veredictoFinal, resultado)
}

function aleatorio(min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)
