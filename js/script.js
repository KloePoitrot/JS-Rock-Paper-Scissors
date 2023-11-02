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
let isGameFinished = false


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
    if(p1 > 0 && p2 > 0){
        p1 = 0
        p2 = 0
        document.querySelector("#p1img").src = "images/waiting.png"
        document.querySelector("#p2img").src = "images/waiting.png"
    }

    isGameFinished = false
})

vsPlayer.addEventListener('click', () =>{
    document.querySelector("#vsPlayer").classList.add('modeON')
    document.querySelector("#vsPlayer").classList.remove('modeOFF')
    document.querySelector("#playerOrComp").innerHTML = "Player 2"

    document.querySelector("#vsComputer").classList.add('modeOFF')
    document.querySelector("#vsComputer").classList.remove('modeON')
    playerOrComp = "Player 2"

    console.log("p2")
    if(p1 > 0 && p2 > 0){
        p1 = 0
        p2 = 0
        document.querySelector("#p1img").src = "images/waiting.png"
        document.querySelector("#p2img").src = "images/waiting.png"
        document.querySelector("#p1img").classList.add("fa-pulse")
        document.querySelector("#p2img").classList.add("fa-pulse")
    }
    
    isGameFinished = false
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
    p1Move == "rock" ? document.querySelector("#p1img").src = "images/rock.png" : null
    p1Move == "paper" ? document.querySelector("#p1img").src = "images/paper.png" : null
    p1Move == "scissors" ? document.querySelector("#p1img").src = "images/scissors.png" : null
    
    p2Move == "rock" ? document.querySelector("#p2img").src = "images/rock.png" : null
    p2Move == "paper" ? document.querySelector("#p2img").src = "images/paper.png" : null
    p2Move == "scissors" ? document.querySelector("#p2img").src = "images/scissors.png" : null

    // draw
    if((p1Move == "rock" && p2Move == "rock") || (p1Move == "paper" && p2Move == "paper") || (p1Move == "scissors" && p2Move == "scissors")){
        p1Move = ""
        p2Move = ""
        document.querySelector("#winner").innerHTML = "Its a draw!"
        document.querySelector("#player1points").innerHTML = p1
        document.querySelector("#player2points").innerHTML = p2
        console.log('draw')
    }

    // p1 won
    if((p1Move == "rock" && p2Move == "scissors") || (p1Move == "paper" && p2Move == "rock") || (p1Move == "scissors" && p2Move == "paper")){
        p1 += 1
        p1Move = ""
        p2Move = ""
        document.querySelector("#winner").innerHTML = "Player 1 won this round!"
        document.querySelector("#player1points").innerHTML = p1
        document.querySelector("#player2points").innerHTML = p2
        console.log('p1 win')
    }

    // p2 won
    if((p1Move == "rock" && p2Move == "paper") || (p1Move == "paper" && p2Move == "scissors") || (p1Move == "scissors" && p2Move == "rock")){
        p2 += 1
        p1Move = ""
        p2Move = ""
        document.querySelector("#winner").innerHTML = playerOrComp + " won this round!"
        document.querySelector("#player1points").innerHTML = p1
        document.querySelector("#player2points").innerHTML = p2

        console.log('p2 win')
    }
    
    if(p1 < 10 && p2 < 10){
        console.log('keep going')
    }

    if(p1 >= 10 || p2 >= 10){
        console.log('finished')
        let winner = p1 >= 10 ? "Player 1" : playerOrComp
        let winCrown = p1 >= 10 ? "#p1win" : "#p2win"

        document.querySelector(winCrown).classList.add("fa-crown")
        document.querySelector("#winner").innerHTML = winner + " is the winner!"
        isGameFinished = true
    }
}
