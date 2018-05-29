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

function getValue(idName)
{
	return (parseInt($(idName).val()));
}

function setValue(idName,returnValue)
{
	$(idName).val(returnValue);
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
		var returnValue = add(number1,number2).toString();
		setValue("#returnValue",returnValue);
  });

	$("#btn-subtract").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = subtract(number1,number2).toString();
		setValue("#returnValue",returnValue);
  });

	$("#btn-multiply").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = multiply(number1,number2).toString();
		setValue("#returnValue",returnValue);
  });

	$("#btn-divide").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = divide(number1,number2).toString();
		setValue("#returnValue",returnValue);
  });

	$("#btn-modulo").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = modulo(number1,number2).toString();
		setValue("#returnValue",returnValue);
  });

	$("#btn-exponent").click(function()
  {
		var number1 = getValue("#number1");
		var number2 = getValue("#number2");
		var returnValue = exponent(number1,number2).toString();
		setValue("#returnValue",returnValue);
  });

	$("#btn-clear").click(function()
  {
		clearValue("#number1");
		clearValue("#number2");
		clearValue("#returnValue");
  });

});
