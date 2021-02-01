// 1. Write a simple register program that will take new user's username and password and save it. Display the usernames of all existing users in a list.
// - Users should be stored in array of User objects
// - Array need to have one admin user by default when the application is started
// - User need to have at least 3 properties: Username, Password and isAdmin
// 2. Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app"). 
// 3. Add an option for logging out.
// 4. Add some further validation to all input fields for the usernames and passwords
// - The user has to enter both username and password
// - Register or login should not proceed with empty inputs
// - Username needs to include more than 3 characters
// - Password has to be longer than 6 characters
// 5. Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usersnames and passwords in a list or table.

let existingUser = [
    {
        username: "Filip",
        password: "filip123",
        isAdmin: true
    },
    {
        username: "Darko",
        password: "darko123",
        isAdmin: false
    }
]
let newUserName = document.getElementById("userName");
let newUserPassword = document.getElementById("userPassword");
function userExists(){
    for (let i = 0; i < existingUser.length; i++){
        if (newUserName.value === existingUser[i].username){
            return true    
        }
    }
}

document.getElementById("registerButton").addEventListener("click", function (){
    if (newUserName.value !== undefined && newUserName.value.length > 2 && newUserPassword.value !== undefined && newUserPassword.value.length > 5){
        userExists;
        if(userExists()){
            alert(`Username unavailable`);
        }
        else{
            existingUser.push({
                username: newUserName.value,
                password: newUserPassword.value,
                isAdmin: false
            })
        }
    }
    else {
        alert(`username Min:3 chars, Password min: 6chars`)
    }
})

let newLoginUserName = document.getElementById("loginUserName");
let newLoginPassword = document.getElementById("loginPassword");
function userLogin(){
    for (let i = 0; i < existingUser.length; i++){
        if(newLoginUserName.value === existingUser[i].username && newLoginPassword.value === existingUser[i].password){
            return true
        }
    }
}
function currentUserAdminCheck(){
    for (let i = 0; i < existingUser.length; i++){
        if(newLoginUserName.value === existingUser[i].username && existingUser[i].isAdmin === true){
            return true
        }
    }
}

document.getElementById("loginButton").addEventListener("click", function (){
    if(newLoginUserName.value !== undefined && newLoginUserName.value.length > 2 && newLoginPassword.value.length !== undefined && newLoginPassword.value.length > 5){
        userLogin;
        if(userLogin()){
            alert(`Welcome back ${newLoginUserName.value}`)
            currentUserAdminCheck;
            if(currentUserAdminCheck()){
                alert("You're admin, we'll print all usernames and passwords with admin status")
                for (user of existingUser){
                    document.getElementById("adminDiv").innerHTML +=
                    (
                        `
                            <ul>
                                    <li>Username: ${user.username}</li> <br / >
                                    <li>Password:${user.password}</li> <br/ >
                                    <li>Admin: ${user.isAdmin}</li> <br/ >
                            </ul>
                        `
                    )
                }
            }
        }
        else{
            alert("Invalid username or password")
        }
    }
    else {
        alert(`Invalid username or password`)
    }
})
document.getElementById("logoutButton").addEventListener("click",function (){
    document.body.innerHTML = `<h1>You have been logged out<h1> `

})