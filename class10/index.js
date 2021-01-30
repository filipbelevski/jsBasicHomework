// 1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.

// 2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts

let numbers = []
let divisableBySevenAndThree = []
function firstExercise(){
    for (let i = 1; i < 100; i++){
        if (i %7 === 0 && i%3 === 0){
            numbers.push(i);
        };
    }


}
console.log(numbers);
firstExercise();

function atm (){
    let balance = 3000;
    
    document.getElementById("depositButton").addEventListener("click",function (){
        let userDeposit = parseInt(prompt("Deposit"));
        balance += userDeposit
    })
    document.getElementById("withdrawButton").addEventListener("click", function (){
        let userWithdraw = parseInt(prompt("Wihtdraw"))
        balance -= userWithdraw
    })
    document.getElementById("balanceButton").addEventListener("click", function (){
        alert(`Your current balance is ${balance}`)
    });

    document.getElementById("exit").addEventListener("click", function(){
        document.getElementById("form").style.display ="none";
    })
}
atm();

