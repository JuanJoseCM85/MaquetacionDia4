let jugador1 = true;
let jugador2 = false;
let tablero = [[0,0,0],[0,0,0],[0,0,0]];
let partidasGJ1 = 0;
let partidasGJ2 = 0;
let partidasJugadas = 0;
let movimientos = 0;
let finalizado = false;
let ganaJ1 = false;
let ganaJ2 = false;
let elemento ="";
let elemento2 ="";

function casillaElegida(){
    
    
    if(!finalizado){
            
        // buscamos que posicion del tablero ha lladamo al evento.
        if (jugador1){
            elemento =window.event.path[0].childNodes[1].id;
            elemento2 =window.event.path[0].childNodes[3].id;
        }else if(jugador2){
            elemento =window.event.path[0].childNodes[3].id;
            elemento2 =window.event.path[0].childNodes[1].id;
        }

        console.log(elemento);
        
        // cambiamos el turno para el siguien click
        jugador1=!jugador1;
        jugador2=!jugador2;
            
        // obtenemos el valor de de la propiedad visibility
        // comprobamos si ya se ha mostrado algun elemento en esa cuadricula
        if(!(getVisibility(elemento) == "visible" || getVisibility(elemento2) == "visible")){
            if (getVisibility(elemento) == "hidden"){
                //Si la casilla está en blanco, mostramos la ficha
                document.getElementById(elemento).setAttribute("style","visibility:visible")    
                //insertamos la ficha
                insertaFicha(elemento);
            }
        }
        //comprobamos si alguien ha ganado.
        quienGana();
    }
    
    
}

function getVisibility(x){
    let img = document.getElementById(x);
    console.log(img);
    let elementStyle = window.getComputedStyle(img);
    let elementVisible = elementStyle.getPropertyValue('visibility');
    
    return elementVisible;
}

/*
Esta función entroduce la ficha en una matriz
El jugador 1 introduce un 1 en la matriz.
El jugador 2 introduce un 4 en la matriz.
*/
function insertaFicha(elemento){
    //si metemos ficha aumentamos los movimientos
    movimientos++;
    //introducimos la ficha en la posición correcta de la matriz.
    switch(elemento){       
        case "ficha1-1x":
            tablero[0][0]=1;
            console.log(tablero);
            break;
        case "ficha1-2x":
            tablero[0][1]=1;
            console.log(tablero);
            break;
        case "ficha1-3x":
            tablero[0][2]=1;
            console.log(tablero);
            break;
        case "ficha2-1x":
            tablero[1][0]=1;
            console.log(tablero);
            break;
        case "ficha2-2x":
            tablero[1][1]=1;
            console.log(tablero);
            break;
        case "ficha2-3x":
            tablero[1][2]=1;
            console.log(tablero);
             break;
        case "ficha3-1x":
            tablero[2][0]=1;
            console.log(tablero);
            break;
        case "ficha3-2x":
            tablero[2][1]=1;
            console.log(tablero);
           break;
        case "ficha3-3x":
            tablero[2][2]=1;
            console.log(tablero);
            break;
        case "ficha1-1o":
                tablero[0][0]=4;
                console.log(tablero);
                break;
        case "ficha1-2o":
                tablero[0][1]=4;
                console.log(tablero);
                break;
        case "ficha1-3o":
                tablero[0][2]=4;
                console.log(tablero);
                break;
        case "ficha2-1o":
                tablero[1][0]=4;
                console.log(tablero);
                break;
        case "ficha2-2o":
                tablero[1][1]=4;
                console.log(tablero);
                break;
        case "ficha2-3o":
                tablero[1][2]=4;
                console.log(tablero);
                 break;
        case "ficha3-1o":
                tablero[2][0]=4;
                console.log(tablero);
                break;
        case "ficha3-2o":
                tablero[2][1]=4;
                console.log(tablero);
               break;
        case "ficha3-3o":
                tablero[2][2]=4;
                console.log(tablero);
            break;
        default:
            console.log("Error al insertar en el tablero.");
    }

    console.log(tablero);


}

