let n=5;
let star = "*";
for (let i = 0; i < n; i++){
    for(let j=0; j < i; j++){
        star +="";
    }
    for(let k=1; k <= 2*(n-i)-1; k++){
        star += "*"
    }
    star +="\n";
}
console.log(star);