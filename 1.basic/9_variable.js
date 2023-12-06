// 变量

// 变量 是数据的“命名存储”

// 将字符串 hello 保存在名为 message 的变量中
// 字符串 hello 保存到了与该变量相关的内存区域了，后续可以通过 message 这个变量来获取和修改该内存区域的值
let message = "hello"  // 使用 let 关键字声明
console.log(message) // 获取值
message = "hello world" // 修改值
console.log(message) // 获取值

// 对同一个变量重复声明会报错
// let message = "new hello"



// 常量（不变的变量）使用 const 关键字声明
// 常量一般为大写
const GENDER = 1
// 运行时会报错
// GENDER = 0

// 除了可以 let 还可以使用 var 声明（不建议）后续会介绍到















