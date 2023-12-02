// 逻辑运算符

// JavaScript 中有四个逻辑运算符：||（或），&&（与），!（非），??（空值合并运算符）

// ||（或）运算符 ----------------------------------

// 在传统的编程中，逻辑或仅能够操作布尔值。如果参与运算的任意一个参数为 true，返回的结果就为 true，否则返回 false。
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

// 如果操作数不是布尔值，那么它将会被转化为布尔值来参与运算。
if (1 || 0) { // 工作原理相当于 if( true || false )
    console.log('truthy!');
}
// ||或运算寻找第一个真值
// result = value1 || value2 || value3;
// 原理：
// 1. 从左到右依次计算操作数。
// 2. 处理每一个操作数时，都将其转化为布尔值。如果结果是 true，就停止计算，返回这个操作数的初始值。
// 3. 如果所有的操作数都被计算过（也就是，转换结果都是 false），则返回最后一个操作数。
let result = 1 || 0
console.log(result) // 1

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

let validName = (firstName || lastName || nickName || "Anonymous"); // SuperCoder
console.log(validName) // SuperCoder


// &&（与）运算符 ----------------------------------
// 在传统的编程中，当两个操作数都是真值时，与运算返回 true，否则返回 false：
console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false
// 与运算寻找第一个假值
// result = value1 && value2 && value3;
// 原理：
// 1. 从左到右依次计算操作数。
// 2. 在处理每一个操作数时，都将其转化为布尔值。如果结果是 false，就停止计算，并返回这个操作数的初始值。
// 3. 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。
console.log(1 && 0); // 0 ，0 是 false，然后该初始值
console.log(1 && 5); // 都是真值，返回最后一个操作数
console.log(null && 5); // null

// 不要用 || 或 && 来取代 if
let x = 1;
(x > 0) && console.log('Greater than zero!');
// 虽然使用 && 写出的变体看起来更短，但 if 更明显，并且往往更具可读性。
// 因此，我们建议根据每个语法结构的用途来使用：如果我们想要 if，就使用 if；如果我们想要逻辑与，就使用 &&。
if (x > 0) console.log('Greater than zero!');


// 非(!)运算符 ----------------------------------
// 语法相当简单： result = !value;
// 逻辑非运算符接受一个参数，并按如下运作：
// 1. 将操作数转化为布尔类型：true/false。
// 2. 返回相反的值。
console.log(!true); // false
console.log(!0); // true



