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
choiceP1(p1Move, p2Move, p1, p2, playerOrComp)

// document.querySelector("#winner")

function choiceP1(p1Move, p2Move, p1, p2, playerOrComp){
    document.querySelector("#currentPlayer").innerHTML = "Player 1"
    rock.addEventListener("click", () =>{
        p1Move = "rock"
        choiceP2(p1Move, p2Move, p1, p2, playerOrComp)
    })

    paper.addEventListener("click", () =>{
        p1Move = "paper"
        choiceP2(p1Move, p2Move, p1, p2, playerOrComp)
    })

    scissors.addEventListener("click", () =>{
        p1Move = "scissors"
        choiceP2(p1Move, p2Move, p1, p2, playerOrComp)
    })
}

function choiceP2(p1Move, p2Move, p1, p2, playerOrComp){
    document.querySelector("#currentPlayer").innerHTML = playerOrComp
    rock.addEventListener("click", () =>{
        p1Move = "scissors"
        play(p1Move, p2Move, p1, p2, playerOrComp)
    })

    paper.addEventListener("click", () =>{
        p1Move = "scissors"
        play(p1Move, p2Move, p1, p2, playerOrComp)
    })

    scissors.addEventListener("click", () =>{
        p1Move = "scissors"
        play(p1Move, p2Move, p1, p2, playerOrComp)
    })
}






// ===============================================
// ===============================================
// // Winner function
// ===============================================
// ===============================================
function play(p1Move, p2Move, p1, p2, playerOrComp){
    // draw
    if((p1 == "rock" && p2 == "rock") || (p1 == "paper" && p2 == "paper") || (p1 == "scissors" && p2 == "scissors")){
        
    }

    // p1 won
    if((p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock") || (p1 == "scissors" && p2 == "paper")){
        p1 += 1
        
    }

    // p2 won
    if((p1 == "rock" && p2 == "paper") || (p1 == "paper" && p2 == "scissors") || (p1 == "scissors" && p2 == "rock")){
        p2 += 1
        

    }

}

    
// if(playerTurn === "player1"){
//     document.querySelector("#currentPlayer").innerHTML = "Player 1"
//     rock.addEventListener("click", () =>{
//         console.log("waa")
//         p1Move = "rock"
//         playerTurn = "player2"
//     })

//     paper.addEventListener("click", () =>{
//         p1Move = "paper"
//         playerTurn = "player2"
//     })

//     scissors.addEventListener("click", () =>{
//         p1Move = "scissors"
//         playerTurn = "player2"
//     })
// }

// if(playerTurn === "player2"){
//     document.querySelector("#currentPlayer").innerHTML = playerOrComp
//     rock.addEventListener("click", () =>{
//         console.log("wee")

//         p1Move = "rock"
//         playerTurn = "player1"
//     })

//     paper.addEventListener("click", () =>{
//         p1Move = "paper"
//         playerTurn = "player1"
//     })

//     scissors.addEventListener("click", () =>{
//         p1Move = "scissors"
//         playerTurn = "player1"
//     })
// }