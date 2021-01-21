let input = prompt("Please enter your weight to see how much you weigh in chickens");
let calcResult = input / 0.5
let resultParagraph = document.getElementById("result");

function calculateWeight(){
    if (!isNaN(input)){
        resultParagraph.innerText = "Your weight in chickens is" + " " + calcResult + " " +"chickens"
    }
    else{
        resultParagraph.innerText = "Please enter a valid number of chickens"
    }
}

calculateWeight();