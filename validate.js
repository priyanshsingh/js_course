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
  var mobno = document.getElementById(mobileNo.).value
  var validateNo = /^[7-9]\d$/;

    if(validateNo.test(mobno)){
      document.getElementById = ("labelmob").innerhtml = "Valid  Mobile No.";
      document.getElementById = ("labelmob").style.visibility : visible;
      document.getElementById = ("labelmob").style.color : Green;      
    }

    else{
      document.getElementById = ("labelmob").innerhtml = "Invalid  Mobile No.";
      document.getElementById = ("labelmob").style.visibility : visible;
      document.getElementById = ("labelmob").style.color : Red;
    }
}