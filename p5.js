//46 Questions

let prompt = require("prompt-sync")()
let n = Number(prompt("enter the no. of rows:"))
for(let i = 0;i<n;i++){
    let row = ""
    for(let j = 0;j<n;j++){
        row +=(j===0&&i<=Math.floor(n/2))||(i===0&&j>=Math.floor(n/2))|| (i===Math.floor(n/2))|| (i===n-1&&j<=Math.floor(n/2))||(j===Math.floor(n/2))||(j===n-1&&i>=Math.floor(n/2))? "* ":"  ";
     }
    console.log(row);
    
}