document.getElementById("registerUserFormButton").addEventListener("click", function(){
    let name = document.getElementById("userFirstName").value;
    let lastName = document.getElementById("userLastName").value;
    let email = document.getElementById("userMail").value;
    let password = document.getElementById("userPassword").value;

    let newParagraph = document.createElement("p");
    newParagraph.innerText = (`${name} ${lastName} ${email} ${password}`)
    document.body.appendChild(newParagraph);

},false)