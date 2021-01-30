$(document).ready(function(){

    $("#button").click(function(){
        let userInput = Number($("#inputNumber").val());
        if (userInput < 1 || userInput > 99){
            alert("Please enter a number between 1-100")
        }
        else{
            fetch("https://jsonplaceholder.typicode.com/posts/")
                .then(reslut => reslut.json())
                .then(data => { 
                    if (data !== undefined && data.length > 0){
                        document.getElementById("newDiv").innerHTML = (
                            `
                                <ul>
                                    ${data.map(data =>{
                                        if(data.id === userInput){
                                            return (
                                                `
                                                    <li>
                                                        Id : ${data.id} </br>
                                                        Title: ${data.title} </br>
                                                        Body: ${data.body} </br>
                                                    </li>  
                                                `

                                            )
                                        }
                                    }).join("")}
                                <ul> 
                            `
                        )
                    }
                    }
                )

                .catch(error => {
                    console.error(error);
                })
        }
    })   

    $("#omnisButton").click(function (){
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(json => {
                if (json !== undefined && json.length > 0){
                    document.getElementById("omnisdiv").innerHTML = (
                        `
                            <ul>
                                ${json.map(json => {
                                    if (json.title.match("omnis")){
                                        return (
                                            `
                                                <li>
                                                        Id: ${json.id}
                                                        Title: ${json.title}
                                                </li>
                                            `
                                        )
                                    }
                                }).join("")}

                                </ul>
                        `
                    )
                }
            })
    })

    $("#registerButton").click(function (){
        let userName = $("#userName").val();
        let userFirstName = $("#userFirstName").val();
        let userLastName = $("#userLastName").val();
        let userEmail = $("#userEmail").val();
        
        function registerNewUser(userName, userFirstName, userLastName, userEmail){
            if (userName !== "" && userLastName !== "" && userEmail !== ""){
                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: JSON.stringify({
                        "Username": userName,
                        "First Name": userFirstName,
                        "Last Name": userLastName,
                        "e-mail": userEmail
                    }),
                    headers: {
                        "Content-type": "registration/json; charset=UTF-8", 
                    }
                })
                .then(response => response.json())
                .then(registration => console.log("sucess", registration))
                .catch(error => {
                    console.error(error);
                })
            } 
        }
        registerNewUser(userName, userFirstName, userLastName, userEmail);
    })
})