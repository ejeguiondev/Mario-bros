let score2 = 0
let score = document.getElementById("score")
let bloque1 = document.getElementById("bloque1")
let bloque2 = document.getElementById("bloque2")
let moneda = document.getElementById("moneda")
let marioQuieto = document.getElementById("mario_quieto")
let marioSaltando = document.getElementById("mario_saltando")

document.addEventListener("keydown", function(e){
  if (e.keyCode === 32){
    mover_mario2()
  }
})

function mover_mario2(){
  //marios
  bloque1.style.display = "block"
    bloque2.style.display = "none"

    marioQuieto.style.display = "none"
    marioSaltando.style.display = "block"

    //score
    score2 += 200
    score.textContent = "socore: "+score2

    //audio
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "mario-coin.mp3")
    etiquetaAudio.play()

    //moneda
    moneda.style.display = "block"

    //funcion de tiempo
    function tiempo(){
        bloque1.style.display = "none"
        bloque2.style.display = "block"
        moneda.style.display = "none"

        marioQuieto.style.display = "block"
        marioSaltando.style.display = "none"        
    }
    setTimeout(tiempo, 998)
}
function tocar(){
  alert("hola")
}