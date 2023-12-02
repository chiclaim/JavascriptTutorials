
// if 语句, 语法
/*
    if(condition){

    }
*/
let age = 12
if (age < 18) {
    console.log("未成年")
}

// 布尔转换
// 数字 0、空字符串 ""、null、undefined 和 NaN 都会被转换成 false
// 字符串 "0" 会换成 true，" " 空格也会转换成 true，因为不是空字符串

// else 语句
if (age >= 18) {
    console.log("成年")
} else {
    console.log("未成年")
}

// else if
// 只要符合一个分支条件，剩余的分支则不会进行判断
if (age == 15) {
    console.log("送三个苹果")
} else if (age == 16) {
    console.log("送两个个苹果")
} else if (age == 17) {
    console.log("送一个苹果")
}

// 条件运算符 ‘?’
let result = age >= 18 ? "成年" : "未成年"
console.log(result)