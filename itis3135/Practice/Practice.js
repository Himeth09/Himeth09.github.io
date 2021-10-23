var $ = function(id) {
	return document.getElementById(id);
};

let items = [
	{"name": "espresso", "price": "1.95", "details": "Delicious espresso. Wanna try it?"},
	{"name": "cappuccino", "price": "3.45", "details": "Delicious Cappuccino!"}
];
let order="";
let total = 0.0;

window.onload = function() {

	//add onclick event handler for each image

	// for click event add item to order and update total
	$('espresso').onclick = function(){
		$('order').append(`${items[0].name} -- ${items[0].price} -- ${items[0].details}\n`);
		total+=parseFloat(items[0].price);
		$('total').innerHTML="Total: $"+total.toFixed(2);
	};

	$('cappuccino').onclick = function(){
		$('order').append(`${items[1].name} -- ${items[1].price} -- ${items[1].details}\n`);
		total+=parseFloat(items[1].price);
		$('total').innerHTML="Total: $"+total.toFixed(2);
	};

	// display order and total
	document.getElementById("order").innerHTML = order;
	
		
}; // end onload