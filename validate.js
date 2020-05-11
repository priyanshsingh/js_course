 function submitFn(){
  var un = document.getElementById("uname").value
  var pw = document.getElementById("pword").value

    if(un.trim()==""){
    
      alert("Blank username!!!")
      return false
    }
    else if (pw.trim()==""){
      alert("Blank password!!!")
      return false
    }
    else if(pw.trim().length<5){
      alert("Password too short")
      return false
    }
    else {
      return true
    }
 }

