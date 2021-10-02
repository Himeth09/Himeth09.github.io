const brandName = "Humble Jaeger Industries";
const mascot = "Humble Jaeger";
let input = "";
let numberOfSides;
function askUser(){
    let isValid = false; //setting is valid to false so that when its used in the while loop, the loop will continue until the user inputs a valid input
    input = prompt(`Greetings traveller, the ${mascot} humbly asks you to enter a number between 1 and 10`); 
    while(!isValid){ //while loop will continue until isValid becomes true
        isValid = validateEntry(input); //sets the value of isValid to the return value of the function validateEntry
    }

}

function validateEntry(param){
    if(isNaN(parseFloat(param))){ //if the input is not a number, the user will receive a prompt to input a valid input and a false value is returned
        input = prompt(`Greetings traveller, your previous input was not valid. The ${mascot} humbly asks you to once again, enter a number between 1 and 10`);
        return false;
    }else{ //if the input is a number
        numberOfSides = Math.round(parseFloat(param));//round the number
        if(parseFloat(param)>10 || parseFloat(param)<-10){ //then check if its outside the bounds 
            input = prompt(`Greetings traveller, your previous input was not valid. The ${mascot} humbly asks you to once again, enter a number between 1 and 10`);
            return false; //if it is outside the bounds, a prompt asking the user to input a valid input is triggered and a false value is returned
        }
        else if(numberOfSides<0){ //if the input is valid but negative
            numberOfSides*=-1; //multiply by -1 to get a positive value
        }
        alert(`The ${mascot} thanks you for your cooperation. ${getShape(numberOfSides)}`); //once validated, an alert is triggered that also calls the getShape function resulting in a complete message
        return true; //returns a value of true so that the while loop in askUser() terminates
    }
}

function getShape(sides){ //when this function is called, it will check the passed in value with the switch statement and return the correct statement
    switch(sides){
        case 0:
            return `The ${mascot} apologizes, but there is no shape with ${numberOfSides} sides`;
        case 1:
            return `The ${mascot} says that a shape with ${numberOfSides} side is called a monogon`;
        case 2:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a digon`;
        case 3:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a triangle`;
        case 4:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a tetragon`;
        case 5:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a pentagon`;
        case 6:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a hexagon`;
        case 7:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a heptagon`;
        case 8:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a octagon`;
        case 9:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a nonagon`;
        case 10:
            return `The ${mascot} says that a shape with ${numberOfSides} sides is called a decagon`;
    }
}