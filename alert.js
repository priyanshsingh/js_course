function alertFn()
{
  alert("This is an example of alert terminated through a function !");
}


function alertFn3()
{
  var x = document.getElementById('pass1').value;
  var y = document.getElementById('pass2').value;
  if(x==y)
    {
      alert('Passwords Matched')
    }
  else
      alert(`Passwords didn't Match`)

}


function alertFn2()
{
  var x = document.getElementById('head1').innerHTML;
  alert(`The heading is ${x}`);
}