/*
Esta funciona revisa si algún jugador a ganado.
Si la suma de alguna linea da 3, ha ganado el jugador 1
Si la suma de alguna linea da 12, ha ganado el jugador 2
*/
function quienGana(){

    if((tablero[0][0] + tablero[0][1] + tablero[0][2]) == 3){
        console.log("Gana el Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[0][0] + tablero[0][1] + tablero[0][2]) == 12){
        console.log("Gana jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[1][0] + tablero[1][1] + tablero[1][2]) == 3){
        console.log("Gana jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[1][0] + tablero[1][1] + tablero[1][2]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[2][0] + tablero[2][1] + tablero[2][2]) == 3){
        console.log("Gana Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[2][0] + tablero[2][1] + tablero[2][2]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[0][0] + tablero[1][1] + tablero[2][2]) == 3){
        console.log("Gana Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[0][0] + tablero[1][1] + tablero[2][2]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[2][0] + tablero[1][1] + tablero[0][2]) == 3){
        console.log("Gana Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[2][0] + tablero[1][1] + tablero[0][2]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[0][0] + tablero[1][0] + tablero[2][0]) == 3){
        console.log("Gana Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[0][0] + tablero[1][0] + tablero[2][0]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[0][1] + tablero[1][1] + tablero[2][1]) == 3){
        console.log("Gana Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[0][1] + tablero[1][1] + tablero[2][1]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if((tablero[0][2] + tablero[1][2] + tablero[2][2]) == 3){
        console.log("Gana Jugador 1");
        partidasGJ1++;
        partidasJugadas++;
        ganaJ1 = true;
    }else if((tablero[0][2] + tablero[1][2] + tablero[2][2]) == 12){
        console.log("Gana Jugador 2");
        partidasGJ2++;
        partidasJugadas++;
        ganaJ2 = true;
    }else if(movimientos >= 9){
        finalizado = true;
        partidasJugadas++;
    }
    
    // Si encontramos un ganadaor
    // finalizamos el juego
    // Mostramos quien ha ganado
    // Mostramos el numero de partidas ganadas
    // Si finaliza en empate, unicamente actualizamos diciendo que hay empate.
    if(ganaJ1){
        console.log("Fin del Juego Gana J1");
        finalizado = true;
        document.getElementById("finalizado").innerHTML = "Gano el Jugador 1";
        document.getElementById("puntosJ1").innerHTML = partidasGJ1;
        document.getElementById("contadorPartidas").innerHTML =  partidasJugadas ;
    }else if(ganaJ2){
        console.log("Fin del Juego Gana J2");
        finalizado = true;
        document.getElementById("finalizado").innerHTML = "Gano el Jugador 2";
        document.getElementById("puntosJ2").innerHTML = partidasGJ2;
        document.getElementById("contadorPartidas").innerHTML =  partidasJugadas ;
    }else if (movimientos == 9){
        finalizado = true;
        document.getElementById("finalizado").innerHTML = "Juego Finalizado EMPATE";
        document.getElementById("contadorPartidas").innerHTML = partidasJugadas ;
    }

    console.log("Finalizado: "+ finalizado);
    console.log("Gana J1: "+ ganaJ1);
    console.log("Gana J2: "+ ganaJ2);
    console.log("Moviemientos: "+ movimientos);
}

/*
Esta función hace un reset del tablero, pero no de las partidas ganadas
ni de el número de partidas jugadas.
*/

function resetTablero(){
    console.log("ResetTAblero");
    jugador1 = true;
    jugador2 = false;
    tablero = [[0,0,0],[0,0,0],[0,0,0]];
    movimientos = 0;
    finalizado = false;
    ganaJ1 = false;
    ganaJ2 = false;
    elemento ="";
    elemento2 ="";

    document.getElementById("finalizado").innerHTML = "Que GANE el MEJOR";

    for(let i=1; i<4; i++){
        document.getElementById("ficha1-"+ i +"x").setAttribute("style","visibility:hidden");
        document.getElementById("ficha1-"+ i +"o").setAttribute("style","visibility:hidden");
        document.getElementById("ficha2-"+ i +"x").setAttribute("style","visibility:hidden");
        document.getElementById("ficha2-"+ i +"o").setAttribute("style","visibility:hidden");
        document.getElementById("ficha3-"+ i +"x").setAttribute("style","visibility:hidden");
        document.getElementById("ficha3-"+ i +"o").setAttribute("style","visibility:hidden");
    }

}



function resetPartida(){
    jugador1 = true;
    jugador2 = false;
    tablero = [[0,0,0],[0,0,0],[0,0,0]];
    partidasGJ1 = 0;
    partidasGJ2 = 0;
    partidasJugadas = 0;
    movimientos = 0;
    finalizado = false;
    ganaJ1 = false;
    ganaJ2 = false;
    elemento ="";
    elemento2 ="";

    document.getElementById("puntosJ1").innerHTML = partidasGJ1;
    document.getElementById("puntosJ2").innerHTML = partidasGJ2;
    document.getElementById("finalizado").innerHTML = "Que GANE el MEJOR";
    document.getElementById("contadorPartidas").innerHTML = "Partida número " + partidasJugadas ;

    for(let i=1; i<4; i++){
        document.getElementById("ficha1-"+ i +"x").setAttribute("style","visibility:hidden");
        document.getElementById("ficha1-"+ i +"o").setAttribute("style","visibility:hidden");
        document.getElementById("ficha2-"+ i +"x").setAttribute("style","visibility:hidden");
        document.getElementById("ficha2-"+ i +"o").setAttribute("style","visibility:hidden");
        document.getElementById("ficha3-"+ i +"x").setAttribute("style","visibility:hidden");
        document.getElementById("ficha3-"+ i +"o").setAttribute("style","visibility:hidden");
    }


}