function addition()
{
    let num1 = eval(prompt("Enter First Number : "));
    let num2 = eval(prompt("Enter Second Number : "));
    let sum = num1 + num2;   
    document.querySelector('#result').value=`${sum}`;

}

function substract()
{
    let num1 = eval(prompt("Enter First Number : "));
    let num2 = eval(prompt("Enter Second Number : "));
    let sum = num1 - num2;   
    document.querySelector('#result').value=`${sum}`;

}

function multiply()
{
    let num1 = eval(prompt("Enter First Number : "));
    let num2 = eval(prompt("Enter Second Number : "));
    let sum = num1 * num2;   
    document.querySelector('#result').value=`${sum}`;

}

function devide()
{
    let num1 = eval(prompt("Enter First Number : "));
    let num2 = eval(prompt("Enter Second Number : "));
    let sum = num1 / num2;   
    document.querySelector('#result').value=`${sum}`;

}
