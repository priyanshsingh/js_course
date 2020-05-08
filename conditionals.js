// Whether the input number is positive or negative, even or odd, or zero ------------ If-Else



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




// type the number of day and get the name of the corresponding day using switch case -------------switch_case

var day = 7
  switch(day){
    case 1 :
      console.log("Monday");
      break;
    case 2 :
      console.log("Tuesday");
      break;
    case 3 :
      console.log("Wednesday");
      break;
    case 4 :
      console.log("Thursday");
      break;
    case 5 :
      console.log("Friday");
      break;
    case 6 :
      console.log("Saturday");
      break;
    case 7 :
      console.log("Sunday");
      break;
  } 