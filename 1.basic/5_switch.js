


// switch 语句有至少一个 case 代码块和一个可选的 default 代码块。

let num = 2

switch (num) {
    case 1:
        console.log(1)
        break
    case -2:
    case 2:
        console.log("2 or -2")
        break  // 如果没有 break，则会自动执行下一个 case
    case 3:
        console.log(3)
        break
    case "2": // 这里的相等是严格相等。被比较的值必须是相同的类型才能进行匹配。
        console.log("str 2")
        break
}

console.log("2" == 2) // true
console.log("2" === 2) // false