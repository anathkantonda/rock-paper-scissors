game = () => {
    const buttons = document.querySelectorAll('.options button');
    const playerHand = document.querySelector(".playerHand");
    const computerHand =  document.querySelector(".computerHand");
    let pScore = 0;
    let cScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const computerPlay = ["rock", "paper", "scissors"];
            let compNumber = Math.floor(Math.random() * 3);
            let compChoice = computerPlay[compNumber];

            playRound(this.textContent, compChoice);

            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${compChoice}.png`;
        })
    })

    const updateScore = () => {
        const playerScore = document.querySelector('.pscore p');
        const computerScore = document.querySelector('.cscore p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const playRound = (playerSelection, computerSelection) => {
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerSelection === computerSelection){
            winner.textContent = "It is a tie!";
            return;
        }
        //check for rock
        if(playerSelection === 'rock'){
            if(computerSelection === 'scissors'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper 
        if(playerSelection === 'paper'){
            if(computerSelection === 'rock'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerSelection === 'scissors'){
            if(computerSelection === 'paper'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    }

}

game();