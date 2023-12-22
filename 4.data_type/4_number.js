
// 数字类型

// 在现代 JavaScript 中，数字（number）有两种类型：
//  1.  常规数字以 64 位的格式 IEEE-754 存储
//  2.  BigInt 用于表示任意长度的整数

// 10亿
let billion = 1000000000;
billion = 1_000_000_000; // 可读性更强
billion = 1e9;  // 10 亿，字面意思：数字 1 后面跟 9 个 0

// 换句话说，e 把数字乘以 1 后面跟着给定数量的 0 的数字。
console.log(1.23e6 === 1.23 * 1000000) // e6 表示 *1000000

// 1 微秒（百万分之一秒）：
let mcs = 0.000001;
mcs = 1e-6   // 1 的左边有 6 个 0

console.log(0.000001 === 1e-6) // true


// 十六进制，二进制和八进制数字


// 十六进制 0x 开头 x = hex
console.log(0xff) // 255
console.log(0xFF) // 255

// 二进制  0b 开头，b = binary
let a = 0b11111111; // 二进制形式的 255

// 八进制 0o 开头， o = octonary
let b = 0o377; // 八进制形式的 255
console.log(a == b); // true，两边是相同的数字，都是 255


// 数字转字符串
// num.toString(base) base 是进制
// base 的范围可以从 2 到 36。默认情况下是 10。
// base=16 用于十六进制颜色，字符编码等，数字可以是 0..9 或 A..F。
// base=2 主要用于调试按位操作，数字可以是 0 或 1。
// base=36 是最大进制，数字可以是 0..9 或 A..Z。所有拉丁字母都被用于了表示数字
let num = 255;
console.log(num.toString(16));  // ff
console.log(num.toString(2));   // 11111111

// 如果我们想直接在一个数字上调用一个方法，比如上面例子中的 toString，那么我们需要在它后面放置两个点 ..
// 如果我们放置一个点：123456.toString(36)，那么就会出现一个 error，因为 JavaScript 语法隐含了第一个点之后的部分为小数部分
console.log(123456..toString(36));  // 2n9c
console.log((123456).toString(36));  // 2n9c



// 舍入========

// Math.floor 向下舍入：3.1 变成 3，-1.1 变成 -2。
// Math.ceil 向上舍入：3.1 变成 4，-1.1 变成 -1
// Math.round 向最近的整数舍入：3.1 变成 3，3.6 变成 4，中间值 3.5 变成 4
// Math.trunc（IE 浏览器不支持这个方法）移除小数点后的所有内容而没有舍入：3.1 变成 3，-1.1 变成 -1。

// floor/ceil/round 小结：
// 1. 想象成数轴上的数字
// 2. 数字是变大还是变小
// 3. floor 是地板意思，所以数字变小
// 4. ceil 是天花板意思，所以数字变大
// 5. round 是周边的意思，所以向最近的整数舍入（想象成数轴）
// 6. trunc 是截断的意思，最简单，机械地去掉小数部分即可 

// floor 地板，所以是向下取整（数字变小）
console.log("floor 地板，所以是向下取整（数字变小）")
console.log(Math.floor(3.1)) // 3
console.log(Math.floor(3.6)) // 3
console.log(Math.floor(-3.1)) // -4
console.log(Math.floor(-3.6)) // -4

// ceil 天花板，所以是向上取整（数字变大）
console.log("floor ceil 天花板，所以是向上取整（数字变大）")
console.log(Math.ceil(3.1)) // 4
console.log(Math.ceil(-3.1)) // -3

// 四舍五入(向最近的整数舍入)
console.log("四舍五入（向最近的整数舍入）")
console.log(Math.round(3.1)) // 3
console.log(Math.round(-3.1)) // -3

// 移除小数点后的所有内容而没有舍入
console.log("移除小数点后的所有内容而没有舍入")
console.log(Math.trunc(3.5)) // 3
console.log(Math.trunc(3.6)) // 3
console.log(Math.trunc(-3.6)) // -3


// 这些函数涵盖了处理数字小数部分的所有可能方法。但是，如果我们想将数字舍入到小数点后 n 位，该怎么办？

console.log("指定小数点位数 toFixed(n)----返回字符串")
// Math.round 和 toFixed 都将数字舍入到最接近的数字
num = 12.3456789;
console.log(num.toFixed(1)); // "12.3"
console.log(num.toFixed(2)); // "12.35"
console.log(num.toFixed(3)); // "12.346"

