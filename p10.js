// 51st Question

let prompt = require("prompt-sync")()
let n = Number(prompt("Enter no. of rows:"))
for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = n-i; j>0; j--) {
        row += "*"
    }
    console.log(row);

} 