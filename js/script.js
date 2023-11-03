// ===============================================
// ===============================================
// // Init Variables
// ===============================================
// ===============================================
let p1 = 0
let p2 = 0
let p1Move = "" // rock, paper, soissors
let p2Move = "" // rock, paper, scissors
let compMove = ["rock", "paper", "scissors"]
let RandMove = 0
let playerOrComp = "Computer" // Player 2, Computer
let playerTurn = 0 // 0 = p1, 1 = p2, 2 = result
let maxWinMoves = 3
let newGame = true
let nmbrGame = 2
let isGameFinished = false







// ===============================================
// ===============================================
// // Sound loading
// ===============================================
// ===============================================
let rockThrow = new Audio('sounds/rockthrow.wav')
let paperFold = new Audio('sounds/paperfold.m4a')
let scissorsCut = new Audio('sounds/scissorscut.m4a')
let victory = new Audio('sounds/victory.m4a')
let loose = new Audio('sounds/losttocomp.m4a')








// ===============================================
// ===============================================
// // Define weither its the computer or player
// ===============================================
// ===============================================
function reset(){
    if(p1 > 0 || p2 > 0){
        isGameFinished = false
        p1 = 0
        p2 = 0

        document.querySelector("#player1points").innerHTML = p1
        document.querySelector("#player2points").innerHTML = p2
        document.querySelector("#p1img").src = "images/waiting.png"
        document.querySelector("#p2img").src = "images/waiting.png"
        document.querySelector("#p1img").classList.add('fa-spin')
        document.querySelector("#p2img").classList.add('fa-spin')

        document.querySelector("#p1win").classList.remove("fa-crown")
        document.querySelector("#p2win").classList.remove("fa-crown")
    }
}

// SELECT MOVE GAME
document.querySelector("#winMoves").addEventListener("change", (e) => {
    maxWinMoves = e.target.value
})


// RESET GAME
document.querySelector("#newGame").addEventListener('click', () =>{
    if(newGame == false){
        document.querySelector("#gameLog").innerHTML += "<h3 class='newGameHeading'>" + nmbrGame + " - NEW GAME: VS " + playerOrComp + "</h3>"
        nmbrGame++
        newGame = true
    }
    document.querySelector("#winner").innerHTML = "New game!"
    reset()
})

// NEW COMPUTER GAME
document.querySelector("#vsComputer").addEventListener('click', () =>{
    if(playerOrComp == "Player 2"){
        document.querySelector("#gameLog").innerHTML += "<h3 class='newGameHeading'>" + nmbrGame + " - NEW GAME: VS Computer</h3>"
        nmbrGame++
        newGame = true
    }
    if(newGame == false && playerOrComp == "Computer"){
        document.querySelector("#gameLog").innerHTML += "<h3 class='newGameHeading'>" + nmbrGame + " - NEW GAME: VS " + playerOrComp + "</h3>"
        nmbrGame++
        newGame = true
    }

    document.querySelector("#winner").innerHTML = "New game!"

    document.querySelector("#vsComputer").classList.add('modeON')
    document.querySelector("#vsComputer").classList.remove('modeOFF')
    document.querySelector("#playerOrComp").innerHTML = "Computer"
    
    document.querySelector("#vsPlayer").classList.add('modeOFF')
    document.querySelector("#vsPlayer").classList.remove('modeON')
    playerOrComp = "Computer"

    reset()
})

// NEW PLAYER GAME
document.querySelector("#vsPlayer").addEventListener('click', () =>{
    if(playerOrComp == "Computer"){
        document.querySelector("#gameLog").innerHTML += "<h3 class='newGameHeading'>" + nmbrGame + " - NEW GAME: VS Player 2</h3>"
        nmbrGame++
        newGame = true
    }
    if(newGame == false && playerOrComp == "Player 2"){
        document.querySelector("#gameLog").innerHTML += "<h3 class='newGameHeading'>" + nmbrGame + " - NEW GAME: VS " + playerOrComp + "</h3>"
        nmbrGame++
        newGame = true
    }
    document.querySelector("#winner").innerHTML = "New game!"

    document.querySelector("#vsPlayer").classList.add('modeON')
    document.querySelector("#vsPlayer").classList.remove('modeOFF')
    document.querySelector("#playerOrComp").innerHTML = "Player 2"

    document.querySelector("#vsComputer").classList.add('modeOFF')
    document.querySelector("#vsComputer").classList.remove('modeON')
    playerOrComp = "Player 2"

    reset()
})






