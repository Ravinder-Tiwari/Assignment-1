//43rd Question
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter no. of rows:"));

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
        row += (i === 0 || i === n - 1 || j === 0 || j === n - 1) ? "* " : "  ";
    }

    console.log(row); 
}
