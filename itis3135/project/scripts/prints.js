let itemPrice= 25.00;
let total = 0.00;

function addOrder(){
    total+=itemPrice;
    document.getElementById('total').innerHTML="Total: $"+total.toFixed(2);
}

function clearOrder(){
    total=0.00;
    document.getElementById('total').innerHTML="Total: $"+total.toFixed(2);
}

function display(){
    alert("Total cost: $" + total);
}