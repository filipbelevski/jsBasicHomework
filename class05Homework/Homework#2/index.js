let arrayOfNumbers = [2, 15, 10, 13, 2, 3, 5, 6];
let ulist = document.getElementById("numbersList");
function printSomething (array){
    sum = 0
    string = ""
    for (i = 0; i < array.length; i++){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(array[i]))
        ulist.appendChild(li);
        sum += array[i]
    }
    let sumParagraph = document.createElement("p")
    sumParagraph.appendChild(document.createTextNode(sum))
    ulist.appendChild(sumParagraph)
    let equation = document.createElement("p");
    ulist.appendChild(equation) 
    equation.innerText  = ["(" + arrayOfNumbers.join("+") + "=" + sum +")"]
}

printSomething(arrayOfNumbers);