//22nd Questions sum of first N natural no.

// let prompt = require("prompt-sync")()
// let n = Number(prompt("how many numbers you want to add:"))
// let sum = 0;
// for(let i = 1;i<=n;i++){
//     sum = sum+i;    
// }
//  console.log(`sum of  upto ${n} numbers is ${sum}`);


//23rd Questions sum of first N even natural no.

// let prompt = require("prompt-sync")()
// let n = Number(prompt("how many numbers you want to add:"))
// let sum = 0;
// for(let i = 1;i<=n;i++){

//         sum = sum+2*i;

// }
// console.log(`sum of n even natural number is:${sum}`);

//24th Questions sum of first N odd natural no.

// let prompt = require("prompt-sync")()
// let n = Number(prompt("how many numbers you want to add:"))
// let sum = 0;
// for(let i = 1;i<=n;i++){
//    sum = sum + 2*i-1
// }
// console.log(`sum of n even natural number is:${sum}`);

//25th Questions sum of squares of n natural no.

// let prompt = require("prompt-sync")()
// let n = Number(prompt("how many numbers you want to add:"))
// let sum = 0;
// for(let i = 1;i<=n;i++){
//    sum = sum +i*i;
// }
// console.log(`sum of n even natural number is:${sum}`);

//26th Question sum of cubes of n natural no.

// let prompt = require("prompt-sync")()
// let n = Number(prompt("how many numbers you want to add:"))
// let sum = 0;
// for(let i = 1;i<=n;i++){
//    sum = sum +i*i*i;
// }
// console.log(`sum of n even natural number is:${sum}`);


//27th Question calculate factorial

// let prompt = require("prompt-sync")()
// let num = Number(prompt("Enter a number of your choice:"))
// let fact =1;
// for(let i=1;i<=num;i++){
//     fact = fact*i;
// }
// console.log(`factorial of ${num} is ${fact}`);

//28th Question count digits of a given number

// let prompt = require("prompt-sync")()
// let num = Number(prompt("Enter a number of your choice:"))
// let count = 0;
// for(let i=num;i>0;i = Math.floor(i/10)){
//      count++;
// }
// console.log(`no. of digits in ${num} are ${count}`);


//29th Question given number is prime or not

// let prompt = require("prompt-sync")()
// let num = Number(prompt("check prime or not:"))
// let isprime = true
// for(let i = 2;i<num;i++){
//     if(num%i ===0){
//         isprime = false
//     }
// }
// if(isprime){
//     console.log(`${num} is prime no.`);
// }else{
//     console.log(`${num} is not prime no.`);
// }


//30th Question LCM of two numbers

// let prompt = require("prompt-sync")()
// let num1 = Number(prompt("enter first number:"))
// let num1dup = num1;
// let num2 = Number(prompt("enter second number:"))
// let num2dup = num2;
// let temp;
// while(num2dup!==0){
//   temp = num2dup;
//   num2dup = num1dup%num2dup;
//   num1dup = temp;
// }
// console.log((num1*num2)/num1dup);

//31st Questions reverse a given number

// let prompt = require("prompt-sync")()
// let num = Number(prompt("Enter a number to reverse:"));
// let reversed = 0;

// for(let i = num;i>0;i = Math.floor(i/10)){
//     let digit = i%10;
//     reversed = reversed*10 + digit;
// }
// console.log(reversed);


//32. Write a program to find the Nth term of the Fibonacci series

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter n (position in Fibonacci series): "));

// let f0 = 0, f1 = 1, fn;

// if (n === 0) fn = f0;
// else if (n === 1) fn = f1;
// else {
//     for (let i = 2; i <= n; i++) {
//         fn = f0 + f1;
//         f0 = f1;
//         f1 = fn;
//     }
// }

// console.log(`The ${n}th term of Fibonacci series is: ${fn}`);


//33. Write a program to find the first n term of the Fibonacci series

// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter a number:"));
// let f0 = 0;
// let f1 = 1;
// console.log("fibonacci Series");
// console.log(f0);
//  if(n>1) console.log(f1);

// for(let i = 2;i<n;i++){
//    let fn = f0 + f1
//    console.log(fn);
//    f0 = f1
//    f1 = fn;
// }

//34th find a number in fibonacci series


// let prompt = require("prompt-sync")()
// let num = Number(prompt("enter a number you want to find:"))
// let a = 0;
// let b = 1;
// while(b<=num){
//     if(b === num){
//         console.log("number found");
//         break;       
//     }
//     let next =  a+b
//     a = b
//     b = next;
//     if(b!==num && b>=num){
//         console.log("not found");
//         break;
//     }
// }

//35th question HCF of  number

// let prompt = require("prompt-sync")()
// let num1 = Number(prompt("Enter first number:"))
// let num2 = Number(prompt("Enter Second number:"))
// function hcf(x, y) {
//     while (y !== 0) {
//         let temp = y
//         y = x % y
//         x = temp
//     }
//     return x;
// }
// console.log(hcf(num1,num2))

//36th Question 

// let prompt = require("prompt-sync")()
// let num1 = Number(prompt("Enter first number:"))
// let num2 = Number(prompt("Enter Second number:"))
// function hcf(x, y) {
//     while (y !== 0) {
//         let temp = y
//         y = x % y
//         x = temp
//     }
//     return x;
// }
// let HCF = hcf(num1,num2)
// if(HCF === 1){
//     console.log("Co-prime");
// }else{
//     console.log("Not Co-prime");

// }


//37th Question print all prime  upto 100

// for(let i = 99;i>=2;i--){
//     let isprime = true
//     for(let j = 2;j<i;j++){
//         if(i%j === 0){
//             isprime = false;
//         }
//     }
//     if(isprime){
//         console.log(`${i} is prime`);
//     }else{
//         console.log(`${i} is not prime`);

//     }
// }


//38th Questions prime number between two number

// let prompt = require("prompt-sync")()
// let num1 = Number(prompt("Enter first number:"))
// let num2 = Number(prompt("Enter Second number:"))
// for(let i = num1;i>=num2;i--){
//     let isprime = true
//     for(let j = 2;j<i;j++){
//         if(i%j === 0){
//             isprime = false;
//         }
//     }
//     if(isprime){
//         console.log(`${i} is prime`);
//     }else{
//         console.log(`${i} is not prime`);

//     }
// }

//39th Question find next prime number


// let prompt = require("prompt-sync")()
// let num = Number(prompt("Enter number:"))
// for(let i = num+1;;i++){
//     let isprime = true;
//         for(let j = 2;j<i;j++){
//             if(i%j===0){
//                 isprime = false;
//                 break;
//             }
//         }
//         if(isprime){
//             console.log(`${i} is prime`);
//             break;
//         }
// }

//40th Question check Armstrong number

// let prompt = require("prompt-sync")()
// let num = Number(prompt("enter a number:"))
// let sum = 0;
// for(let i = num;i>0;i = Math.floor(i/10)){
//     let digits = i%10;
//     sum+=digits*digits*digits;
// }
// // console.log(sum);
// if(sum===num){
//     console.log(`${sum} is Armstrong number`);
// }else{
//     console.log(`${num} is not Armstrong number`);
// }


//41st Questions print all armstrong number upto 1000

// let num =1000;
// for (let i = 1; i <= num; i++) {
//     let sum = 0;
//     let digits = i.toString().length; 
//     let temp = i;

//     while (temp > 0) {
//         let d = temp % 10;
//         sum += Math.pow(d, digits);
//         temp = Math.floor(temp / 10);
//     }

//     if (sum === i) {
//         console.log(`${i} is an Armstrong number`);
//     }
// }


