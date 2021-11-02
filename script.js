game()

function game(){
    const ROUNDS = 5
    let playerScore = 0
    let computerScore = 0

    for(let i = 0; i<ROUNDS; i++){ 
        result = playRound(prompt(), computerPlay())

        console.log(result)
        if(result.includes("win")){
            playerScore++
        } else if(result.includes("lose")){
            computerScore++
        } else {
            playerScore++
            computerScore++
        }
    }

    console.log(`Final score\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
    if(playerScore > computerScore){
        console.log("You won!")
    } else if (computerScore > playerScore){
        console.log("You lost!")
    } else {
        console.log("You tied!")
    }
}

function computerPlay() {
    choice = Math.floor(Math.random()*3)

    switch(choice) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === "rock") {
        if(computerSelection === "rock"){
            return "Tie! You both played rock."
        } else if (computerSelection === "paper"){
            return "You lose! Paper beats rock."
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors"
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            return "You win! Paper beats rock."
        } else if (computerSelection === "paper"){
            return "Tie! You both played paper."
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper."
        }
    } else if (playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "You lose! Rock beats scissors."
        } else if (computerSelection === "paper"){
            return "You win! Scissors beats paper."
        } else if (computerSelection === "scissors") {
            return "Tie! You both played scissors."
        }
    }
}