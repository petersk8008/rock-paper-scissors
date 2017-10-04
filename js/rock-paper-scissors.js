var userScore = 0;
var compScore = 0;
var playGame = function() {
    var userRadio = document.getElementsByName('rockpaperscissors');
    console.log(userRadio);
    var userChoice = '';
    for (var i = 0, length= userRadio.length; i < length ; i++) {
        if (userRadio[i].checked) {
            userChoice = userRadio[i].value;
            console.log("User chooses: " + userChoice);
            break;
        }
    }
    // var inputError = true;
    // while (inputError === true){
    //     if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
    //         userChoice = prompt("Please choose rock, paper, or scissors.");
    //         userChoice = userChoice.toLowerCase();
    //         inputError = true;
    //     }else{
    //         inputError = false;

    //     }
    // }
    var computerChoice = Math.random();
    if (computerChoice  < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    }
    console.log("Computer chooses: " + computerChoice);
    var compare = function(choice1, choice2){
        if (choice1 === choice2){
            return "The result is a tie!";
        }
        else if (choice1 === "rock"){
            if (choice2 === "scissors"){
                return "User wins with Rock";
            } else {
                return "Computer wins with Paper";
            }
        }
        else if (choice1 === "paper"){
            if (choice2 === "rock"){
                return "User wins with Paper";
            }
            else {
                return "Computer wins with Scissors";
            }
        }
        else if (choice1 === "scissors"){
            if (choice2 === "paper"){
                return "User wins with Scissors";
            }
            else {
                return "Computer wins with Rock";
            }
        }
    };
    var takeScore = function(userScore, compScore) {
        console.log(compare(userChoice, computerChoice));
        if (compare(userChoice, computerChoice) == "User wins with Rock" || compare(userChoice, computerChoice) == "User wins with Paper" || compare(userChoice, computerChoice) == "User wins with Scissors"){
            userScore++;
            console.log("User Score = " + userScore + " Computer Score = " + compScore);
            return [userScore, compScore];
        }else if(compare(userChoice, computerChoice) == "The result is a tie!"){
            console.log("User Score = " + userScore + " Computer Score = " + compScore);
            return [userScore, compScore];
        }else{
            compScore++;
            console.log("User Score = " + userScore + " Computer Score = " + compScore);
            return [userScore, compScore];
        }
    };
    var myArray= takeScore(userScore, compScore);
    userScore = myArray[0];
    compScore = myArray[1];
    var newUserScore = document.getElementById("userScore");
    var newCompScore = document.getElementById("compScore");
    var para = document.createElement("p");
    var node = document.createTextNode("User Score: ");
    para.appendChild(node);






};
