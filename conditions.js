// ****To evaluate Answers uncomment one by one by checking the Question number****


//11th Question 3 Characters input to Ascii

// let prompt = require("prompt-sync")()
// function chartoascii(){
//     while(true){
//         let a = prompt("Enter 1st character or stop:");
//         let b = prompt("Enter 2nd character or stop:");
//         let c = prompt("Enter 3rd character or stop:");

//         if(a.toLowerCase()==="stop"||b.toLowerCase()==="stop"||c.toLowerCase()==="stop"){
//             console.log("you entered stop");
//             break;

//         }
//         if(a.length === 1||b.length === 1||c.length === 1){
//             console.log(`Ascii value of ${a} is ${a.charCodeAt(0)}`);
//             console.log(`Ascii value of ${b} is ${b.charCodeAt(0)}`);
//             console.log(`Ascii value of ${c} is ${c.charCodeAt(0)}`);

//         }
//     }
// }
// chartoascii();


//12th Question age input to age groups

// let prompt = require("prompt-sync")()
// let age = Number(prompt("enter your age:"))

// function ageinput(num){
//     if(num<0){
//         return "invalid input or (input>0)"
//     }else if(num<12){
//         return "your are child"
//     }else if(num>12 && num<19){
//         return "your are Teenager"
//     }else if(num>20&&num<35){
//         return "your are Young adult"
//     }else if(num>35&&num<59){
//         return "your are  adult"
//     }else{
//         return "you are old"
//     }
// }

// console.log(ageinput(age))


//13th Question student grade

// let prompt = require("prompt-sync")()
// let score = Number(prompt("enter your score:"))
// function gradeassign(a){
//     if(a<0){
//         return "invalid score"
//     }else if(a<33){
//         return "F"
//     }else if(a>33&&a<50){
//         return "D"
//     }
//     else if(a>50&&a<65){
//         return "C"
//     }
//     else if(a>65&&a<85){
//         return "B"
//     }
//     else if(a>85&&a<100){
//         return "A"
//     }
// }
// console.log(gradeassign(score));


//14th Question divisibilty check

// let prompt = require("prompt-sync")()
// let a = Number(prompt("Enter first Number:"))
// let b = Number(prompt("Enter second Number:"))
// if(a%b===0){
//     console.log(`${a} is divisible by ${b}`);

// }else{
//     console.log(`${a} is not divisible by ${b}`);

// }


// 15th Question type of Triangle check
//sides of trianle are a,b,c


// let prompt = require("prompt-sync")()
// let a = Number(prompt("Enter length of first side:"))
// let b = Number(prompt("Enter length of second side:"))
// let c = Number(prompt("Enter length of third side:"))
// if(a+b<=c||b+c<=a||a+c<=b){
//     console.log("traingle cannot be formed");
// }else if(a===b&&b===c){
//     console.log("Equilateral Triangle is formed");
// }else if(a===b||b===c||c===a){
//     console.log("Isosceles Triangle is formed");
// }else{
//     console.log("Scalene");

// }

// 16th Question Temperature conversion

// let prompt = require("prompt-sync")()
// let Temp = Number(prompt("enter current temperature in units:"));
// let convertin = prompt("Convert in:").trim();

// if (convertin.toLowerCase() === "f") {
//    let  F = Math.floor((Temp * (9 / 5)) + 32)
//     console.log(F);
// } else if(convertin.toLowerCase() === "c") {
//     let C = Math.floor((Temp - 32) * (5 / 9))
//     console.log(C);

// }else{
//     console.log("invalid conversion type");

// }

//17th Question check leap year

// let prompt = require("prompt-sync")()
// let start = Number(prompt("enter starting year:"))
// let end = Number(prompt("enter end year:"))
// function checkleap(styear, enyear) {
//     if (styear.toString().length < 4 || enyear.toString().length < 4) return false;
//     while (styear !== enyear) {
//         if (styear % 4 !== 0) {
//             console.log(`${styear} not leap year`);

//         } else if (styear % 100 !== 0) {
//             console.log(`${styear} leap year`);

//         } else if (styear % 400 === 0) {
//             console.log(`${styear}  leap year`);

//         } else {
//             console.log(`${styear} not leap year`);
//         }
//         styear++;
//     }
// }
// console.log(checkleap(start,end));


//18th Questions number of days in a month of a leap year


//1,3,5,7,8,10,12(days 31)
//2,4,6,9,11(days 30)
// const prompt = require("prompt-sync")();

// let month = Number(prompt("Enter month: "));
// let year = Number(prompt("Enter year: "));

// // Check if leap year
// let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("31 days");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("30 days");
//         break;
//     case 2:
//         if (isLeap) {
//             console.log("29 days");
//         } else {
//             console.log("28 days");
//         }
//         break;
//     default:
//         console.log("Invalid month");
// }


//20th Questions larget out of four

// let a = 10, b = 25, c = 15, d = 20;

// let largest = (a > b ? a : b) > (c > d ? c : d) ? (a > b ? a : b) : (c > d ? c : d);

// console.log("Largest:", largest);

//21st Question Days of Week

let prompt = require("prompt-sync")()
let day = Number(prompt("enter a number between 1-7 "))
switch(day){
    case 1: console.log("Sunday");
    break;
    case 2: console.log("Monday");
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wednesday");
    break;
    case 5: console.log("Thursday");
    break;
    case 6: console.log("Friday");
    break;
    case 7: console.log("Saturday");
    break;
    default:
        console.log("invalid day number")
}