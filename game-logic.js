const choice = ["rock","paper","scissors"];
const rpsPhotos = ['./images/rock.png','./images/paper.png', './images/scissors.png'];
let playerCounter = 0;
let cpuCounter =0;

function getComputerChoice(){
    let computerPlay = Math.floor(Math.random()*3)
    getComputerChoicePhoto(computerPlay);
    return choice[computerPlay];
}
function getComputerChoicePhoto(cpuChoice){
    document.querySelector("div.computer-choice > img").src = rpsPhotos[cpuChoice];
}

function playRound(e){
    let computerSelection = getComputerChoice();

    if(checkGame() !== true){
        if(e.target.id === "rock" && computerSelection === "paper"){
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
  
}
function checkGame(){
    if(playerCounter === 5){
        gameOver("Player");
        return true;
    }else if(cpuCounter === 5){
        gameOver('Computer');
        return true;
    }
    return false;
}

function gameOver(winner){
    playerChoices.forEach(choice => choice.removeEventListener('click',playRound));
    const gameOverMessage = document.querySelector('.game-over');
    gameOverMessage.classList.add('game-over-message');

    const gameOverHeader = document.createElement('h2');
    gameOverHeader.textContent = `The winner is ${winner}, press start over to play again!`;

    const startNewGame = document.createElement('button');
    startNewGame.textContent = "Start Over";

    gameOverMessage.appendChild(gameOverHeader);
    gameOverMessage.appendChild(startNewGame);

    startNewGame.addEventListener('click',restart);
}

function restart(){
    const gameOverMessage = document.querySelector('.game-over')
    gameOverMessage.removeChild(document.querySelector('div.game-over h2'));
    gameOverMessage.removeChild(document.querySelector('div.game-over button'));
    gameOverMessage.classList.remove('game-over-message');
    
    playerCounter = 0;
    cpuCounter = 0;
    document.querySelector('div.player-score > h2').textContent = `Player Score: ${playerCounter}`;
    document.querySelector('div.computer-score > h2').textContent = `Cpu Score: ${cpuCounter}`;
    playerChoices.forEach(choice => choice.addEventListener('click',playRound));
}


const playerChoices = document.querySelectorAll('.choice');

playerChoices.forEach(choice => choice.addEventListener('click',playRound));

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