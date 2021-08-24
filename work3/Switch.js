let login = "Admin";
let password = "TheMaster";
let canled = false;
let flag=true;
if(login != "Admin"){
    console.log("Please print true login");
    flag=false;
    
}
switch(login,canled,flag){
    case "Admin",false,true:{
        console.log('Password? ');
        if(password != "TheMaster"){
            console.log("Please print true password");
        }
        switch(password){
            case "TheMaster":{
                console.log("Wellcom!!!")
            }
        }
        break;
    }
    case "Admin",true,true:{
        console.log("Canled.");
        break;
    }
}