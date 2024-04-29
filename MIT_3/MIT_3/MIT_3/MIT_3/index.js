var first=document.getElementById("first").value
var last=document.getElementById("last").value
var email=document.getElementById("email").value
var password=document.getElementById("password").value


function claim(){
 
    if(first.length<4 || first.trim()===" "){
        alert("*first name is invaild")
        return false
    }
    else{
        alert("*valid first name")
    }

    if(last.length<4 || last.trim()===" "){
        alert("*last name is invaild")
        return false
    }
    else{
        alert("*valid last name")
    }

    if(password.length<6 || password.length>16|| password.trim()===""){
        alert("*password is invaild")
        return false
    }
    else{
        alert("*password is vaild")
    }

    if(first  ==password){
        alert("*first and last name and password should not be same")
        return false
    }
    else{
        alert("*valid name and password")
    }


}
