let userScore = 0;
let cpuScore = 0;
let userScore_span = document.getElementById("user-score");
let cpuScore_span = document.getElementById("cpu-score");
const scoreboard_div = document.querySelector(".scoreboard");
const results_div = document.querySelector(".results p");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")



let cpu_choice = function() {
    let choices_cpu = ["rock", "paper", "scissors"]
    let choice_num = Math.floor(Math.random() * 3)
    return choices_cpu[choice_num]
}




let win = function(userChoice, get_cpu_choice) {
    userScore ++;
    userScore_span.innerHTML = userScore
    document.getElementById(userChoice).classList.add("green-glow")
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow") }, 750)
    if (userScore >= 5) {
        return results_div.innerHTML = "Player has won the game!"
    } else {
        return results_div.innerHTML = `${userChoice} beats ${get_cpu_choice}. You win!`
    }
}


let lose = function(userChoice, get_cpu_choice) {
    cpuScore ++;
    cpuScore_span.innerHTML = cpuScore
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow") }, 750)
    if (cpuScore >= 5) {
        return results_div.innerHTML = "CPU has won the game. Try again."
    } else {
        return results_div.innerHTML = `Cpu's ${get_cpu_choice} beats ${userChoice}. You lose!`

    }
}




let tie = function(userChoice) {
    results_div.innerHTML = "Tie Game"              
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")}, 750)
}




let game = function(userChoice) {
    const get_cpu_choice = cpu_choice()
    switch(userChoice + get_cpu_choice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, get_cpu_choice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, get_cpu_choice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, get_cpu_choice)
            break;
    }
}





function main() {

    rock_div.addEventListener('click', function () {
        game("rock")
    } )
    paper_div.addEventListener('click', function () {
        game("paper")
    } )
    scissors_div.addEventListener('click', function () {
        game("scissors")
    } )


}

main();
