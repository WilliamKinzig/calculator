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

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var resultAdd = add(number1, number2);
var resultSubtract = subtract(number1,number2);
var resultMultiply = multiply(number1,number2);
var resultDivide = divide(number1,number2);

alert("Add: "+resultAdd+" Subtract: " +resultSubtract+
" Multiply: "+resultMultiply+" Divide: "+resultDivide);


/*
var string1 = "This is a test.";
var string2 = string1.replace(/test/i,"calculator");
alert(string2);
*/

/*
function calculateBMI(mass,height)
{
  //mass in pounds, height in inches
  return ((mass/(height*height))*703);
}

var mass = parseInt(prompt("Enter your weight (lbs):"));
var height = parseInt(prompt("Enter your height (inches):"));
alert("Your Body Mass Index is: " + calculateBMI(mass,height));
*/
