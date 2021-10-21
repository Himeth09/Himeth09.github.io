let stringValue="";
let runningTotal;

function clicked(button_id){
    switch (button_id){
        case "0":
            console.log("0");
            stringValue+= "0";
            break;
        case "1":
            console.log("1");
            stringValue+= "1";
            break;
        case "2":
            console.log("2");
            stringValue+= "2";
            break;
        case "3":
            console.log("3");
            stringValue+= "3";
            break;
        case "4":
            console.log("4");
            stringValue+= "4";
            break;
        case "5":
            console.log("5");
            stringValue+= "5";
            break;
        case "6":
            console.log("6");
            stringValue+= "6";
            break;
        case "7":
            console.log("7");
            stringValue+= "7";
            break;
        case "8":
            console.log("8");
            stringValue+= "8";
            break;
        case "9":
            console.log("9");
            stringValue+= "9";
            break;
        case "+":
            console.log("add");
            stringValue+= "+";
            break;
        case "-":
            console.log("subtract");
            stringValue+= "-";
            break;
        case "X":
            console.log("multiply");
            stringValue+= "*";
            break;
        case "/":
            console.log("divide");
            stringValue+= "/";
            break;
        case "equals":
            console.log("=");
            calculateTotal(stringValue);
            break;
        case "clear":
            console.log("clear");
            stringValue="";
            break;
        case "decimal":
            console.log(".");
            stringValue+= ".";
            break;
        default:
            break;
    }
}

function calculateTotal(values){
    console.log(values);
}