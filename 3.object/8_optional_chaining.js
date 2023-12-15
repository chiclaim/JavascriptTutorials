// 可选链 "?."
// 可选链 ?. 是一种访问嵌套对象属性的安全的方式。即使中间的属性不存在，也不会出现错误。
let user = {};

// TypeError: Cannot read properties of undefined (reading 'street')
// console.log(user.address.street); // Error!

// 使用可选链
console.log(user.address?.street); // undefined

// 重要：如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined
// 短路效应

user = null;
let x = 0;
user?.sayHi(x++); // 没有 "user"，因此代码执行没有到达 sayHi 调用和 x++


// 其它变体：?.()，?.[]
// 可选链 ?. 不是一个运算符，而是一个特殊的语法结构。它还可以与函数和方括号一起使用。

// 将 ?.() 用于调用一个可能不存在的函数。
let userAdmin = {
    admin() {
        alert("I am admin");
    }
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // 啥都没发生（没有这样的方法）

// 如果我们想使用方括号 [] 而不是点符号 . 来访问属性，语法 ?.[] 也可以使用
let key = "firstName";
let user1 = {
    firstName: "John"
};
let user2 = null;
alert(user1?.[key]); // John
alert(user2?.[key]); // undefined


// 使用 ?. 来安全地读取或删除，但不能写入
user = null;
// SyntaxError: Invalid left-hand side in assignment
// 因为它在计算的是：undefined = "John"
user?.name = "John"; // Error，不起作用



// 不要过度使用可选链
// 我们应该只将 ?. 使用在一些东西可以不存在的地方。
/*
例如，如果根据我们的代码逻辑，user 对象必须存在，但 address 是可选的，那么我们应该这样写 user.address?.street，而不是这样 user?.address?.street。
那么，如果 user 恰巧为 undefined，我们会看到一个编程错误并修复它。否则，如果我们滥用 ?.，会导致代码中的错误在不应该被消除的地方消除了，这会导致调试更加困难。
*/

// `?.` 前的变量必须已声明
// ReferenceError: abc is not defined
abc?.address;


