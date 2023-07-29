function getComputerChoice(choices) {
    return choices[ Math.floor(Math.random() * choices.length)]
};

function playRound( playerSelection, computerSelection ) {
    playerSelection = playerSelection.toLowerCase()
    resultStr = "adsf"
    playerWin = ( (playerSelection == "paper" && computerSelection == 'rock')
    || (playerSelection == "scissors" && computerSelection == 'paper') 
    || (playerSelection == "rock" && computerSelection == "scissors")
    )

    if ( playerSelection == computerSelection ) {
        resultStr = "Draw!"
    
    
    } else if (playerWin) {
        resultStr = `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        resultStr = `You lose! ${computerSelection} beats ${playerSelection}!`

    }

    return resultStr
};

function getPlayerChoice() {
    console.log(this.getAttribute('id'))

}

function game() {
    // pressing buttons calls play round function
    // change playerSelection value to choice based on which button pressed
    compChoices = ['rock', 'paper', 'scissors']
    const btns = document.querySelectorAll("button")
    btns.forEach( btn => btn.addEventListener(
        "click", 
        () => {
                playerSelection = btn.getAttribute("id")
                compSelection = getComputerChoice(compChoices)
                console.log(`player: ${playerSelection}, comp: ${compSelection}`)
                result = playRound(playerSelection, compSelection)
                console.log(result)
            }
        )
    )
    
    // compChoices = ['rock', 'paper', 'scissors'];
    
    // playerSelection = prompt("enter choice: rock, paper or scissors", "rock");
    // computerSelection = getComputerChoice( compChoices )
    // result = playRound( playerSelection, computerSelection );
    // console.log(`playersleection: ${playerSelection}`)
    // console.log(`computerseleection: ${computerSelection}`)


    // console.log(result);

    };

game()

// console.log(getComputerChoice(['rock', 'paper', 'scissors']));