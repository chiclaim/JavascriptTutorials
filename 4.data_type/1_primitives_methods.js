// 原始类型的方法

// 原始类型
// 一个原始值，原始类型的一种值，JS 中有7个原始类型：string，number，bigint，boolean，symbol，null 和 undefined

// 对象
// 能够存储多个值作为属性。
// 可以使用大括号 {} 创建对象

// 当作对象的原始类型
// 有的时候我们需要访问原始值的方法，比如将 string转成大写 str.toUpperCase() 
// 因为原始值不是个对象，为了为了使它起作用，创建了提供额外功能的特殊“对象包装器”，使用后即被销毁。
// “对象包装器”对于每种原始类型都是不同的，它们被称为 String、Number、Boolean、Symbol 和 BigInt。因此，它们提供了不同的方法。
let str = "Hello";
console.log(str.toUpperCase()); // HELLO
// str.toUpperCase() 原理分析：
// 1. 字符串 str 是一个原始值。因此，在访问其属性时，会创建一个包含字符串字面值的特殊对象，并且具有可用的方法，例如 toUpperCase()
// 2. 该方法运行并返回一个新的字符串（由 alert 显示）。
// 3. 特殊对象被销毁，只留下原始值 str。
// 所以原始类型可以提供方法，但它们依然是轻量级的。
// JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。但是它仍然必须遵守规范，并且表现得好像它创建了一样。

let n = 1.23456;
console.log(n.toFixed(2)); // 1.23


// 构造器 String/Number/Boolean 仅供内部使用
// 在 JavaScript 中，由于历史原因，这也是可以的 new String，new Number，new Boolean，但极其 不推荐。因为这样会出问题。
console.log(typeof 0); // "number"
console.log(typeof Number(0)); // "number"
console.log(typeof new Number(0)); // "object"!

if (new Number(0)) { // zero 为 true，因为它是一个对象
    console.log("zero is truthy?!?");
}
if (Number(0)) { // false
    console.log("zero is truthy?!?");
}


// null/undefined 没有任何方法
// 特殊的原始类型 null 和 undefined 是例外。它们没有对应的“对象包装器”，也没有提供任何方法。从某种意义上说，它们是“最原始的”。
