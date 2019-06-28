"use strict";

let user = new Object();
let u1 = {
    size: undefined
};
let u2 = {
    "name": "Tom",
    age: 23,
    "Multi word": false
};

console.log(u2);
delete u2.name;
console.log(u2);
u2["Multi word"] = true;

let key = "name";
u2[key] = "Jack";
console.log(u2["name"]);
console.log(u2);

// let fruit = prompt("Which fruit to buy?", "apple");
let fruit = "apple";
let bag = {
    [fruit]: 5, // 属性名从 fruit 变量中获得
    [key + "-spec"]: "name-spec",
    for: 1, // 保留字可以用作属性名，但不能用做变量名...
    __proto__: new Object(12), // 历史遗留原因，只能为 object
};
console.log(bag[fruit]); // 5 如果 fruit="apple"
console.log(bag);

let aa = {user, u1, u2}; // 简写，变量名作为属性名
console.log(aa);
console.log(aa.user.name === undefined); // true
console.log("name" in aa); // false
console.log("name" in aa.u2); // true
console.log(aa.u1.size === undefined); // true 会以为 size 没声明
console.log("size" in aa.u1); // true

// for (key in aa) {
for (let k in aa) {
    console.log("v in aa: " + k);
}

let codes = {
    12: 12,
    13: 13,
    2: 9,
    4: 69,
};
for (let k in codes) {
    console.log(k, codes[k]); // 会被排序: 2,4,12,13
}

{
    let ac = {};
    Object.assign(ac, user, u1, u2);
    console.log(ac);
}

let u4 = {
    name: "tom",
};
let id = Symbol("objects script tom's id");
u4[id] = 1;
console.log("objects", u4[id], u4.age);// 1 undefined 当前script认为没有 age 这个属性
console.log("objects", u4);
for (let u4Key in u4) {
    console.log("objects ", u4Key) // id 或 age 都不会出现，symbol 具有隐藏性
}
