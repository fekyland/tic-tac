


let esJugadorX = true
console.log( 'jugadorx', esJugadorX) 


const playerClick = (ev)=> {
   // console.log(ev.target.innerHtml)

let ticTac = ev.target
let boxValue = ev.target.innerHTML

    if (boxValue == "") {
        if (esJugadorX){
            ticTac.innerHTML = 'X'
            esJugadorX = false
        }
        else {
            ticTac.innerHTML = 'O'
            esJugadorX = true
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
    
        let xGanador = (boxValue1 == "X" && boxValue2 == "X" && boxValue3 == "X") ||
                       (boxValue1 == "X" && boxValue4 == "X" && boxValue7 == "X") ||
                       (boxValue2 == "X" && boxValue5 == "X" && boxValue8 == "X") ||
                       (boxValue3 == "X" && boxValue6 == "X" && boxValue9 == "X") ||
                       (boxValue1 == "X" && boxValue5 == "X" && boxValue9 == "X") ||
                       (boxValue7 == "X" && boxValue8 == "X" && boxValue9 == "X") ||
                       (boxValue3 == "X" && boxValue5 == "X" && boxValue7 == "X")

        let oGanador = (boxValue1 == "O" && boxValue2 == "O" && boxValue3 == "O") ||
                       (boxValue1 == "O" && boxValue4 == "O" && boxValue7 == "O") ||
                       (boxValue2 == "O" && boxValue5 == "O" && boxValue8 == "O") ||
                       (boxValue3 == "O" && boxValue6 == "O" && boxValue9 == "O") ||
                       (boxValue1 == "O" && boxValue5 == "O" && boxValue9 == "O") ||
                       (boxValue7 == "O" && boxValue8 == "O" && boxValue9 == "O") ||
                       (boxValue3 == "O" && boxValue5 == "O" && boxValue7 == "O")

    
        let tablero = [boxValue1, boxValue2,boxValue3,boxValue4,boxValue5,boxValue6,
                boxValue7,boxValue8,boxValue9]
        
         console.log(tablero)

        if (xGanador){
            console.log("ganador es x")
            
        }
        if (oGanador){
            console.log("ganador es O")
           
        }
        
    
    }

    


        
