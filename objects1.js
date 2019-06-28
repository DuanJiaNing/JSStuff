"use strict";

// 添加属性到另一个script A 中的变量中,我不清楚 A 中是否有 age 这个键，但Symbol始终唯一
let age = Symbol("objects1 script tom's age");
u4[age] = 2;
// 当前script认为u4没有 id 这个属性
console.log("objects1", u4.id, u4[age]); // undefined 2, symbol 与script绑定（可暂时理解为包或文件）
console.log("objects1", u4);

