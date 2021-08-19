var users;

if(localStorage.getItem("usersData")== null){
    users=[];
}
else{

    users= JSON.parse(localStorage.getItem("usersData"));
}


function loginValidation(){

    var email= document.getElementById("email").value;
    var pass= document.getElementById("pass").value;
    var cond=false;

    for(var i=0 ; i<users.length ;i++){

        if(users[i].userEmail== email && users[i].userPass== pass){
            localStorage.setItem("currentUser" , JSON.stringify( users[i]));
            window.location.replace("homePage.html");
            cond=true;

           
        }

    }
    if(!cond){

        document.getElementById("emailCheck").innerHTML='<P class=" text-danger ">wrong email or password</P>';
    }

 
}
