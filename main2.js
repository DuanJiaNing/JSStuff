"use strict";

let c = 3;
// v = 3

String(true);

console.log("4" / "2");
Number("12");
Number("NaN");
Boolean(NaN); // null undefined NaN 0 -> flse
console.log("6" - 1);
console.log("" + 1 + 2);
console.log("6" + 1);
console.log(-(-4));
console.log(-true);
console.log(+"");

let a, b, d, e;
a = b = d = e = 2;
let v = a ** c; // 2 * 2 * 2
let a1 = (1 + 2, 3 + 4); // a = 3 + 4 取最后一个

for (a = 1, b = 3, c = a * b; a < 10; a++) {
    // do ...
}

// https://zh.javascript.info/comparison
console.log("2" == 2); // true 先转为数字，再比较
console.log("2" === 2); // false type 不同
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null === undefined); // false
console.log(null == undefined); // true

alert("a message");
console.log(prompt("Title(input please)", ''));
console.log(confirm("please confirm"));

a === 10 ? console.log("a==10") : console.log("a != 10");
