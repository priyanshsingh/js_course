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