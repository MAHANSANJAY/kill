
function bmi()
{

  var height=document.getElementById("height").value;
  var weight=document.getElementById("weight").value;
  var bmi=(weight/(height*height)*703).toFixed(2);
 document.querySelector("p#result").innerHTML="THE VALUE IS"+" :"+ bmi;
  if(bmi<18)
  {
    document.getElementById("final").innerHTML="YOU ARE UNDERWEIGHT";
  }
   else if(bmi<24)
  {
  document.getElementById("final").innerHTML="NORMAL";
  }
  else if(bmi<29)
  {
      document.getElementById("final").innerHTML="OVER WEIGHT"
  }
  else if(bmi<30)
  {
      document.getElementById("final").innerHTML="OBESE"
  }
  else if(bmi>35)
  {
    document.getElementById("final").innerHTML="EXTREMELY OBESE";
  }
  else {
    {
      document.getElementById("final").innerHTML="please enter the valid input";
    }
  }
}

function refresh()
{
document.querySelector("p#result").innerHTML=" ";
document.getElementById("final").innerHTML=" ";
  }
