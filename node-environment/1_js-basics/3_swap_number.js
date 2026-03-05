// with extra variable
let a = 10;
let b = 20;
console.log(a, "it's a before");
console.log(b, "it's b before");
console.log();
let c;
c = a; // copy the value in c..
a = b;
b = c;
console.log(a, "it's a after");
console.log(b, "it's b after");
console.log();

//! without extra variable
let m = 10;
let n = 20;
console.log(m, "it's m before");
console.log(n, "it's n before");
console.log();

m = m + n;
n = m - n;
m = m - n;
console.log(m, "it's m after");
console.log(n, "it's n after");
console.log();

// 3rd option of swaping
let o = 10;
let p = 20;
console.log(o, "it's o before");
console.log(p, "it's p before");
console.log();
[o, p] = [p, o];
console.log(o, "it's o after");
console.log(p, "it's p after");