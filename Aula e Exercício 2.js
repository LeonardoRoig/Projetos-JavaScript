let A = 10, B = 20;
let C = A;
 

console.clear();
console.log(C);

let Temporário = A;
let A = B;
let B = Temporário;

console.log(A);
console.log(B);