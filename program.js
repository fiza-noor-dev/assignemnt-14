//program 1
var text ="i like apple pie and apple juice."
var result =text.replace("apple","greenapple")
console.log(result);
//program 2
var paragraph="My car speed is faster then your care beacuse my car is new"
while(paragraph.includes("car")) {
    paragraph=paragraph.replace("car","bike")
}
console.log(paragraph)
//program 3
var str="pub game is fun";
var hyphenstr=str.replace( / /g,"-")
console.log(hyphenstr);
//program 4
var str4 = "price99";
var result4 = str4.replace(/\d+/g, "120");
console.log(result4);
//program 5
var  fruits = ["apple", "banana", "mango", "orange"];
var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);
//program 6
var floatNum = parseFloat(prompt("Enter a floating number:"));
console.log("Ceil value:", Math.ceil(floatNum));
//prgram 7
let floatNum2 = parseFloat(prompt("Enter a floating number:"));
console.log("Floor value:", Math.floor(floatNum2));
//program 8
let num = parseFloat(prompt("Enter a number:"));
console.log("Rounded value:", Math.round(num));
//program 9
function sum(a,b){
    console.log("sum",a+b);
}
sum(5,10)
//program 10
function square(n){
    console.log("square",n*n)
}
square(10)
//program 11
var now=new Date();
console.log(now)
//program 12 
var today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1); 
console.log("Day:", today.getDate());

//program 13
var futureDate = new Date();
futureDate.setFullYear(2030);
console.log(futureDate);
//program 14
let nextBirthday = new Date("2006-06-31"); 
console.log("Next Birthday:", nextBirthday);
//program 15
function calculateAge(birthYear) {
    var currentYear = new Date().getFullYear();
    console.log("Your age is:", currentYear - birthYear);
}
calculateAge(2000);
//program 15
var todayDate = new Date();
  var endOfYear = new Date(todayDate.getFullYear(), 11, 31);
var diffTime = endOfYear - todayDate;
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log("Days left ", diffDays);
//program 16
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(10, 25, 15));
//program 17
function randomBetween1And(n) {
    return Math.floor(Math.random() * n) + 1;
}
console.log(randomBetween1And(20));






