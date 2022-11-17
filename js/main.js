


/*
const element = document.getElementById("casiUno");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("casiUno").innerHTML = "x";
}

*/
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
            ticTac.innerHTML = 'o'
            esJugadorX = true
        }
    }
}


  if(casiUno.innerHTML== "X" && casi2no.innerHTML == "X" && casiTres.innerHTML=="X"){
     console.log("has ganado")

  }


  let boxUno = document.getElementById("casiUno").innerHTML
  console.log("casillero" + boxUno);