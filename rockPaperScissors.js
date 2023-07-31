let numRoundsPlayed = 0
let compChoices = ['rock', 'paper', 'scissors']
let playerScore = 0
let compScore = 0
const resultRef = document.querySelector("#roundResultText")
const totalScoreRef = document.querySelector("#totalScoreResultText")

function getCompChoice(choices) {
    return choices[ Math.floor(Math.random() * choices.length)]
};

function getGameResult( playerSelection, computerSelection ) {
    // return game result as a number: 0=draw, 1=player wins, 2=computer wins
    // and also returns game resultStr
    playerSelection = playerSelection.toLowerCase()
    resultStr = ""
    resultNum = 0

    playerWin = ( (playerSelection == "paper" && computerSelection == 'rock')
    || (playerSelection == "scissors" && computerSelection == 'paper') 
    || (playerSelection == "rock" && computerSelection == "scissors")
    )
    
    if ( playerSelection == computerSelection ) {
        resultStr = "Draw!"
    
    
    } else if (playerWin) {
        resultStr = `You win! ${playerSelection} beats ${computerSelection}!`
        resultNum = 1
    } else {
        resultStr = `You lose! ${computerSelection} beats ${playerSelection}!`
        resultNum = 2

    }

    return [resultNum, resultStr]
};

function increaseScore(roundResult) {
    if (roundResult === 1) {
        playerScore += 1
    }
    else if (roundResult === 2) {
        compScore += 1
    }
}

function playRound() {
    if (numRoundsPlayed < 5) {

        playerSelection = this.getAttribute('id')
        compSelection = getCompChoice(compChoices)

        resultArr = getGameResult(playerSelection, compSelection)
        resultNum = resultArr[0]
        resultStr = resultArr[1]
        resultRef.textContent = resultStr

        increaseScore(resultNum)
        totalScoreStr = `Player: ${playerScore} Computer: ${compScore}`
        totalScoreRef.textContent = totalScoreStr
        
        if (resultNum) {
            numRoundsPlayed += 1
        }
        
    }

}

function game() {
    const btns = document.querySelectorAll("button")
    btns.forEach( btn => btn.addEventListener("click", playRound))
    
};

game()

