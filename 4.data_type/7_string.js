// 字符串
// 在 JavaScript 中，文本数据被以字符串形式存储，单个字符没有单独的类型。
// 字符串的内部格式始终是 UTF-16，它不依赖于页面编码。



// 字符串可以包含在单引号、双引号或反引号中

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

// 反引号允许我们通过 ${…} 将任何表达式嵌入到字符串中
function sum(a, b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
console.log("===========================")

// 反引号的另一个优点是它们允许字符串跨行：
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList); // 客人清单，多行

console.log("===========================")

// 特殊字符
guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList); // 一个多行的客人列表

// 特殊字符列表
/*
\n	        换行
\r	        在 Windows 文本文件中，两个字符 \r\n 的组合代表一个换行。而在非 Windows 操作系统上，它就是 \n。这是历史原因造成的，大多数的 Windows 软件也理解 \n。
\', \"	    引号
\\	        反斜线
\t	        制表符
\b, \f, \v	退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。
\xXX	    具有给定十六进制 Unicode XX 的 Unicode 字符，例如：'\x7A' 和 'z' 相同。
\uXXXX	    以 UTF-16 编码的十六进制代码 XXXX 的 Unicode 字符，例如 \u00A9 —— 是版权符号 © 的 Unicode。它必须正好是 4 个十六进制数字。
\u{X…XXXXXX}（1 到 6 个十六进制字符）	具有给定 UTF-32 编码的 Unicode 符号。一些罕见的字符用两个 Unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。
*/

// 字符串长度(length是字符串属性，不是方法)
console.log(`hello\n`.length); // 6


console.log("===========================")

// 访问字符
let str = `Hello`;
// 第一个字符
console.log(str[0]); // H
console.log(str.charAt(0)); // H
// 最后一个字符
console.log(str[str.length - 1]); // o

// for..of 遍历字符
for (let char of str) {
    console.log(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}
console.log("===========================")
// for..in 遍历字符
for (let index in str) {
    console.log(str[index]); // H,e,l,l,o
}

console.log("===========================")

// 字符串是不可变的
str[0] = 'h'; // error
console.log(str[0]); // 无法运行



console.log("=============大小写 toLowerCase() toUpperCase()==============")
console.log('Interface'.toUpperCase()); // INTERFACE
console.log('Interface'.toLowerCase()); // interface
console.log('Interface'[0].toLowerCase()); // 'i'

console.log("=============查找子字符串==============")
// str.indexOf(substr, pos) 它从给定位置 pos 开始，在 str 中查找 substr
// str.lastIndexOf(substr, pos)

str = 'Widget with id';
console.log(str.indexOf('Widget')); // 0，因为 'Widget' 一开始就被找到
console.log(str.indexOf('widget')); // -1，没有找到，检索是大小写敏感的
console.log(str.indexOf("id")); // 1，"id" 在位置 1 处（……idget 和 id）
// "id" 第一次出现的位置是 1。查询下一个存在位置时，我们从 2 开始检索
console.log(str.indexOf('id', 2)) // 12

console.log(str.lastIndexOf('id')) //  12
console.log(str.lastIndexOf('id', 12)) //  12?


// includes，startsWith，endsWith
console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)); // false, 从位置 3 开始没有 "id"
console.log("Widget".startsWith("Wid")); // true，"Widget" 以 "Wid" 开始
console.log("Widget".endsWith("get")); // true，"Widget" 以 "get" 结束


console.log("=============获取子字符串==============")
// str.slice(start [, end]) 返回字符串从 start 到（但不包括）end 的部分。
str = "stringify";
console.log(str.slice(0, 5)); // 'strin'，从 0 到 5 的子字符串（不包括 5）
console.log(str.slice(0, 1)); // 's'，从 0 到 1，但不包括 1，所以只有在 0 处的字符
// start/end 也有可能是负值。它们的意思是起始位置从字符串结尾计算：
console.log(str.slice(-4, -1)); // 'gif'

// str.substring(start [, end])
// 返回字符串从 start 到（但不包括）end 的部分。
// 这与 slice 几乎相同，但它允许 start 大于 end。

// 这些对于 substring 是相同的
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// ……但对 slice 是不同的：
console.log(str.slice(2, 6)); // "ring"（一样）
console.log(str.slice(6, 2)); // ""（空字符串）
// str.substring 不支持负参数（不像 slice），它们被视为 0。


// str.substr(start [, length])
console.log(str.substr(2, 4)); // 'ring'，从位置 2 开始，获取 4 个字符

/*
使用哪一个？
str.slice(start [, end])
str.substring(start [, end])
str.substr

它们都可用于获取子字符串。正式一点来讲，substr 有一个小缺点：
    它不是在 JavaScript 核心规范中描述的，而是在附录 B 中。附录 B 的内容主要是描述因历史原因而遗留下来的仅浏览器特性。因此，理论上非浏览器环境可能无法支持 substr，但实际上它在别的地方也都能用。

相较于其他两个变体，slice 稍微灵活一些，它允许以负值作为参数并且写法更简短。因此仅仅记住这三种方法中的 slice 就足够了。
*/


// 比较字符串
// 小写字母总是大于大写字母：
console.log('a' > 'Z'); // true
console.log('Österreich' > 'Zealand'); // true

// 所有的字符串都使用 UTF-16 编码。即：每个字符都有对应的数字代码。有特殊的方法可以获取代码表示的字符，以及字符对应的代码。
// str.codePointAt(pos)
// 不同的字母有不同的代码
console.log("a".codePointAt(0)); // 97
console.log("A".codePointAt(0)); // 65
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90

console.log(String.fromCodePoint(97)) // a

// 我们还可以用 \u 后跟十六进制代码，通过这些代码添加 Unicode 字符：
console.log( '\u005a' ); // Z


// 正确的比较
// 执行字符串比较的“正确”算法比看起来更复杂，因为不同语言的字母都不相同。
// 因此浏览器需要知道要比较的语言。
// str.localeCompare(str2) 会根据语言规则返回一个整数，这个整数能指示字符串 str 在排序顺序中排在字符串 str2 前面、后面、还是相同：
//      如果 str 排在 str2 前面，则返回负数。
//      如果 str 排在 str2 后面，则返回正数。
//      如果它们在相同位置，则返回 0。









