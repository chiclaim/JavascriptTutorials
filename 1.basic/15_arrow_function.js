// 箭头函数

// let func = (arg1, arg2, ..., argN) => expression;
// 这种创建函数比函数表达式更好

// 函数表达式
let func = function (arg1, arg2) {
    return arg1 + arg2;
};

// 箭头函数比函数表达式更简洁
func = (arg1, arg2) => {
    return arg1 + arg2;
};

console.log(func(1, 2))

// 如果只有一个参数， 还可以省略括号()
func = arg1 => {
    return arg1 + 2;
};
console.log(func(1))

// 如果没有参数，括号则是空的（但括号必须保留）：
func = () => {
    return 3;
};
console.log(func())

// 如果函数体只有一条语句，还是可省略花括号{}
func = () => console.log(3)
func()
