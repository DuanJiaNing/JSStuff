"use strict";

let str = "str";
let str1 = "str123";
let b = str1.startsWith(str, 1);
console.log(b);

// 保留两位小数
console.log((23.345).toFixed(2));

console.log(12e4, 12e-4); // 120000 0.0012
console.log(isFinite(Infinity));

console.log(0.2 + 0.1);

let arr = new Array();
let arr1 = [];
arr1.push(12);
arr1.push(13);
arr1.push(14);
console.log(arr1.length);

let user1 = {
    name: "Tom",
    toString: 1,
};
for (let k in user1) {
    console.log(k);
}

// 对象的三个属性标志
// enumerable:false for中不出现(同 symbol )
// writable:true 可读可写
// configurable:false 不可以删除
Object.defineProperty(user1, "toString", {
    enumerable: false
});
console.log("after false enumrable pro toString");
for (let k in user1) {
    console.log(k);
}
Object.defineProperty(user1, "name", {
    get() {
        return "this.name" + 123; // 不能使用 this.name 栈溢出
    },
    set(value) {
        this.name = value + value;
    }
});
console.log(user1.name);


let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper

// 原型继承
let animal = {
    eats: 13,
};
let rabbit = {
    jump: 12,
};
rabbit.__proto__ = animal;
console.log(rabbit.eats); // 13 从 animal 中获取
rabbit.eats = 15; // 原型只能读取，不能写入
console.log(rabbit.eats); // 15
console.log(rabbit.__proto__.eats); // 13
for (let k in rabbit) {
    console.log(k);
}

/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var newVar = (function (global, factory) {
    var vue = factory();
    return vue;
}(this, function () {

    function Vue(options) {
        if (!(this instanceof Vue)
        ) {
            warn('Vue is a constructor and should be called with the `new` keyword');
        }
        this._init(options);
    }

    return Vue;

}))();