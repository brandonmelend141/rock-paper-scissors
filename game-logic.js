const choice = ["rock","paper","scissors"]
const rpsPhotos = ['./images/rock.png','./images/paper.png', './images/scissors.png']
let playerCounter = 0;
let cpuCounter =0;

function getComputerChoice(){
    let computerPlay = Math.floor(Math.random()*3)
    getComputerChoicePhoto(computerPlay)
    return choice[computerPlay]
}
function getComputerChoicePhoto(cpuChoice){
    let cpuPlay = document.querySelector('.computer-choice')
    document.querySelector("div.computer-choice > img").src = rpsPhotos[cpuChoice]
}

function playRound(e){
    let computerSelection = getComputerChoice();

    if(e.target.id=== computerSelection){
        console.log('tie')
    }else if(e.target.id === "rock" && computerSelection === "paper"){
        cpuCounter++;
        document.querySelector('div.computer-score > h2').textContent = `Cpu Score: ${cpuCounter}`;
    }else if(e.target.id === "paper" && computerSelection === "scissors"){
        cpuCounter++;
        document.querySelector('div.computer-score > h2').textContent = `Cpu Score: ${cpuCounter}`;
    }else if(e.target.id === "scissors" && computerSelection === "rock"){
        cpuCounter++;
        document.querySelector('div.computer-score > h2').textContent = `Cpu Score: ${cpuCounter}`;
    }else{
        playerCounter++;
        document.querySelector('div.player-score > h2').textContent = `Player Score: ${playerCounter}`;
    }
}
const playerChoices = document.querySelectorAll('.choice')

playerChoices.forEach(choice => choice.addEventListener('click',playRound))
// function game(){
//     let playerCount = 0
//     let cpuCount = 0
//     while(playerCount != 5 && cpuCount != 5){

//         let playerInput = prompt("Rock,Paper, or Scissors?")
//         let cpuChoice = getComputerChoice()

//         let round = playRound(playerInput,cpuChoice)
//         if( round === -1){
//             // playerCount += 1;
//             // cpuCount += 1;
//             alert(`You tied! ${playerInput} and ${cpuChoice} can't beat each other`)
//         }else if (round === 0){
//             cpuCount += 1
//             alert(`You lost! ${cpuChoice} beats ${playerInput}`)
//         }else if(round === 1){
//             playerCount += 1
//             alert(`You Won! ${playerInput} beats ${cpuChoice}`)
//         }else if(round === -2){
//            alert("invalid, round not counted") 
//         }

//         console.log(round, playerCount,cpuCount)
//     }
//     playerCount > cpuCount? alert(`Player wins with ${playerCount} vs CPUs ${cpuCount}`): playerCount === cpuCount? alert(`Player and CPU ties with ${playerCount} wins`):alert(`CPU wins with ${cpuCount} vs Players ${playerCount} wins`)
// }