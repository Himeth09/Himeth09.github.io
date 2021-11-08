let itemPrice= 25.00;
let total = 0.00;

// window.onload = function() {
//     document.getElementsByTagName('img').onclick = function(){
//         total+=itemPrice;
//         $('total').innerHTML="Total: $"+total.toFixed(2);
//     };

//     $("order").innerHTML = order;
// };

function addOrder(){
    total+=itemPrice;
    document.getElementById('total').innerHTML="Total: $"+total.toFixed(2);
}

function clearOrder(){
    total=0.00;
    document.getElementById('total').innerHTML="Total: $"+total.toFixed(2);
}