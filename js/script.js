// ===============================================
// ===============================================
// // Init Vaiables
// ===============================================
// ===============================================
let p1 = 0
let p2 = 0
let p1Move = "" // rock, paper, soissors
let p2Move = "" // rock, paper, scissors
let playerOrComp = "Computer" // Player 2, Computer
let playerTurn = 0 // 0 = p1, 1 = p2, 2 = result


// ===============================================
// ===============================================
// // Define weither its the computer or player
// ===============================================
// ===============================================
let vsComputer = document.querySelector("#vsComputer")
let vsPlayer = document.querySelector("#vsPlayer")

vsComputer.addEventListener('click', () =>{
    document.querySelector("#vsComputer").classList.add('modeON')
    document.querySelector("#vsComputer").classList.remove('modeOFF')
    document.querySelector("#playerOrComp").innerHTML = "Computer"
    
    document.querySelector("#vsPlayer").classList.add('modeOFF')
    document.querySelector("#vsPlayer").classList.remove('modeON')
    playerOrComp = "Computer"
    
    console.log("comp")
    if(p1 == 0 && p2 == 0){
        p1 = 0
        p2 = 0
        document.querySelector("#p1img").src = "images/waiting.png"
        document.querySelector("#p2img").src = "images/waiting.png"
        document.querySelector("#p1img").classList.add("fa-pulse")
        document.querySelector("#p2img").classList.add("fa-pulse")
    }

    choiceP1(p1Move, p2Move, p1, p2, playerOrComp)
})

vsPlayer.addEventListener('click', () =>{
    document.querySelector("#vsPlayer").classList.add('modeON')
    document.querySelector("#vsPlayer").classList.remove('modeOFF')
    document.querySelector("#playerOrComp").innerHTML = "Player 2"

    document.querySelector("#vsComputer").classList.add('modeOFF')
    document.querySelector("#vsComputer").classList.remove('modeON')
    playerOrComp = "Player 2"

    console.log("p2")
    if(p1 == 0 && p2 == 0){
        p1 = 0
        p2 = 0
        document.querySelector("#p1img").src = "images/waiting.png"
        document.querySelector("#p2img").src = "images/waiting.png"
        document.querySelector("#p1img").classList.add("fa-pulse")
        document.querySelector("#p2img").classList.add("fa-pulse")
    }

    choiceP1(p1Move, p2Move, p1, p2, playerOrComp)
})






// ===============================================
// ===============================================
// // choice of turn
// ===============================================
// ===============================================
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")

// document.querySelector("#winner")
rock.addEventListener("click", (e) => playRock())
paper.addEventListener("click", (e) => playPaper())
scissors.addEventListener("click", (e) => playScissors())

function playRock(){
    if(playerTurn === 0){
        // p1 plays
        p1Move = "rock"
        playerTurn = 1
        console.log("p1 rock")
        console.log(playerTurn)
        return
    }
    if(playerTurn === 1){
        // p2 plays
        p2Move = "rock"
        playerTurn = 0
        playRound()
        console.log("p2 rock")
        console.log(playerTurn)
        return
    }
}

function playPaper(){
    if(playerTurn === 0){
        // p1 plays
        p1Move = "paper"
        playerTurn = 1
        console.log("p1 paper")
        console.log(playerTurn)
        return
    }
    if(playerTurn === 1){
        // p2 plays
        p2Move = "paper"
        playerTurn = 0
        playRound()
        console.log("p2 paper")
        console.log(playerTurn)
        return
    }
}


function playScissors(){
    if(playerTurn === 0){
        // p1 plays
        p1Move = "scissors"
        playerTurn = 1
        console.log("p1 scissors")
        console.log(playerTurn)
        return
    }
    if(playerTurn === 1){
        // p2 plays
        p2Move = "scissors"
        playerTurn = 0
        playRound()
        console.log("p2 scissors")
        console.log(playerTurn)
        return
    }
}





// ===============================================
// ===============================================
// // Winner function
// ===============================================
// ===============================================
function playRound(){
    // draw
    if((p1Move == "rock" && p2Move == "rock") || (p1Move == "paper" && p2Move == "paper") || (p1Move == "scissors" && p2Move == "scissors")){
        p1Move = ""
        p2Move = ""
        document.querySelector("#winner").innerHTML = "Its a draw!"
        console.log('draw')
    }

    // p1 won
    if((p1Move == "rock" && p2Move == "scissors") || (p1Move == "paper" && p2Move == "rock") || (p1Move == "scissors" && p2Move == "paper")){
        p1Move += 1
        p1Move = ""
        p2Move = ""
        document.querySelector("#winner").innerHTML = "Player 1 won this round!"
        console.log('p1 win')
    }

    // p2 won
    if((p1Move == "rock" && p2Move == "paper") || (p1Move == "paper" && p2Move == "scissors") || (p1Move == "scissors" && p2Move == "rock")){
        p2 += 1
        p1Move = ""
        p2Move = ""
        document.querySelector("#winner").innerHTML = playerOrComp + "won this round!"

        console.log('p2 win')
    }
    
    if(p1 < 10 && p2 < 10){
        console.log('keep going')
    }

    if(p1 >= 10 || p2 >= 10){
        console.log('finished')
    }
}
