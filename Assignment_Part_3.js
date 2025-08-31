// Part 3 : Arrays

// 1. Rearranging with splice()
//     * Start with an array ["pen", "book", "eraser", "scale"].
//     * Remove "eraser" and insert "pencil" at the same place.
//     * Show the updated array.

let arr = ['pen', 'book', 'eraser', 'scale'];
console.log(arr);

arr.splice(2,1,'pencil');
console.log(arr);

// 2. Finding the maximum
//     * Given [10, 45, 67, 23, 89, 12], find the largest number using Math.max.apply(null, array).

let num = [10, 45, 67, 23, 89, 12];

let largest = Math.max.apply(null, num);

console.log('The largest number is '+largest);

// 3. String to Array & Back
//     * Take a string "apple,banana,orange".
//     * Convert it into an array using split().
//     * Then convert back into a string "apple | banana | orange" using join().

var fruits = 'apple,banana,orange';

var split = fruits.split(',');
var arrfruits = Array(split);

console.log(arrfruits);

var strfruits = String(arrfruits);

console.log(strfruits);

// 3. Create an array of 5 colors. Show the 3rd color using its index.

let color = ['red','blue','green','yellow','black'];

console.log(color[2]);

// 4. Make an array of numbers [10, 20, 30, 40, 50]. Find the position of 30 using

var number = [10,20,30,40,50];

var position = number.indexOf(30);

console.log('The position of the value 30 is : '+position);

// 5. Create an array of names ["Amit", "Rahul", "Sneha", "Priya"].
//     * Add one more name at the end using push().
//     * Remove the first name using shift().
//     * Show the final array in the console.

let names = ["Amit", "Rahul", "Sneha", "Priya"];

names.push("Sruthi");

names.shift();

console.log(names);

// 6. Make an array of numbers [100, 200, 300].
//     * Use concat() to add another array [400, 500].
//     * Show the new array in the console.

let num1 = [100, 200, 300];
let num2 = [400, 500];

let num3 = num1.concat(num2);

console.log(num3);

// 7. Create an array ["HTML", "CSS", "JavaScript"]. Use reverse() to reverse the order. Show it in an alert.

let software = ['HTML','CSS','JavaScript'];

software.reverse();

alert(software);

// 8. Create an array of numbers [2, 4, 6, 8, 10]. Use every() to check if all numbers are even.

let array1 = [2, 4, 6, 8, 10];

let even = array1.every(function(num) {
  return num % 2 === 0;
});

console.log(even);

// 9. Create an array of ages [12, 18, 20, 25]. Use some() to check if there’s at least one person under 18.

let age_group = [12, 18, 20, 25];

let minor = age_group.some(function(age) {
  return age < 18;
});

console.log(minor);
