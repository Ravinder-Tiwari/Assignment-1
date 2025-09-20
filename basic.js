// ****To evaluate Answers uncomment one by one by checking the Question number****




//1st Question average of three integers.

// const prompt = require("prompt-sync")()
// let n = Number(prompt("total numbers you want:"))
// let sum = 0;
// for (i = 0; i < n; i++) {
//     let num = Number(prompt(`enter ${i+1} number:`))
//     sum += num
// }
// console.log(sum/n);

//2nd Question calculate circumference of a circle.

//  const prompt = require("prompt-sync")()
//  let r = Number(prompt("enter radious:"))
//  let pi = 3.147
//  let circumference = 2*pi*r;
//  console.log(circumference);

//3rd Question Calculate Simple Interest
// const prompt = require("prompt-sync")()
// let pr = Number(prompt("enter principle:"))
// let rate = Number(prompt("enter rate of interest:"))
// let time = Number(prompt("enter years:"))

// console.log((pr*rate*time)/100)


//4th Question Profit and loss 

// const prompt = require("prompt-sync")()
// let n = Number(prompt("Enter no. of banana:"))
// let cp1 =  Number(prompt("Enter cost price for 1 banana:"));
// let sp1 =  Number(prompt("Enter sell price for 1 banana:"));
// let cp  = n*cp1
// let sp  = n*sp1
// function findprofit_loss(cp,sp){
//     if(cp>sp){
//         return `loss of ${cp-sp}`
//     }else{
//         return `profit of ${sp-cp}`
//     } 

// }

// console.log(findprofit_loss(cp,sp));


//5th Question number to ASCII code

// let prompt = require("prompt-sync")()
// let num = Number(prompt("enter a number:"))
// function numtoAscii(a){
//     return String.fromCharCode(a);
// }
// console.log(numtoAscii(num));


//6th Question Ascii code to Number

// let prompt = require("prompt-sync")()
// let char = prompt("Enter a character:")
// function asciitonum(a){
//     return char.charCodeAt(a)
// }
// console.log(asciitonum(char));

//7th Question display Characters with Ascii code

// const prompt = require("prompt-sync")();

// function asciiToNum() {
//     while (true) {
//         let a = prompt("Enter a character (or type 'stop' to quit): ");
        
//         if (a.toLowerCase() === "stop") {
//             console.log("You entered stop");
//             break;
//         }

//         if (a.length === 1) { 
//             console.log(`${a} : ${a.charCodeAt(0)}`);
//         } else {
//             console.log("Please enter exactly one character!");
//         }
//     }
// }

// asciiToNum();




//8th Question 3 characters to Ascii 

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


//9th Question Date User Input

// let prompt = require("prompt-sync")()
// let input = prompt("Enter date (DD/MM/YYYY):");
// let [date,month,year] = input.split("/");
// console.log(month);

// function calender(a,b,c){
//     return `Day:${a},Month:${b},Year:${c}`
    
// }
// console.log(calender(date,month,year));


//10th Question Time User Input

// let prompt = require("prompt-sync")()
// let time = prompt("Enter current time HH:MM = ")
// let [hour,minute] = time.split(":")
// function timeinput(a,b){
//     console.log(`hour: ${a}`);
//     console.log(`minute: ${b}`);
    
// }
// timeinput(hour,minute)


