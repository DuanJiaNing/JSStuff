// 默认就会使用 strict
// "use strict";

import {sayHi} from './sayHi.js';

console.log(sayHi); // function...
console.log(sayHi('John')); // Hello, John!

new Vue();