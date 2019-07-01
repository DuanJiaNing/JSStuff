class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// 证明：User 指向了 "constructor" 函数
console.log(User === User.prototype.constructor); // true
// 证明：在 "prototype" 上挂载了两个方法
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

Rabbit.prototype = animal; // 表示当 Rabbit 通过 new 创建时执行：rabbit.__proto__ == animal
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
console.log(rabbit.eats); // true
// Rabbit.prototype = {};
// console.log(rabbit);
// console.log(rabbit.constructor);

let obj = {};
console.log(Object.__proto__);
console.log(Object.prototype); // Object
console.log(Object.prototype.__proto__); // null
console.log(obj.__proto__ === Object.prototype); // true

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null
console.log(arr);