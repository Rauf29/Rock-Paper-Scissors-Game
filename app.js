let userScore = 0;
let computerScore = 0;

const options = document.querySelectorAll('.option');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');

const genComputerOption = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}
const drawGame = () => {
    msg.innerText = "Game draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}
const showWinner = (userWin, userOption, computerOption) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userOption} beats ${computerOption}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${computerOption} beats Your ${userOption}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userOption) => {
    const computerOption = genComputerOption();
    if (userOption === computerOption) {
        drawGame();
    } else {
        let userWin = true;
        if (userOption === "rock") {
            userWin = computerOption === "paper" ? false : true;
        } else if (userOption === "paper") {
            userWin = computerOption === "scissors" ? false : true;
        } else {
            userWin = computerOption === "rock" ? false : true;
        }
        showWinner(userWin, userOption, computerOption);
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userOption = option.getAttribute("id");
        playGame(userOption);
    });
});