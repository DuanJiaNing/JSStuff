"use strict";

main()

function main() {
    f(test());
}

function test(txt) {
    txt = txt || "default"
    console.log(txt)

    return txt + txt
}

function f(txt = "text") {
    console.log(txt)
}

let check = function (a, b) {
    return a > b
};

let ck1 = (a, b) => a > b;
let ck1 = (a, b) => {
    console.log(a, b)
};
let ck2 = a => a ** a;