// ===============================================
// ===============================================
// // choice of turn
// ===============================================
// ===============================================

document.querySelector("#rock").addEventListener("click", () => {
    if(isGameFinished == false){
        if(playerOrComp == "Computer"){
            rockThrow.play()
        }
        playRock()
    }
})
document.querySelector("#paper").addEventListener("click", () => {
    if(isGameFinished == false){
        if(playerOrComp == "Computer"){
            paperFold.play()
        }
        playPaper()
    }
})
document.querySelector("#scissors").addEventListener("click", () => {
    if(isGameFinished == false){
        if(playerOrComp == "Computer"){
            scissorsCut.play()
        }
        playScissors()
    }
})

function playRock(){
    newGame = false

    if(playerTurn === 0){
        // p1 plays
        p1Move = "rock"
        playerTurn = 1
        
        document.querySelector("#currentPlayer").innerHTML = playerOrComp

        if(playerOrComp == "Computer" && playerTurn === 1){
            // comp plays
            RandMove = Math.floor(Math.random() * 3)
            p2Move = compMove[RandMove]
            playerTurn = 0
            playRound()
        }
        return
    }
    if(playerOrComp == "Player 2" && playerTurn === 1){
        // p2 plays
        p2Move = "rock"
        playerTurn = 0
        playRound()
        return
    }
}

function playPaper(){
    newGame = false

    if(playerTurn === 0){
        // p1 plays
        p1Move = "paper"
        playerTurn = 1
        
        document.querySelector("#currentPlayer").innerHTML = playerOrComp

        if(playerOrComp == "Computer" && playerTurn === 1){
            // comp plays
            RandMove = Math.floor(Math.random() * 3)
            p2Move = compMove[RandMove]
            playerTurn = 0
            playRound()
        }
        return
    }
    if(playerTurn === 1){
        // p2 plays
        p2Move = "paper"
        playerTurn = 0
        playRound()
        return
    }
}


function playScissors(){
    newGame = false
    if(playerTurn === 0){
        // p1 plays
        p1Move = "scissors"
        playerTurn = 1
        
        document.querySelector("#currentPlayer").innerHTML = playerOrComp

        if(playerOrComp == "Computer" && playerTurn === 1){
            // comp plays
            RandMove = Math.floor(Math.random() * 3)
            p2Move = compMove[RandMove]
            playerTurn = 0
            playRound()
        }
        return
    }
    if(playerTurn === 1){
        // p2 plays
        p2Move = "scissors"
        playerTurn = 0
        playRound()
        return
    }
}





