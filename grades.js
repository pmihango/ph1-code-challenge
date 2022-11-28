//prompt const to allow us put in grades anytime asked
//const prompt = ("prompt-sync");
//let score =prompt("Please enter your grade");
function grade(score){
   
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
    }
grade()
//returns the grade scored