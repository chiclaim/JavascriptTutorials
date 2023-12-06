// 空值合并运算符 '??'


// 当一个值既不是 null 也不是 undefined 时，我们将其称为“已定义的（defined）”。

/*
a ?? b 的结果是：
    如果 a 是已定义的，则结果为 a，
    如果 a 不是已定义的，则结果为 b。
    相当于 result = (a !== null && a !== undefined) ? a : b;
*/

// `??` 与 `||` 比较
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "匿名"); // Supercoder
// `??` 可以达到相同的效果
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// `??` 与 `||` 区别
// 1. || 返回第一个 真 值。
// 2. ?? 返回第一个 已定义的 值。
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0


// `??` 与 `||` 优先级
// `??` 运算符的优先级与 `||` 相同，它们的的优先级都为 4
let h = null;
let w = null;
// 重要：使用括号
let area = (h ?? 100) * (w ?? 50);
console.log(area); // 5000
let area2 = height ?? 100 * width ?? 50;
console.log(area2); // 0


// `??` 与 `&&` 或 `||` 一起使用
// 出于安全原因，JavaScript 禁止将 ?? 运算符与 && 和 || 运算符一起使用，除非使用括号明确指定了优先级。下面的代码会触发一个语法错误：
// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // 正常工作了
console.log(x); // 2