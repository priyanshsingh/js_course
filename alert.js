function alertFn()
{
  alert("This is an example of alert terminated through a function !");
}



function alertFn2()
{
  var x = document.getElementById('head1').innerHTML;
  alert(`The heading is ${x}`);
}



function alertFn3()
{
  var x = document.getElementById('pass1').value;
  var y = document.getElementById('pass2').value;
  
  if(x==="" || y==="")
    {
      alert(`You didn't enter any password!!!`)
    }

  else if(x==y)
    {
      alert('Passwords Matched')
    }
  else
      alert(`Passwords didn't Match`)

}



function radioFn()
{
  var x = document.getElementsByName('grp1');

    if(x[0].checked)
      alert("The selected channel is "+ x[0].value);
    else if(x[1].checked)
      alert("The selected channel is "+ x[1].value);
    else
      alert("No channel is selected");


}


function selectbox() {
  var x = document.getElementById('selectbox')
  for (i = 0; i < x.length; i ++){
    if(x[i].selected){
      alert(x[i].value);
      break;
    }
  }
}
