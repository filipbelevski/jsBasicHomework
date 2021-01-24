// HOMEWORK #1
// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

let personArray = ["Filip", "happy", "doing homework"];

function tellStory(){
    console.log("This is", personArray[0],".",personArray[0],"is a nice person.","Today they are",personArray[1],".", "They are",personArray[2],"all day.");
}

tellStory();


//HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

let numberArray = [2, 50 , 3, 10, 20];

function validateAndSumNumber(){
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++)
        sum += parseInt(numberArray[i]);
        if (isNaN(sum) === true) {
            console.error("Enter a valid number");
        }
        else {
            console.log(sum);
        }
}
validateAndSumNumber();

// HOMEWORK #3 
// STUDENT EXERCISE
// Decription: The Math object allows you to perform mathematical tasks.
// Math.pow(x,y); - Returns the value of x to the power of y
// Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
// Time to accomplish: 15 minutes.

let numbersArray = [101, 120, 135,125, 150];
function numberSquared (){  
    let sum = 0;
    for (i = 0; i < numbersArray.length; i++){
        sum += Math.pow(numbersArray[i], 2);
    }
    console.log(sum);
}

numberSquared ();



// HOMEWORK #4

// STUDENT EXERCISE - #1
// FIND NUMBERS IN ARRAY
// How many times is a number contained in an array

// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.
// Time to accomplish: 15 minutes.

let firstArray = [2, 5, 10 , 2 , 5, 30, 2, 5, 22, 2, 10, 35, 22];
let secondArray = [3, 3, 3, 25, 2, 3, 10, 25, 39, 3, 22, 2, 5, 4]
let thirdArray = [10, 5, 2, 2, 2, 5, 5, 25, 5, 2, 35, 3, 25, 3, 10, 25, 5]
function findNumber(x, array){
    let sum = 0
    for (i = 0; i < array.length; i++){
        if (x === array[i]){
            sum++
        }
    }
    console.log("There is",sum,"occurencies of number",x,"in the array")

}
findNumber(2,firstArray);
findNumber(3,secondArray);
findNumber(5,thirdArray);


//Homework #
// STUDENT EXERCISE - #2
// FILTER ODD/EVEN NUMBERS FUNCTION
// Write a function named findNumber that:
// Takes 2 arguments: array, type
// The person that calls the function should provide an array of numbers and string odd / even
// If the type is even the function should find all the even numbers and return them as result
// If the type is odd the function should find all the odd numbers and return them as result
// Time to accomplish: 20 minutes.

let evenOddArray = [1, 5, 3, 23, 11, 21, 10, 55, 21, 29, 34, 88, 66, 31, 93, 83, 24, 23, 21, 22, 15, 50];

function evenOdd(x, array ){
    result = []
   if (x === "even"){
       for (i = 0; i < array.length; i++){
           if (array[i]%2 === 0){
                result.push(array[i]);
           } 
       } console.log(result);
   }
   else if (x === "odd"){
        for (i = 0; i < array.length; i++){
            if (array[i]%2 != 0){
                result.push(array[i])
            } 
        } console.log(result);
   }
  
}
evenOdd("even", evenOddArray);
evenOdd("odd", evenOddArray);


// HOMEWORK #6
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

let arrayOfStrings = ["Neznam","sho","da","napisham","ama","ete","napishav"];

function bigString(array){
    let string = "";
    for (i = 0; i < array.length; i++){
        string += (array[i] + " ");
    }
    console.log(string);
}
bigString(arrayOfStrings);

//Homework #7
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

let oneToTwenty = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function someFunction(array){
    let result = ""
    for ( i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            result += (array[i] + "\n")
        }
        else if(array[i]%2 != 0){
            result+= (array[i] + " ");
        }
    }
    console.log(result);
}

someFunction(oneToTwenty);

// Homework #8
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

minMaxArray = [3, 25, 2, 10, 12, 52, 31, 4, 1,"string","ming", true, null, 4, 64 ]

function minMax(arr){;
    let max = 0;
    let min = 99999;

    for (i = 0; i < arr.length; i++){
        if (arr[i] > max){
           max = arr[i];
           if(arr[i] < min){
               min = arr[i];
           }
        }
    }
    console.log("Max:",max,"Min:",min,"Sum:",(max + min));
}

minMax(minMaxArray);


// Homework #9
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ["Marc","Jill","Chris","Jake","Bob"]
let lastNames =["Gregory","Wurtz","Pratt","Evans","Robinson"]

function fullnames(x,y){
    let firstName = 0;
    let lastName = 0; 
    full =[];
    for (i = 0, j = 0; i < x.length, j < y.length; i++, j++){
        firstName = x[i];
        lastName = y[j];
        full.push([i+1] + "." + " " + firstName + " " + lastName)
    }
    console.log(full)
}
fullnames(firstNames,lastNames);