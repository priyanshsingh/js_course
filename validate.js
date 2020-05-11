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
  var r = /E00/ ;

    if(r.test(inputusername)){
      alert ("Valid Username");
      return true
    }
    else{
      alert ("Invalid Username")
      return false
    }
 }
