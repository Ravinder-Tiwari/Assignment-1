//48th Question
let prompt = require("prompt-sync")()
let n =Number(prompt("Enter no. of rows:"))
for(let i=1;i<=n;i++){
    let row = ""
    for(let j=1;j<=i;j++){
        row += j + " "
}
console.log(row);
}