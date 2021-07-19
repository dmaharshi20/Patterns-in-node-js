let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      star += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      star += "*";
    }
    star += "\n";
}
console.log(star);