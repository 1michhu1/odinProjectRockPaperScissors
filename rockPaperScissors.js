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

function game() {
    compChoices = ['rock', 'paper', 'scissors'];
    for ( let i = 0; i < 5; i ++ ) {
        playerSelection = prompt("enter choice: rock, paper or scissors", "rock");
        computerSelection = getComputerChoice( compChoices )
        result = playRound( playerSelection, computerSelection );
        console.log(`playersleection: ${playerSelection}`)
        console.log(`computerseleection: ${computerSelection}`)


        console.log(result);

    };
}

game()

// console.log(getComputerChoice(['rock', 'paper', 'scissors']));