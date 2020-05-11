 function submitFn(){
  var un = document.getElementById("uname").value
  var pw = document.getElementById("pword").value

    if(un.trim()==""){
    
      // alert("Blank username!!!");
      uname.style.border = "dotted 2px red";
      document.getElementById("lblun").style.visibility="visible";
      return false
    }
    else if (pw.trim()==""){
      pword.style.border = "dotted 2px red";
      document.getElementById("lblpw").style.visibility="visible";      
      return false
    }
    else if(pw.trim().length<5){
      alert("Password too short");
      return false
    }
    else {
      return true
    }
 }



