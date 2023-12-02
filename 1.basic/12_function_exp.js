// 函数表达式

// 在 JavaScript 中，函数不是“神奇的语言结构”，而是一种特殊的值。
// 既然函数是一种值，那么就可以赋值给一个变量

let funcValue = function sayHello() {
    console.log("sayHello")
}

// 通过这个变量。调用函数
funcValue()

// 赋值给变量后，就不能使用原来的函数名了
// sayHello()

// 如果想使用原来的函数名调用方法，可以先定义函数，然后赋值
function sayHello2() {
    console.log("sayHello2")
}
funcValue = sayHello2
funcValue()
sayHello2()

// 也可以不给函数名(将一个匿名函数赋值给 funcValue2)
let funcValue2 = function () {
    console.log("匿名函数")
}
funcValue2()


// 回调函数----------------------------
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
*/



// 函数表达式 和 函数声明----------------------------
// 1. 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
// 2. 在函数声明被定义之前，它就可以被调用。
// 3. 严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。

// 在声明之前调用
console.log(sum(1, 1))

// 函数声明
function sum(a, b) {
    return a + b;
}
// 函数表达式
let sum2 = function (a, b) {
    return a + b;
};
