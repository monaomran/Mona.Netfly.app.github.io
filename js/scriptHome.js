
var user= JSON.parse( localStorage.getItem("currentUser"))

function welcomeUser(){
    console.log(user);
    document.getElementById("welcome").innerHTML=`<h1>Welcome ${user.userName}</h1>`;
}
welcomeUser();