let RobotsOfDawn = {
    title : "The Robots of dawn",
    author: "Isaac Asimov",
    readingStatus : "read",
    returnInfo : document.getElementById("checkButton").addEventListener("click",function (){
        if (document.getElementById("robotsOfDawn").checked){
            console.log(`You have ${RobotsOfDawn.readingStatus} ${RobotsOfDawn.title} by ${RobotsOfDawn.author}`)
        }
},false)
}

let Mockingjay = {
    title : "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus : "not read",
    returnInfo : document.getElementById("checkButton").addEventListener("click",function (){
        if (document.getElementById("mockingjay").checked){
            console.log(`You have ${Mockingjay.readingStatus} ${Mockingjay.title} by ${Mockingjay.author}`)
        }
},false)

}
