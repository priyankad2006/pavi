function addition()
{
var number1=document.getElementById("t1").value;
var number2=document.getElementById("t2").value;
var sum=parseFloat(number1)+parseFloat(number2);
document.getElementById("result").value=sum;
}