const brandName = "Humble Jaeger Industries";
let today = new Date();
let userName="";
let userStatus="";
let answer="";
function askUser(){
    userName = window.prompt("Hi! Whats your name?");
    userStatus = window.prompt("Nice to meet you "+userName+"! How are you doing?");
    document.getElementById("greeting").innerHTML = `Today is ${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}, 
        and the time is: ${today.getHours()}:${today.getMinutes()}
        <br>${brandName} welcomes you, ${userName}!
        <br>We're glad you are doing ${userStatus}!`;
}

function getRefund(){
    window.alert(`Oh? You wanted a refund ${userName}? Ha, that's cute.\nSorry bucko, read the fine print next time, no returns or takebacks :)`);
}

function montyPython(){
    answer = prompt('A classic question for you, answer correctly and surprise awaits.\nIn what movie is this questin asked \n"What is the airspeed velocity of an unladen swallow (swallow, jaegar, basically the same thing)?"');
    if(answer.toLowerCase().includes("monty") && answer.toLowerCase().includes("python")){
        confirm(`Excellent, carry on ${userName}`);
    }else{
        confirm("Incorrect mortal! The bridge of death has claimed another!");
    }
}

function calculateTotal(){
    answer = prompt(`Hello ${userName}, did you order a website? (y/n)`);
    if(answer.toLowerCase() === 'y'){
        answer = prompt("Great to hear! Did you also order a ecommerce platform? (y/n)");
            if(answer.toLowerCase()==='y'){
                alert(`Your total is:
                \nWebsite:
                \n\tYour eternal soul
                \n\tFirst born child
                \n\t12x payments of $399.99\n
                \nEcommerce:
                \n\t$250.00\n
                \nTotal: infinity :)`);
            }else if(answer.toLowerCase()==='n'){
                alert(`Your total is:
                \nWebsite:
                \n\tYour eternal soul
                \n\tFirst born child
                \n\t12x payments of $399.99\n
                \nTotal: infinity :)`);
            }else{
                alert(`Not a valid input, charging you the maximum amount, have fun! :)`);
            }
    }else if(answer.toLowerCase() === 'n'){
        alert(`Amazing! Your total is $0!`);
    }else{
        alert(`Not a valid input, charging you the maximum amount, have fun! :)`);
    }
}

function howManyPixels(){
    let width = parseInt(prompt("Enter in the width in pixels"));
    let height = parseInt(prompt("Enter in the height in pixels"));
    alert(`The object that is ${width}x${height} has ${width*height} pixels`);
}

function goodStuff(){ //intentionally vauge wording to incite intrigue
    alert("You really don't wanna do this");
    answer = prompt("Do you really wanna continue? (y/n)");
    if(answer.toLowerCase() === 'y'){
        location.replace("https://youtu.be/6iseNlvH2_s");
    }else if(answer.toLowerCase() === 'n'){
        alert("Too late now");
        location.replace("https://youtu.be/6iseNlvH2_s");
    }else{
        alert("Nice try, but you still didn't save yourself");
        location.replace("https://www.youtube.com/watch?v=E4aNktYxVo0");
    }
}