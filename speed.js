//The speed lilit is 70
let limit = 70
function speedDetector(speed){
    if(speed < limit){
        return "OK" 
        //If speed was not exceeded then you get an OK
    }else{
        let points = ((speed - limit) / 5) 
        //The the current speed, minus the limit and divide by 5 to get points
        if(points >= 12){
            return "License suspended"
        //If the drivers points are 12 or more then suspend license    
        }else {
            return 'Points:' + points
        }
    }
}
console.log(speedDetector(140));
//enter the speed to test the limit and generate points