let recipe = prompt(`Enter the name of the recipe`);
let numberOfIngredients = parseInt(prompt(`Enter Number of ingredients`));
let ingredientsArray = []
for (let i = 0; i < numberOfIngredients; i++){
    ingredientsArray.push(prompt(`Enter Ingredient`));
}
let table = document.createElement("table");
document.body.appendChild(table);
let heading = document.createElement("tr");
table.appendChild(heading);

let thead = document.createElement("th");
heading.appendChild(thead);
thead.innerText = recipe

function print (){
    for (i = 0; i < ingredientsArray.length; i ++){
        let trow = document.createElement("tr");
        table.appendChild(trow);
        let tdata = document.createElement("td");
        trow.appendChild(tdata);
        tdata.innerText = ingredientsArray[i];
    }
}

print();