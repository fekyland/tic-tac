


let esJugadorX = true
console.log( 'jugadorx', esJugadorX) 
let jugador1  = "jugador 1"
let jugador2  = "jugador 2"


const playerClick = (ev)=> {
   // console.log(ev.target.innerHtml)

let ticTac = ev.target                  //
let boxValue = ev.target.innerHTML
            console.log("turno  "  + jugador2 )
    if (boxValue == "") {
        if (esJugadorX){
            document.getElementById("turno").innerHTML= jugador2
            console.log("turno  "  + jugador2)
            ticTac.innerHTML = '🍌'
            esJugadorX = false
        }
        else {
            document.getElementById("turno").innerHTML= jugador1
            ticTac.innerHTML = '🥝'
            esJugadorX = true
            console.log("turno  "  + jugador2 )
         }   
      }
        let boxValue1 = document.getElementById(`casiUno`).innerHTML;
        let boxValue2 = document.getElementById(`casiDos`).innerHTML;
        let boxValue3 = document.getElementById(`casiTres`).innerHTML;
        let boxValue4 = document.getElementById(`casiCuatro`).innerHTML;
        let boxValue5 = document.getElementById(`casiCinco`).innerHTML;
        let boxValue6 = document.getElementById(`casiSeis`).innerHTML;
        let boxValue7 = document.getElementById(`casiSiete`).innerHTML;
        let boxValue8 = document.getElementById(`casiOcho`).innerHTML;
        let boxValue9 = document.getElementById(`casiNueve`).innerHTML;
    
        let xGanador = (boxValue1 == "🍌" && boxValue2 == "🍌" && boxValue3 == "🍌") ||
                       (boxValue4 == "🍌" && boxValue5 == "🍌" && boxValue6 == "🍌") ||
                       (boxValue1 == "🍌" && boxValue4 == "🍌" && boxValue7 == "🍌") ||
                       (boxValue2 == "🍌" && boxValue5 == "🍌" && boxValue8 == "🍌") ||
                       (boxValue3 == "🍌" && boxValue6 == "🍌" && boxValue9 == "🍌") ||
                       (boxValue1 == "🍌" && boxValue5 == "🍌" && boxValue9 == "🍌") ||
                       (boxValue7 == "🍌" && boxValue8 == "🍌" && boxValue9 == "🍌") ||
                       (boxValue3 == "🍌" && boxValue5 == "🍌" && boxValue7 == "🍌")

        let oGanador = (boxValue1 == "🥝" && boxValue2 == "🥝" && boxValue3 == "🥝") ||
                       (boxValue4 == "🥝" && boxValue5 == "🥝" && boxValue6 == "🥝") || 
                       (boxValue1 == "🥝" && boxValue4 == "🥝" && boxValue7 == "🥝") ||
                       (boxValue2 == "🥝" && boxValue5 == "🥝" && boxValue8 == "🥝") ||
                       (boxValue3 == "🥝" && boxValue6 == "🥝" && boxValue9 == "🥝") ||
                       (boxValue1 == "🥝" && boxValue5 == "🥝" && boxValue9 == "🥝") ||
                       (boxValue7 == "🥝" && boxValue8 == "🥝" && boxValue9 == "🥝") ||
                       (boxValue3 == "🥝" && boxValue5 == "🥝" && boxValue7 == "🥝")
        
    
        let tablero = [boxValue1, boxValue2,boxValue3,boxValue4,boxValue5,boxValue6,
                boxValue7,boxValue8,boxValue9]


        console.log(tablero)
    
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
               
          if(event.target.name === "jugador1"){
            jugador1  = event.target.value;
          }else{
            jugador2  = event.target.value;
          }
        }
