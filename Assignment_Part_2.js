// Part 2: Conditional Statements
// 1. Ask the user for a number using prompt(). Check if it’s even or odd, and show the result in an alert.

let number = prompt('Enter a number:');

if (number % 2 === 0) {
        alert(number + ' is an even number.');
    } else {
        alert(number + ' is an odd number.');
    }

// 2. Write a script that asks the user for their marks (out of 100).
//     * If marks ≥ 90 → Show "Grade A"
//     * If marks ≥ 75 → Show "Grade B"
//     * If marks ≥ 50 → Show "Grade C"
//     * Otherwise → Show "Fail"

let marks = prompt('Input marks');

if(marks >= 90){
    console.log('Grade:A');
}
else if(marks >=75){
    console.log('Grade is B');
}
else if(marks >=50){
    console.log('Grade is C');
}
else{
    console.log('Fail');
}

// 3. Use prompt() to ask the user for a day number (1–7). Use a switch statement to print the day name (e.g., 1 → Monday).

let day = Number(prompt('Enter the day number'));
switch(day){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Not a valid day');
}

// 4. Use a ternary operator to ask the user for their age.
//     * If age ≥ 18 → "You are an adult"
//     * Else → "You are a minor"

let age = Number(prompt('Enter your age'));

(age >= 18) ? console.log('You are an adult') :  console.log('You are a minor');

// 5. Ask the user to enter a password.
//     * If the password matches "12345", show "Login Successful".
//     * Otherwise show "Wrong Password".

let password = prompt("Enter your password");

if(password === '12345'){
    console.log('Login Successful');
}
  else{
    console.log('Wrong Password');
  } 

// 6. Ask the user for a number.
//     * If the number is positive
//         * Check if it’s also even or odd.
//     * Else if the number is negative
//         * Show "Negative number".
//     * Else show "Number is zero".

let num = Number(prompt('Enter a number'));

if (num > 0) {
    if (num % 2 === 0) {
    alert('Positive and Even number');
  } else {
    alert('Positive and Odd number');
  }
} else if (num < 0) {
  alert('Negative number');
} else {
  alert('Number is zero');
}

// 7. Ask the user for their age and whether they have a driving license (yes/no).
// * If age ≥ 18
//     * If license is "yes" → Show "You can drive"
//     * Else → Show "You are eligible by age but don’t have a license"
//     * Else → Show "You are underage"

let age1 = (prompt('Enter your age'));
if (age1 >= 18) {
  let license = prompt('Do you have a driving license?');
  
  if (license === "yes") {
    alert('You can drive');
  } else {
    alert('You are eligible by age but don’t have a license');
  }

} else {
  alert('You are underage');
}

// 8. Ask the user to enter username and password.
//     * If username = "admin"
//         * If password = "1234" → Show "Welcome Admin"
//         * Else → Show "Wrong password"
//         * Else → Show "Invalid username"

let username = prompt("Enter your username");
let pwd = prompt("Enter your password");

if (username === "admin") {
  if (pwd === "1234") {
    alert("Welcome Admin");
  } else {
    alert("Wrong password");
  }
} else {
  alert("Invalid username");
}
