// 基础运算符：一元运算符、二元运算符、数学运算符、赋值运算符、位运算符、逗号运算符

// 什么运算元:  运算符应用的对象。比如说乘法运算 5 * 2，有两个运算元：左运算元 5 和右运算元 2。有时候人们也称其为“参数”而不是“运算元”。


// 一元运算符

let index = 11;
index++;
console.log(index);


// 二元运算符

let num1 = 11;
let num2 = 22;
let sum = num1 + num2;
console.log(sum);


// 数据运算符:
// 加法 +,
// 减法 -,
// 乘法 *,
// 除法 /,
// 取余 %,
// 求幂 **

console.log("5%2取模: ", 5 % 2);
console.log("5**2取模: ", 5 ** 2); // 2² = 4


// 二元运算符+ 用于字符串拼接, 只要有一个是字符串类型, 整个结果就字符串类型
console.log("hello" + "world") // helloworld
console.log(1 + "hello") // 1hello
console.log("1" + 2 + 2) //122

// 二元运算符 -/*  , 最终的结果是数字, 如果无法运算则返回 NaN
console.log(6 - "2") //4
console.log("6" / "2") //3
console.log("6" * "2") //12
console.log("a" * "2") //NaN

// 一元运算符+  数字转化, 会尝试转化成数字类型， Number(xx)
console.log(+"2") // 2
console.log(+true) // 1
console.log(+false) // 0
console.log(+"") // 0
console.log(+" ") // 0
console.log(+null) // 0
console.log(+[]) // 0   // Number([])
console.log(+" \t \n") //0

console.log(+"abc") //NaN
console.log(+undefined) //NaN  Not a Number    Number(undefined)


// 运算符优先级
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%E6%B1%87%E6%80%BB%E8%A1%A8


// 链式赋值
let a, b, c;
a = b = c = 2 + 2;
console.log(a)
console.log(b)
console.log(c)


// 原地修改
let n = 2
n = n + 5 // 可以简写 n+=5
n = n * 2 // 可以简写 n*=2


// 自增/自减
let count = 2
console.log(count++) //2
console.log(count) //3
console.log(count--) //3
console.log(count) //2

// 前置自增自减
let number = 2
console.log(++count) //3
console.log(count) //3
console.log(--count) //2
console.log(count) //2


// 位运算符
/*
按位与 ( & )
按位或 ( | )
按位异或 ( ^ )
按位非 ( ~ )
左移 ( << )
右移 ( >> )
无符号右移 ( >>> )
*/


// 逗号运算符
// 逗号运算符能让我们处理多个表达式，使用 , 将它们分开。每个表达式都运行了，但是只有最后一个的结果会被返回。
let n1 = 1
let n2 = 2
let n3 = (++n1, ++n2)
console.log(n1) //2
console.log(n2) //3
console.log(n3) //3