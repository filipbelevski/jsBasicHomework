let availableCash = 5000;
let userInput = prompt("Withdraw ammount, Net = 5000");


function cash(){
    if (userInput > availableCash){
        console.log("Not enough money");
    }
    else {let x = availableCash - userInput;
    console.log("You have withdrawn",userInput, "You have", x , "available");}

}
cash();
