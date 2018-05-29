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

function modulo(number1,number2)
{
	return (number1%number2);
}

function exponent(number1,number2)
{
	return (Math.pow(number1,number2));
}

function nRoot(number1,number2)
{
	//Square Root would have number2 = 2
	return (Math.pow(number1,(1/number2)));
}

function getValue(idName)
{
	//Change from int to float
	//return (parseInt($(idName).val()));
	return (parseFloat($(idName).val()));
}

function setValue(idName,returnValue)
{
	$(idName).val(returnValue.toFixed(2).toString());
}

function clearValue(idName)
{
	$(idName).val("");
}

$(function()
{
  $("#btn-add").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = add(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-subtract").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = subtract(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-multiply").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = multiply(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-divide").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = divide(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-modulo").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = modulo(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-exponent").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = exponent(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-nth-root").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = nRoot(number1,number2);
		setValue("#returnValue",returnValue);
  });

	$("#btn-clear").click(function()
  {
		clearValue("#number1");
		clearValue("#number2");
		clearValue("#returnValue");
  });

});
