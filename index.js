
var catogories={
  

}
var msge=document.getElementById("msg");
var user = document.getElementById("usern").value;
function userid(){
    if(catogories.username===user){
        msge.innerHTML="";

    }
    else{
        msge.innerHTML="Invalid UserName";
        msge.style.color="red";
    }
}
1
var attempt=4;
function loginclick(){

    
    var password=document.getElementById("passn").value;
    var invalidmsg=document.getElementById("invalid");
    var passwor=document.getElementById("passn");
  
   
   if(catogories.password===password){
    invalidmsg.innerHTML=""
    
   }
   else{
    if(attempt==1){
        invalidmsg.innerHTML="Your Account Is Blocked"
        passwor.disabled=true;
        invalidmsg.style.color="red";
    }
    else{
        attempt=attempt-1;
        invalidmsg.innerHTML=`invalid password ${attempt} attempt remain`


    }
}

}                    

