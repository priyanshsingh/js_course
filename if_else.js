// Whether the input number is positive or negative, even or odd, or zero. 



var x = 2
  if(x>0 && x%2==0){
    console.log("Number is Positive and Even");
  }
  else if(x>0 && x%2!=0){
    console.log("Number is Positive and Odd");
  }
  else if(x<0 && x%2==0){
    console.log("Number is Negative and Even");
  }
  else if(x<0 && x%2!=0){
    console.log("Number is Negative and Odd");
  }
  else{
    console.log("Number is Zero!!!")
  }
