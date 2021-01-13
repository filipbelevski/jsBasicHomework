let userInputDog = prompt("Human to dog");
let userInputHuman = prompt("Dog to Human")

function convertDog(userInputDog){
    let dogYears = userInputDog * 7;
    console.log("Dog years", dogYears)
}

convertDog(userInputDog);

function convertHuman(userInputHuman){
    let humanYears = userInputHuman / 7;
    console.log("Human Years", humanYears);
}

convertHuman(userInputHuman);