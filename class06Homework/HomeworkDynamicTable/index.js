
document.getElementById("generateTable").addEventListener("click", function(){
    let generatedTable = document.createElement("table");
    document.body.appendChild(generatedTable);
    generatedTable.innerText = "Generated Table"

    let colums = parseInt(document.getElementById("columsInput").value);
    let rows = parseInt(document.getElementById("rowsInput").value);
    
    for (i = 0; i < rows; i++){
        let createRow = document.createElement("tr");
        generatedTable.appendChild(createRow);
        for (j = 0; j < colums; j++){
            let createColumn = document.createElement("td")
            createRow.appendChild(createColumn)
            createColumn.innerText = (`Row ${[i+1]} Column ${[j+1]}`);
        }
    }

},false)



