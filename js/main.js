


let esJugadorX = true                           //inicia el juego   
console.log( 'jugadorx', esJugadorX)         
let jugador1  = "jugador 1"
let jugador2  = "jugador 2"


const playerClick = (ev)=> {                //se inicia la funcion que inicia el evento
   // console.log(ev.target.innerHtml)      // on click  escucha cuando el raton hace click en este caso esta 

    let ticTac = ev.target                  //
    let boxValue = ev.target.innerHTML      //valor dentro del html
           
       if (boxValue == "") {                                             //primera condicion casilla vacia
          if (esJugadorX){                                              // turno primer jugador 
            document.getElementById("turno").innerHTML= jugador2      // visualizo los turnos en html                   //visualiza 
            ticTac.innerHTML = '❌'                                   //inserta el string en la clase tic-tac() boton
            esJugadorX = false                                        //jugadorX falso condicion para el segundo turno
            console.log("turno  "  + jugador2)                        //visualiza el turno del 2 jugador
          }else {
            document.getElementById("turno").innerHTML= jugador1      //turno segundo jugador
            ticTac.innerHTML = '⭕'
            esJugadorX = true
            console.log("turno  "  + jugador1 )   
          }   
      }
               let boxValue1 = document.getElementById(`casiUno`).innerHTML;    //obtengo el valor nuevo de Html ()banana o kiwi y lo guardo
               let boxValue2 = document.getElementById(`casiDos`).innerHTML;
               let boxValue3 = document.getElementById(`casiTres`).innerHTML;
               let boxValue4 = document.getElementById(`casiCuatro`).innerHTML;
               let boxValue5 = document.getElementById(`casiCinco`).innerHTML;
               let boxValue6 = document.getElementById(`casiSeis`).innerHTML;
               let boxValue7 = document.getElementById(`casiSiete`).innerHTML;
               let boxValue8 = document.getElementById(`casiOcho`).innerHTML;
               let boxValue9 = document.getElementById(`casiNueve`).innerHTML;
    
               let xGanador = (boxValue1 == "❌" && boxValue2 == "❌" && boxValue3 == "❌") || //inserto los condicionales en un booleano
                              (boxValue4 == "❌" && boxValue5 == "❌" && boxValue6 == "❌") ||
                              (boxValue1 == "❌" && boxValue4 == "❌" && boxValue7 == "❌") ||
                              (boxValue2 == "❌" && boxValue5 == "❌" && boxValue8 == "❌") ||
                              (boxValue3 == "❌" && boxValue6 == "❌" && boxValue9 == "❌") ||
                              (boxValue1 == "❌" && boxValue5 == "❌" && boxValue9 == "❌") ||
                              (boxValue7 == "❌" && boxValue8 == "❌" && boxValue9 == "❌") ||
                              (boxValue3 == "❌" && boxValue5 == "❌" && boxValue7 == "❌")

               let oGanador = (boxValue1 == "⭕" && boxValue2 == "⭕" && boxValue3 == "⭕") ||
                              (boxValue4 == "⭕" && boxValue5 == "⭕" && boxValue6 == "⭕") || 
                              (boxValue1 == "⭕" && boxValue4 == "⭕" && boxValue7 == "⭕") ||
                              (boxValue2 == "⭕" && boxValue5 == "⭕" && boxValue8 == "⭕") ||
                              (boxValue3 == "⭕" && boxValue6 == "⭕" && boxValue9 == "⭕") ||
                              (boxValue1 == "⭕" && boxValue5 == "⭕" && boxValue9 == "⭕") ||
                              (boxValue7 == "⭕" && boxValue8 == "⭕" && boxValue9 == "⭕") ||
                              (boxValue3 == "⭕" && boxValue5 == "⭕" && boxValue7 == "⭕")
        
    
                 let tablero = [boxValue1, boxValue2,boxValue3,
                                boxValue4,boxValue5,boxValue6,
                                boxValue7,boxValue8,boxValue9]


         
    
        if (xGanador){  
            console.log("ganador es 🍌" + jugador1)
            document.getElementById("textoResultado").innerHTML="el ganador es " 
            document.getElementById("resultadoNombre").innerHTML= jugador1
        }
        else if (oGanador){
            console.log("ganador es 🥝" + jugador2)
            document.getElementById("textoResultado").innerHTML="el ganador es "
            document.getElementById("resultadoNombre").innerHTML= jugador2
        }else if(
            !xGanador && !oGanador &&
            boxValue1 !== "" &&
            boxValue2 !== "" &&
            boxValue3 !== "" &&
            boxValue4 !== "" &&
            boxValue5 !== "" &&
            boxValue6 !== "" &&
            boxValue7 !== "" &&
            boxValue8 !== "" &&
            boxValue9 !== ""
            ){
              document.getElementById("textoResultado").innerHTML="el resultado"
              document.getElementById("resultadoNombre").innerHTML= "empate"
            }
           

            
       
          /*  let ticTac = ev.target                  //
            let boxValue = ev.target.innerHTML*/
        
    }

    function iniciarJuego() {
        // document.getElementsByClassName("ticTac").innerHTML = ""
        location.reload()
        console.log("wowww")
    }


    function handleOnChange(event){
               
          if(event.target.name === "jugador1"){ //visualizo e identifico los jugadores escritos en el cuadrado
            jugador1  = event.target.value;
          }else{
            jugador2  = event.target.value;
          }
    }

        

    function imprimir() {
        window.print();
         }

        