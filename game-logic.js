const choice = ["rock","paper","scissors"]

function getComputerChoice(){
    let computerPlay = Math.floor(Math.random()*3)
    return choice[computerPlay]
}


function playRound(playerSelection,computerSelection){
    // console.log(computerSelection)
    if(!choice.includes(playerSelection.toLowerCase())){
        return -2
    }else if(playerSelection.toLowerCase() === computerSelection){
        return -1
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        return 0
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        return 0
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        return 0
    }else{
        return 1
    }
}

function game(){
    let playerCount = 0
    let cpuCount = 0
    while(playerCount != 5 && cpuCount != 5){

        let playerInput = prompt("Rock,Paper, or Scissors?")
        let cpuChoice = getComputerChoice()

        let round = playRound(playerInput,cpuChoice)
        if( round === -1){
            // playerCount += 1;
            // cpuCount += 1;
            alert(`You tied! ${playerInput} and ${cpuChoice} can't beat each other`)
        }else if (round === 0){
            cpuCount += 1
            alert(`You lost! ${cpuChoice} beats ${playerInput}`)
        }else if(round === 1){
            playerCount += 1
            alert(`You Won! ${playerInput} beats ${cpuChoice}`)
        }else if(round === -2){
           alert("invalid, round not counted") 
        }

        console.log(round, playerCount,cpuCount)
    }
    playerCount > cpuCount? alert(`Player wins with ${playerCount} vs CPUs ${cpuCount}`): playerCount === cpuCount? alert(`Player and CPU ties with ${playerCount} wins`):alert(`CPU wins with ${cpuCount} vs Players ${playerCount} wins`)
}