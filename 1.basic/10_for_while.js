// 循环

// while 语法：
/*
while (condition) {
  代码...
  所谓的“循环体”...
}
*/
// 当 condition 为 true 时执行[循环体]
// 循环体的单次执行叫作 一次迭代

// 例如使用 while 打印 100 以内的偶数
let num = 1
while (num < 10) {
    if (num % 2 == 0)
        console.log(num)
    num++
}


// do...while(condition)
/*
do {
  循环体
} while (condition);
*/
// 不管 condition 是否为真，循环体 至少执行一次

let number = 1;
do {
    if (number % 2 == 0)
        console.log(number)
    number++
} while (number < 10)



// for 语法：
/*
for (begin; condition; step) {
  循环体
}
*/
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) console.log(i)
}
// for 循环的基本原理：
/*
begin 执行一次，然后进行迭代：每次检查 condition 后，执行 body 和 step。

    开始运行
    → (如果 condition 成立 → 运行 body 然后运行 step)
    → (如果 condition 成立 → 运行 body 然后运行 step)
    → (如果 condition 成立 → 运行 body 然后运行 step)
    → ...

*/

// 内联 begin 声明
for (let i = 1; i < 10; i++) {
}
// 循环体外不能访问 i 变量


// 外联 begin 声明
let i = 0
for (i = 1; i < 10; i++) {
}

let index = 0
// 还可以省略 begin
for (; index < 10; index++) {
}


// 跳出循环 break
number = 1
while (true) {
    if (number == 5) break // 如果等于5跳出循环
    console.log(number)
    number++
}

// 继续下一次迭代 continue
// 打印10以内的偶数
number = 1
for (; number < 10; number++) {
    if (number % 2 == 1) // 遇到奇数 不往下执行，进入下一次迭代
        continue
    console.log(number)
}

// break/continue 标签(一般用于循环嵌套)
// 定义label的语法：
/*
labelName: for (...) {
  ...
}
 */
console.log("-------------")
myLabel: for (let i = 0; i < 10; i++) {
    console.log(i)
    for (let j = 0; j < 10; j++) {
        if (j + i == 5)
            break myLabel // 跳出最外层循环，执行 console.log("nest for loop done")
        console.log("\t" + j)
    }
}
console.log("nest for loop done")


console.log("-------------")
myLabel2: for (let i = 0; i < 10; i++) {
    console.log(i)
    for (let j = 0; j < 10; j++) {
        if (j == i) {
            console.log("\t" + j)
            continue myLabel2 // continue 最外层循环
        }
    }
}
console.log("nest for loop done")