// 可以使用一元加号或 Number() 调用，将其转换为数字
console.log("将字符串转成 number")
let fixedNum = +num.toFixed(3)
console.log("type =", typeof fixedNum, " value =", fixedNum);


// number 的精度问题
// 在内部，数字是以 64 位格式 IEEE-754 表示的，所以正好有 64 位可以存储一个数字：
//      其中 52 位被用于存储这些数字，
//      其中 11 位用于存储小数点的位置，
//      而 1 位用于符号。

console.log(0.1 + 0.2) // 30000000000000004
console.log(0.1 + 0.2 == 0.3) // false

// 什么是 0.1？0.1 就是 1 除以 10，1/10，即十分之一。在十进制数字系统中，这样的数字表示起来很容易。
// 将其与三分之一进行比较：1/3。三分之一变成了无限循环小数 0.33333(3)。

// 在十进制数字系统中，可以保证以 10 的整数次幂作为除数能够正常工作。但是以 3 作为除数则不能。
// 在二进制数字系统中，可以保证以 2 的整数次幂作为除数时能够正常工作。1/10 就变成了一个无限循环的二进制小数

// 使用二进制数字系统无法 精确 存储 0.1 或 0.2，就像没有办法将三分之一存储为十进制小数一样。



// ---------------isFinite 和 isNaN
// 1. isNaN(value) 将其参数转换为数字，然后测试它是否为 NaN
// 2. isFinite(value) 将其参数转换为数字，如果是常规数字而不是 NaN/Infinity/-Infinity，则返回 true：


// Infinity（和 -Infinity）是一个特殊的数值，比任何数值都大（小）
// NaN 代表一个 error。

// isNaN(value) 函数将其参数转换为数字，然后测试它是否为 NaN
console.log(isNaN(NaN)); // true  isNaN(value) 将其参数转换为数字，然后测试它是否为 NaN
console.log(isNaN("str")); // true

// 值 “NaN” 是独一无二的，它不等于任何东西，包括它自身
console.log(NaN === NaN) // false

// 空字符串或仅有空格的字符串均被视为 0
console.log(isFinite("")) // true
console.log(isFinite("   ")) // true

console.log(isFinite("15")) // true
console.log(isFinite("str")) // false
console.log(isFinite(Infinity)) // false
console.log(isFinite(-Infinity)) // false

// parseInt 和 parseFloat

// 使用加号 + 或 Number() 的数字转换是严格的。如果一个值不完全是一个数字，就会失败
console.log(+"100px"); // NaN

console.log(parseInt("100px")); // 100
console.log(parseFloat('12.5em')) // 12.5
console.log(parseInt('12.3')); // 12，只有整数部分被返回了
console.log(parseFloat('12.3.4')); // 12.3，在第二个点出停止了读取
console.log(parseInt('a123')); // NaN，第一个符号停止了读取
console.log(parseInt('1a2b3')); // 1

// -----parseInt(str, radix) 的第二个参数---
console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255，没有 0x 仍然有效
console.log(parseInt('2n9c', 36)); // 123456



// ------------其他数学函数----------------
console.log(Math.random()); // 任何随机数 如：0.1234567894322
console.log(Math.random()); // 任何随机数 如：0.5435252343232
console.log(Math.random()); // ... (任何随机数)

// max min
console.log(Math.max(3, 5, -10, 0, 1)); // 5
console.log(Math.min(1, 2)); // 1


// ----------------为什么 6.35.toFixed(1) == 6.3？
// 根据文档，Math.round 和 toFixed 都将数字舍入到最接近的数字：0..4 会被舍去，而 5..9 会进一位
console.log(1.35.toFixed(20)) // 1.35000000000000008882 精度损失使得这个数字稍微大了一些
console.log(1.35.toFixed(1))  // 1.4


console.log(6.35.toFixed(20))  // 6.34999999999999964473 精度损失使得这个数字稍微小了一些
console.log(6.35.toFixed(1))   // 6.3

// 我们应该如何解决 6.35 的舍入问题呢？

// 在进行舍入前，我们应该使其更接近整数：
// 3.5 完全没有精度损失。这是因为小数部分 0.5 实际上是 1/2。
// 以 2 的整数次幂为分母的小数在二进制数字系统中可以被精确地表示
console.log( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
console.log( Math.round(6.35 * 10) / 10);  // 6.4






