let p = 32000;
let r = 0.05;
let t = 3;
let n = 12;

let A = p * (1 + r / n) ** (n * t);

console.log("The amount after 3 years is: ", A);