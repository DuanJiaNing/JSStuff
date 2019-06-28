"use strict";

let user = {
    name: "user",
    sayL: function () {
        console.log("L");
    },
    [Symbol.toPrimitive]: hint => hint === "string" ? "name" : hint === "number" ? 13 : "finddefault",
    toString() {
        return this.name
    }
};
console.log(2 * user); // 26
console.log(user); // user

// BigUser 的构造函数,构造函数定义对象
function BigUser(parm1, parm2, fun1) {
    console.log(new.target);

    if (!new.target) {
        return new BigUser();
    }

    // 对象定义主体
    // this = user{} 隐藏
    this.name = "tom";
    this.parm1 = parm1;
    this["parm2"] = parm2;
    this.fun1 = fun1;
    // return this 隐藏
}

let admin = {
    name: "admin",
};

let sayK = function () {
    console.log(this.name);
};

user.sayHi = function () {
    console.log("Hi");
    user.sayL();
};
// user.sayHi();

user.fu = sayK;
admin.fu = sayK;
user['fu'](); // this -> user
admin.fu(); // this -> admin

let biguser = new BigUser("a", 12); // 构造函数创建
biguser.fu = sayK;
biguser.fu(); // this -> BigUser
console.log(biguser.parm1, biguser["parm2"]); // 构造函数入参定义对象