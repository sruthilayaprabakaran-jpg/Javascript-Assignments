// Part 1: Variables, alert, prompt, confirm
// 1. Declare a variable name and assign your name to it. Show it using alert().
var name = 'Vineeth V';
alert(name);

// 2. Ask the user for their age using prompt(). Store it in a variable and display it back using alert().
var age = prompt('Enter your age');
alert('Age = ' + age);

// 3. Use confirm() to ask the user: "Do you like JavaScript?". Store the result in a variable and display it in the console.
js = confirm('Do you like JavaScript?');
console.log(js);

// 4. Write a script where you:
//     * Use prompt() to ask the user for two numbers.
//     * Store them in variables.
//     * Perform Arithmetic operations (Add Substract Divide Multiply and Modulo) and show the result in an alert.
alert('Provide two numbers');
var a = prompt('a = ');
var b = prompt('b = ');

//Add
var add = Number(a) + Number(b);
alert(add);

//Subtract
var subtract = a - b;
alert(subtract);

//Divide
var div = a / b;
alert(div);

//Multiply
var multiply = a * b;
alert(multiply);

//Modulo
var mod = a % b;
alert(mod);
