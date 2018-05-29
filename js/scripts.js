function add(number1,number2)
{
	return (number1+number2);
}

function subtract(number1,number2)
{
	return (number1-number2);
}

function multiply(number1,number2)
{
	return (number1*number2);
}

function divide(number1,number2)
{
	return (number1/number2);
}

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var resultAdd = add(number1, number2);
// var resultSubtract = subtract(number1,number2);
// var resultMultiply = multiply(number1,number2);
// var resultDivide = divide(number1,number2);
// alert("Add: "+resultAdd+" Subtract: " +resultSubtract+
// " Multiply: "+resultMultiply+" Divide: "+resultDivide);


$(function()
{
  $("#btn-add").click(function()
  {

		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
		var returnValue = add(number1,number2);
		$("#returnValue").val(returnValue);
  });

});
