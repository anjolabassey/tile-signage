var name = "Mary";
var sign = "sweet sensation";
var signNum = sign.length;
var price = 100;
var total = signNum * price;
var shipping = 500;
var grandTotal = total + shipping;



var greet = document.getElementById("greeting");
greet.textContent = "Howdy " + name + ", here is your bill";

//document.getElementById("greeting").innerHTML = "Howdy " + name + ", here is your bill";

var customSign = document.getElementById("userSign");
customSign.textContent = sign;

var totalTiles = document.getElementById("tiles");
totalTiles.textContent = signNum;

var subTotal = document.getElementById("subTotal");
subTotal.textContent = "N" + total;

var ship = document.getElementById("shipping");
ship.textContent = "N" + shipping;

var gTotal = document.getElementById("grandTotal");
gTotal.textContent = "N" + grandTotal;