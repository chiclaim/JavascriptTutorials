// 值的比较

//1. 大小比较 > >= < <=
//2. 值相等 ==  !=
//3. 严格相等  ===  !==
// 比较的结果如果成立则是 true 否则为 false


// 字符串比较
// JavaScript 会使用“字典（dictionary）”或“词典（lexicographical）”顺序进行判定。换言之，字符串是按字符（母）逐个进行比较的。
// 非真正的字典顺序，而是 Unicode 编码顺序
console.log("Z" > "A") // true
console.log("Bee" > "Be") // true
console.log("2.1.1" > "2.1.02") // true
console.log("2.1.1" > "2.1.10") // false


// 不同类型的比较(把待比较的值转化为数字后)
console.log("2" > 1) // true      Number("2")=2
console.log("002" == 2) // true   Number("002")=2
console.log(false == 0) // true   Number(false)
console.log(true == 1) // true    Number(true)

let a = false
let b = ""
console.log(a == b) // true  Number(false)=0  Number("")=0



// 严格相等(严格相等运算符 === 在进行比较时不会做任何的类型转换)
console.log(false == 0)  // true
console.log(false === 0) // false


//《null 和 undefined 比较》start=====================================================================================================

// 1. 在 JS 中存在的一个特殊规则，null == undefined 是 true，它不会进行任何的类型转换。除了它们之间互等外，不会等于任何其他的值
// 2. 如果被比较值存在 null, 相等性检查 == 和普通比较符 > < >= <= 的代码逻辑是相互独立的。大小比较会转 Number，== 不会转进行 Number 转化
console.log(null === undefined)  // false
console.log(null == undefined)  // true 
console.log(null == 0)          // false  null 不会等于任何其他的值 
console.log(null == null)       // true
console.log(null > undefined)  // false Number(null)=0  Number(undefined)=NaN
console.log(null < undefined)  // false Number(null)=0  Number(undefined)=NaN
console.log(null >= 0)   // true  Number(null)=0   0>=0 true
console.log(NaN == NaN) // false-----------------


// undefined 不应该被与其他值进行比较
// 和上面的 null 一样，如果比较大小的时候，被比较的值存在 undefined，如果是相等性检查 ==，不会进行Number转化；如果是值比较则会进行 Number 转化
console.log(undefined == undefined) // true
console.log(undefined != 0) // true  undefined 不会与其他值相等
console.log(undefined == 0) // false  undefined 只与 null 相等，不会与其他值相等
console.log(undefined > 0) // false  Number(undefined)=NaN
console.log(undefined < 0) // false  Number(undefined)=NaN

// 上面 null 和 undefined 总结：
// 1. 如果是值比较(>、>=、<、<=)，会将 null 或 undefined 进行 Number 转化，null 转成 0，undefined 转成 NaN
// 2. 如果是相等性比较(==、!=)，不会发生 Number 转化，并且有一条特殊规则，null==undefined，除此以外它们不与其他任何值相等

//《null 和 undefined 比较》end=======================================================================================================