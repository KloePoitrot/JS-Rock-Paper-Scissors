// ===============================================
// ===============================================
// // Define weither its the computer or player
// ===============================================
// ===============================================

let playerOrComp = "computer"
let vsComputer = document.querySelector("#vsComputer")
let vsPlayer = document.querySelector("#vsPlayer")

vsComputer.addEventListener('click', () =>{
    document.querySelector("#vsComputer").classList.add('modeON')
    document.querySelector("#vsComputer").classList.remove('modeOFF')
    
    document.querySelector("#vsPlayer").classList.add('modeOFF')
    document.querySelector("#vsPlayer").classList.remove('modeON')
    playerOrComp = "computer"
    console.log(playerOrComp)
})

vsPlayer.addEventListener('click', () =>{
    document.querySelector("#vsPlayer").classList.add('modeON')
    document.querySelector("#vsPlayer").classList.remove('modeOFF')

    document.querySelector("#vsComputer").classList.add('modeOFF')
    document.querySelector("#vsComputer").classList.remove('modeON')
    playerOrComp = "player"
    console.log(playerOrComp)
})