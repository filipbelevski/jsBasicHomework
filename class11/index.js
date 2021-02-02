// .Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.

// 2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.

// 3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.

//4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly active content will be hiden and the selected one will be shown.

//5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list.
$(document).ready(function (){
    let bookTitle = $("#bookTitle");
    let bookAuthor = $("#bookAuthor");
    let bookPhone = $("#bookTelephone");
    let bookDate = $("#bookDate");

    $("#bookAddButton").click(function (){
        console.log(bookTitle)
        $("#bookForm").after(
            `
                <ul>
                    <li>${bookTitle.val()}</li> <br />
                    <li>${bookAuthor.val()}</li> <br />
                    <li>${bookPhone.val()}</li> <br />
                    <li>${bookDate.val()}</li> <br />
                </ul>
            `
        )
    })
    
    let carModel = ["Alfa","BMW","Zastava","Mercedes","Kia"];
    let carColor = ["Red","Blue","Green","Black","White"];
    let licensePlates = ["2000","3000","4000","5000","6000"];

    $("#addCarsButton").click(function (){
        for (let i = 0; i < carModel.length, i < carColor.length, i < licensePlates.length; i++){
           $("#carsTable").append(
               `
                        <tr>
                            <td class="grey">${licensePlates[i]}</td>
                            <td class="white">${carModel[i]}</td>
                            <td class="grey">${carColor[i]} </td> 
                        </tr>   
               `
           )
        }
        $("table").css("border","1px solid black")
        $("tr").odd().css("color","red")
        $(".grey").css("background-color","grey");

    })

    $("#startButton").click(function (){
        $("#changeParagraph").css("font-size","medium")
    })
    $("#increaseButton").click(function (){
        $("#changeParagraph").css("font-size","larger")
    })
    $("#reduceButton").click(function (){
        $("#changeParagraph").css("font-size","smaller")
    })
    
    $(document).ready(function (){
        $("#optionOneContent").show();
        $("#optionTwoContent").hide();
        $("#optionThreeContent").hide();

    }
    )
    $("#optionOne").click(function(){
        $("#optionOneContent").show()
        $("#optionTwoContent").hide()
        $("#optionThreeContent").hide()
    })
    $("#optionTwo").click(function(){
        $("#optionOneContent").hide()
        $("#optionTwoContent").show()
        $("#optionThreeContent").hide()
    })
    
    $("#optionThree").click(function (){
        $("#optionOneContent").hide()
        $("#optionTwoContent").hide()
        $("#optionThreeContent").show()
    })

    $("#returnCities").click(function (){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/photos",
            success: function (result){
                let hundredNeznam = [];
                for (let i = 0; i < 100; i++){
                    hundredNeznam.push(result[i])
                }
                if (hundredNeznam !== undefined && hundredNeznam.length > 0){
                    $("#apiReturn").append (
                        `
                            <ul>
                                    ${hundredNeznam.map((photo) => {
                                        
                                            return (
                                                `
                                                    <li>Photo ID: ${photo.id}</li> <br />
                                                    <li>Title: ${photo.title}</li> <br />
                                                    <li>Photo URL: ${photo.url}</li> <br />
                                                    <li> Preview: <a href=${photo.url}> <img src=${photo.thumbnailUrl} width="50px"></a>
                                                    <br />
                                                    <br />
                                                    <br />
                                                `
                                        )
                                    }).join("")}
                            </ul>
                        `
                    )
                }
            },
            error: function(error){
                console.log(error);
            }
        })
       
    })
    $("li").css("list-style","none")
})