
let userInput = prompt("Please enter your date of birth (mm/dd/yyyy)");

let dateInput = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

// 3=year, 2=day, 1= month

let dateOfBirth = new Date(dateInput[3], dateInput[1]-1, dateInput[2]);

let dateNow = new Date();
let dayNow = dateNow.getDate();
let monthNow = dateNow.getMonth() +1;
let yearNow = dateNow.getFullYear();

let stringDay = parseInt(dateInput[2]);
let stringMonth = parseInt(dateInput[1]);
let stringYear = parseInt(dateInput[3]);

let calcYear = yearNow - stringYear;
let calcDay = dayNow - stringDay;
let calcMonth = monthNow - stringMonth;


if(calcYear >=18 && monthNow === stringMonth && dayNow === stringDay){
    alert("Srejken rodenden, Polnoleten");
}
else if (calcYear >= 18 && stringMonth <= monthNow && stringDay < dayNow){
    alert("polnoleten");
}
else if (calcYear >= 18 && stringMonth < monthNow){
    alert("polnoleten")
}
else if (calcYear >18){
    alert("polnoleten")
}
else if (calcYear <18 && monthNow === stringMonth && dayNow === stringDay){
    alert("Srejken rodenden, Maloleten")
}
else if(calcYear <=18 && stringMonth >= monthNow && stringDay > dayNow){
    alert("maloleten")
}
else if(calcYear <=18 && stringMonth > monthNow){
    alert("maloleten")
}
else if (calcYear <18 || stringmonth != monthNow || dayNow != stringDay){
    alert("maloleten")
}
else if(calcYear < 18){
    alert("maloleten")
}


// Да се внесе бројка на роденден и да се провери дали е полнолетена особата?
// 1. Внесувам прво месец, па ден, па година (пример 01231996)
// 2. Замената на внесената бројката со формат на вредност разбирлива за датум се прави со: 
//     var todayDate = new Date();
//     var stringFormatedDate = НЕШТО.match(/(\d\d)(\d\d)(\d\d\d\d)/); //01 23 1996
//     var date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);
// 3. За превземање на денот во месецот се користи НЕКОИ_СИ_ДАТУМ.getDate(), за месецот НЕКОИ_СИ_ДАТУМ.getMonth() + 1, за годината НЕКОИ_СИ_ДАТУМ.getFullYear()
// let todayDateDate = todayDate.getDate();
// let todayDateMonth = todayDate.getMonth() + 1;
// let todayDateFullYear = todayDate.getFullYear();
// 4. Доколку му/и е роденден испечатете порака "Srekjen rodenden" и во продолжение дали е полнолотен/а.