// ===============================================
// ===============================================
// // Winner function
// ===============================================
// ===============================================
function playRound(){
    if(p1 < maxWinMoves && p2 < maxWinMoves){
        document.querySelector("#currentPlayer").innerHTML = "Player 1"

        if(p1Move == "rock"){
            document.querySelector("#p1img").src = "images/rock.png"
            rockThrow.play()
        }
        if(p1Move == "paper"){
            document.querySelector("#p1img").src = "images/paper.png"
            paperFold.play()
        }
        if(p1Move == "scissors"){
            document.querySelector("#p1img").src = "images/scissors.png"
            scissorsCut.play()
        }

        if(p2Move == "rock"){
            document.querySelector("#p2img").src = "images/rock.png"
            if(playerOrComp == "Player 2"){
                rockThrow.play()
            }
        }
        if(p2Move == "paper"){
            document.querySelector("#p2img").src = "images/paper.png"
            if(playerOrComp == "Player 2"){
                paperFold.play()
            }
        }
        if(p2Move == "scissors"){
            document.querySelector("#p2img").src = "images/scissors.png"
            if(playerOrComp == "Player 2"){
                scissorsCut.play()
            }
        }

        document.querySelector("#p1img").classList.remove('fa-spin')
        document.querySelector("#p2img").classList.remove('fa-spin')

        // draw
        if((p1Move == "rock" && p2Move == "rock") || (p1Move == "paper" && p2Move == "paper") || (p1Move == "scissors" && p2Move == "scissors")){
            document.querySelector("#winner").innerHTML = "Its a draw!"
            document.querySelector("#player1points").innerHTML = p1
            document.querySelector("#player2points").innerHTML = p2
        }

        // p1 won
        if((p1Move == "rock" && p2Move == "scissors") || (p1Move == "paper" && p2Move == "rock") || (p1Move == "scissors" && p2Move == "paper")){
            p1 += 1
            document.querySelector("#winner").innerHTML = "Player 1 won this round!"
            document.querySelector("#player1points").innerHTML = p1
            document.querySelector("#player2points").innerHTML = p2
        }

        // p2 won
        if((p1Move == "rock" && p2Move == "paper") || (p1Move == "paper" && p2Move == "scissors") || (p1Move == "scissors" && p2Move == "rock")){
            p2 += 1
            document.querySelector("#winner").innerHTML = playerOrComp + " won this round!"
            document.querySelector("#player1points").innerHTML = p1
            document.querySelector("#player2points").innerHTML = p2
        }
    }



    





    // ===============================================
    // ===============================================
    // // Update log
    // ===============================================
    // ===============================================
    document.querySelector("#gameLog").innerHTML += "<p><span clas='bold'>Player 1:</span> " + p1Move + " (" + p1 + ") • <span clas='bold'>" + playerOrComp + ":</span> " + p2Move + " (" + p2 + ")</p>"
    
    p1Move = ""
    p2Move = ""



    





    // ===============================================
    // ===============================================
    // // Winner condition
    // ===============================================
    // ===============================================
    if(p1 >= maxWinMoves || p2 >= maxWinMoves){
        let winner = p1 >= maxWinMoves ? "Player 1" : playerOrComp
        let winCrown = p1 >= maxWinMoves ? "#p1win" : "#p2win"

        document.querySelector(winCrown).classList.add("fa-crown")
        document.querySelector("#winner").innerHTML = winner + " is the winner!"
        document.querySelector("#currentPlayer").innerHTML = "No one"

        if(playerOrComp == "Computer" && winner == "Computer"){
            loose.play()
        } else {
            victory.play()
        }

    }
    if(p1 >= maxWinMoves || p2 >= maxWinMoves){
        isGameFinished = true
        if(isGameFinished = true){
            let winner = p1 >= maxWinMoves ? "Player 1" : playerOrComp
            let winCrown = p1 >= maxWinMoves ? "#p1win" : "#p2win"

            document.querySelector(winCrown).classList.add("fa-crown")
            document.querySelector("#winner").innerHTML = winner + " is the winner!"
            document.querySelector("#currentPlayer").innerHTML = "No one"
            document.querySelector("#gameLog").innerHTML += "<p>" + winner + " is the winner! <i class='fas fa-crown' id='p2win'></i></p>"
        }
    }
}



    





// ===============================================
// ===============================================
// // Update log
// ===============================================
// ===============================================
document.querySelector("button").addEventListener("click", () => {
    nmbrGame = 2
    newGame = true
    document.querySelector("#gameLog").innerHTML = "<h3>1 - NEW GAME: VS " + playerOrComp + "</h3>"

})



    





// ===============================================
// ===============================================
// // Download game log
// ===============================================
// ===============================================
document.querySelector('#saveLog').addEventListener("click", () => {
    let logContent = document.querySelector("#gameLog").innerText
    let date = new Date()

    download("GameLog_RockPaperScissors_" + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + "_" + date.getHours()  + "-" + date.getMinutes() + ".txt", logContent)
})


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}