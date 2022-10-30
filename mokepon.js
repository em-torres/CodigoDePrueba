let ataqueJugador
let ataqueOponente
let resultadoFinal 

let vidasJugador = 3
let vidasOponente = 3
let veredictoFinal = ''

function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje')
    let botonFuego = document.getElementById ('boton-fuego')
    let botonAgua = document.getElementById ('boton-agua')
    let botonTierra = document.getElementById ('boton-tierra')
    let botonReiniciar = document.getElementById ('boton-reiniciar')

    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function reiniciarJuego () {
    ataqueJugador = ''
    ataqueOponente = ''
    resultadoFinal = ''

    vidasJugador = 3
    vidasOponente = 3
    veredictoFinal = ''
}
function seleccionarPersonajeJugador() {
    let inputsubzero = document.getElementById('subzero').checked
    let inputscorpion = document.getElementById('scorpion').checked
    let inputtremor = document.getElementById('tremor').checked
    let spanPersonajeJugador = document.getElementById ("personaje-jugador")
   
    if (inputsubzero == true){
        spanPersonajeJugador.innerHTML = "Subzero"
    } else if (inputscorpion == true) {
        spanPersonajeJugador.innerHTML = "Scorpion"
    } else if (inputtremor == true) {
        spanPersonajeJugador.innerHTML = "Tremor"
    }else {
        alert ("seleccione un personaje")
    }
    
    seleccionarPersonajeOponte()

    function seleccionarPersonajeOponte() {
        let personajeAleatorio = aleatorio(1,3)
        let spanPersonajeOponente = document.getElementById("personaje-oponente")
        
        if (personajeAleatorio == 1 ) {
            spanPersonajeOponente.innerHTML = "Subzero"
        } else if (personajeAleatorio == 2){
            spanPersonajeOponente.innerHTML = "Scorpion"
        } else {
            spanPersonajeOponente.innerHTML = "Tremor"
        }  
    }
}


function ataqueFuego () {
    ataqueJugador = 'Fuego'
    ataqueAleatorioOponente()
}
function ataqueAgua () {
    ataqueJugador = 'Agua'
    ataqueAleatorioOponente()
}
function ataqueTierra () {
    ataqueJugador = 'Tierra'
    ataqueAleatorioOponente()
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
    let spanvidasJugador=document.getElementById ('vida-jugador')
    let spanvidasOponente=document.getElementById ('vida-oponente')
    
        
        if (ataqueJugador == ataqueOponente ){
        resultadoFinal=("Empate 🤔")    
      
    } 
        else if (ataqueJugador == "Tierra" && ataqueOponente == "Fuego"){
        resultadoFinal = ("Has ganado 🎉")    
        
        vidasOponente = vidasOponente -1     
        spanvidasOponente.innerHTML = vidasOponente

    } 
        else if (ataqueJugador == "Fuego" && ataqueOponente == "Agua") {
        resultadoFinal = ("Has ganado 🎉")                  
    
        vidasOponente = vidasOponente -1   
        spanvidasOponente.innerHTML = vidasOponente

    } else {
        resultadoFinal = ("Has perdido 💀")
       
        vidasJugador = vidasJugador -1
        spanvidasJugador.innerHTML = vidasJugador 
    }

     crearMensaje("Tu personaje ataco con " + ataqueJugador + " , el contrincante ataco con " + ataqueOponente + ". "  + resultadoFinal )
    veredicto() 
}
   
    function veredicto (){
    
    if (vidasOponente <= 0){
        veredictoFinal = "Has ganado la batalla !FELICITACIONES"
    } else if (vidasJugador <= 0){
        veredictoFinal="has perdido la batalla, retirada"
    }
    crearMensaje(veredictoFinal)

}

   
	 function crearMensaje (mensaje){
	    let SectionMensajes = document.getElementById("mensajes") 
	    let parrafo = document.createElement("p")
	    parrafo.innerHTML = mensaje
	    SectionMensajes.appendChild (parrafo) //el APENDCHILD sirve para agregar algo creado en JS  dentro del HTMl

}

    function aleatorio(min, max){
    return Math.floor(Math.random () * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)
