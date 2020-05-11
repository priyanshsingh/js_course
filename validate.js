  function submitFn(){
  var un = document.getElementById("uname").value
  var pw = document.getElementById("pword").value

    if(un.trim()==""){
    
      // alert("Blank username!!!");
      uname.style.border = "solid 3px red";
      document.getElementById("lblun").style.visibility="visible";
      return false
    }
    else if (pw.trim()==""){
      pword.style.border = "solid 3px red";
      document.getElementById("lblpw").style.visibility="visible";      
      return false
    }
    else if(pw.trim().length<5){
      // alert("Password too short");
      pword.style.border = "dotted 3px red";
      document.getElementById("lblpw2").style.visibility="visible";  
      return false
    }
    else {
      return true
    }
 }


 function regularExpressions(){
  var inputusername = document.getElementById("inputusername").value
  var r = /E00/i ;

    if(r.test(inputusername)){
      alert ("Valid Username");
      return true
    }
    else{
      alert ("Invalid Username")
      return false
    }
 }



function mobileValidation(){
  var mobno = document.getElementById("mobileNo").value
  var validateNo = /^[7-9]\d{9}$/;

    if(validateNo.test(mobno)){
      document.getElementById("lablemob").innerHTML = "Valid Mobile Number";
      document.getElementById("lablemob").style.visibility = "visible";
      document.getElementById("lablemob").style.color = "Green"; 
   
          
    }

    else{
      document.getElementById("lablemob").innerHTML = "Invalid Mobile Number";
      document.getElementById("lablemob").style.visibility = "visible";
      document.getElementById("lablemob").style.color = "Red";
      
    }
}


function emailValid(){
  var email = document.getElementById("enteredEmail").value
  var validateEmail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8}).([a-z]){2,8}$/;

    if(validateEmail.test(email)){
      document.getElementById("lblvalid").innerHTML = "Valid Email";
      document.getElementById("lblvalid").style.visibility = "visible";
      document.getElementById("lblvalid").style.color = "Green"; 
      document.getElementById("lblvalid").style.fontWeight = "Bold";
          
    }

    else{
      document.getElementById("lblvalid").innerHTML = "Invalid Email";
      document.getElementById("lblvalid").style.visibility = "visible";
      document.getElementById("lblvalid").style.color = "Red";
      document.getElementById("lblvalid").style.fontWeight = "Bold";
    }
}