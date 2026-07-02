// Q  1
function CurrentDateTime(){
    let currentDate = new Date();
    document.write(currentDate);
}
CurrentDateTime();

// Q 2
function greetUser (firstName, lastName){
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "! wellcome.");
}
greetUser("sejal" , "jungkook");


// Q 3 
function addTwoNumbers(){
    let num1 = parseFloat (prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    let sun = num1 + num2;
    return Sum;
}

let total = addTwoNumbers();
alert("The sum is: " + total);

// Q 4
function calculator(num1, num2, operator){
    let result;
    if(operator === '+'){
        result = num1 + num2;

    }else if (operator === '-'){
     result = num1 - num2;

    }else if (operator === '*'){
        result = num1 * num2;

    }else if (operator === '/'){
        result = num1  /  num2;

    }else{
        result = "Cannot divide by zero";
    
    }else{
    result = "Invalid password";
}
document.write("Result: " + result + "<br>");
return result;
} 

 calculator(10, 5, '+');

// Q 5
 function square(num) {
    return num * num;
 }
let resultSquare = square(5);
console.log(resultSquare);

// Q 6
function factorial(num) {
    if (num < 0) return "Invalid input for factorial";
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5)); 

// Q 7
function displayCounting(start, end) {
    let countingText = "";
    for (let i = start; i <= end; i++) {
        countingText += i + " ";
    }
    document.write("Counting: " + countingText + "<br>");
}

// Function call example
displayCounting(1, 10);


// Q 8
function calculateHypotenuse(base, perpendicular){
    function calculateSquare(num){
        return num * num;
    }
 let baseSquare = calculateSquare(base);
 let perpSquare = calculateSquare(perpendicular);

let hypotenuse = Math.sqrt(baseSquare + perpSquare);
}f

let hyp = calculateHypotenuse(3, 4);
console.log("Hypotenuse: " + hyp) ;


// Q 9 
function calculateArea(width, height){
    let area = width * height ;
    document.write("Area of Ractangle: " + area + "<br>");
} 
calculateArea(5,10);
let w = 8 ;
let h = 12;
calculateArea(w,h);


// Q 10
function checkPalindrome(str) {
    let cleanStr = str.toLowerCase();
    let reversedStr = cleanStr.split('').reverse().join('');
    
    if (cleanStr === reversedStr) {
        console.log(str + " is a palindrome.");
    } else {
        console.log(str + " is not a palindrome.");
    }
}

checkPalindrome("madam"); 
checkPalindrome("hello"); 


//   q 11
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let result = capitalizeFirstLetter('the quick brown fox');
console.log(result); 


// Q 12
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

let longest = findLongestWord('Web Development Tutorial');
console.log(longest); 

// 13
function countLetter(str, letter) {
    let count = 0;
    let cleanStr = str.toLowerCase();
    let cleanLetter = letter.toLowerCase();

    for (let i = 0; i < cleanStr.length; i++) {
        if (cleanStr.charAt(i) === cleanLetter) {
            count++;
        }
    }
    return count;
}
let letterCount = countLetter("JS Resource, JS Assignment", "s");
console.log("Letter count is: " + letterCount);


// Q 14
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}
calcCircumference(5);

function calcArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log("The area is " + area.toFixed(2));
}
calcArea(5);

let r = 7; 

calcCircumference(r); 
calcArea(r);          