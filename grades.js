//program will as user to input the student score, press enter and it will process the grade

const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

rl.question("What is your score\n", function (score) {
    userInput = score;

//function grade(score){
   
    if (score > 79 && score <=100) {
        console.log("Your Grade is A")
      } 
    
      else if(score >= 60 && score <= 79 ){
            console.log("Your Grade is B")
        }
    
        else if(score >= 49 && score <= 59 ){
            console.log("Your Grade is C")
        }
        else if(score >= 40 && score <= 49 ){
            console.log("Your Grade is E")
        }
        else if(score < 40){
            console.log("Your Grade is E")
        }
        else{
            console.log("Please input a Value between 0 to 100")
        }
    
      return score
       
        rl.close();
      });
