
// 函数声明
// 语法：使用 function  关键字声明函数，后面是[函数名]，函数名括号里的是[参数列表], 花括号里是[函数体]
function sayHello() {
    console.log("hello world")
}
// 函数调用
sayHello()


function print(msg) {
    let message = msg // 声明局部变量
    if (msg == undefined) {
        message = "default hello from print"
    }
    // 和上面 if 逻辑等价
    // 如果 msg 是假值，则设置默认值
    // msg = msg || "default hello from print"

    console.log(message)
}
print()


// 声明全局变量
// 任何函数之外声明的变量，都被称为 全局 变量。
// 减少全局变量的使用是一种很好的做法。现代的代码有很少甚至没有全局变量。大多数变量存在于它们的函数中。但是有时候，全局变量能够用于存储项目级别的数据。
let outMessage = "global message"
print(outMessage)



// 函数参数默认值
function print2(msg = "default hello from print2") {
    console.log(msg)
}
print2()
print2("hello print2")

// 函数参数默认值还可以是复杂的表达式
function print3(msg = calMsg()) {
    console.log(msg)
}
function calMsg() {
    return "----default calMsg-----"
}
print3()


// 函数的返回值
function add(a, b) {
    return a + b
}
print(add(1, 1))

// 空值的 return 或没有 return 的函数返回值为 undefined
function noReturn() {
    // return
}
let value = noReturn()
console.log(value) // undefined

// 不要在 return 与返回值之间添加新行
// 因为 JavaScript 默认会在 return 之后加上分号
function calMsg2() {
    return
    1 + "+" + 1 + "=" + 2
}
let result = calMsg2()
console.log(result) // undefined


