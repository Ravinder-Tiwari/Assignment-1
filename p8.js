//49th Questions
let prompt = require("prompt-sync")()
let n =Number(prompt("Enter no. of rows:"))
for(let i=1;i<=n;i++){
    let row = ""
    let a = 65;
    for(let j=1;j<=i;j++){
        b = String.fromCharCode(a)
        row += b + " "
        a++;
}
console.log(row);
}