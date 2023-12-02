

// 数据类型[Number、BitInt、String、Boolean、null、undefined、Object、Symbol]


// JavaScript 中的值都具有特定的类型。例如，字符串或数字。
// 在 JavaScript 中有 8 种基本的数据类型（7 种原始类型和 1 种引用类型）

// Number 类型---------------------------------
// Number 类型代表整数和浮点数。
// 除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：Infinity、-Infinity 和 NaN。
// Infinity  代表数学概念中的 无穷大 ∞
// NaN  代表一个计算错误


console.log( 1 / 0 ); // Infinity
console.log( "abc" / 2 ); // NaN

// NaN 是粘性的。任何对 NaN 的进一步数学运算都会返回 NaN：
console.log( NaN + 1 ); // NaN

//在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。
// 脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 NaN 的结果。


// BitInt 类型---------------------------------
// 在 JavaScript 中，“number” 类型无法安全地表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。
// BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;

// String
// JavaScript 中的字符串必须被括在引号里。
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
// 双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。
// 反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中
let username = "John";
// 嵌入一个变量
console.log( `Hello, ${username}!` ); // Hello, John!
// JS 中没有字符类型，只有String


// Boolean 类型
// boolean 类型仅包含两个值：true 和 false。

 
// null 值。特殊的 null 值不属于上述任何一种类型。JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。
// 相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。
let age = null;

// undefined 值。特殊的 undefined 值不属于上述任何一种类型。undefined 的含义是 未被赋值。
let gender;   // undefined


// Object 类型
// object 类型是一个特殊的类型。其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）
// 后续会介绍 Object 类型


// Symbol 类型。用于创建对象的唯一标识符。后续会介绍。



// typeof 运算符返回参数的类型

console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof Math) // "object"  (1)
console.log(typeof null) // "object"  (2)
console.log(typeof alert) // "function"  (3)
