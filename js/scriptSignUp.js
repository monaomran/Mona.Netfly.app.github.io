

var users;

if(localStorage.getItem("usersData")== null){
    users=[];
}
else{

    users= JSON.parse(localStorage.getItem("usersData"));
}

function signUp(){
    var user= {   
        userName: document.getElementById("name").value,
        userEmail: document.getElementById("email").value,
        userPass: document.getElementById("pass").value
    }
    
    if(!validateSignUp(user.userEmail))
        document.getElementById("emailCheck").innerHTML='<P class=" text-danger ">email already exists</P>';
    else{
        document.getElementById("emailCheck").innerHTML='<p class="text-success">success</p>';
        users.push(user);
        console.log(users);
        localStorage.setItem("usersData", JSON.stringify(users));

    }
    
    
}

function validateSignUp( email){

    for(var i=0 ; i<users.length ; i++){
        console.log(i+"  email: "+ users[i].userEmail +"   taken email: "+email )
        if(users[i].userEmail==email){

            return false;
        }
    }
    return true;

}



