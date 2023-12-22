// 数组方法


function printArr(arr) {
    console.log("打印数组：", arr)
}

console.log("------- push 方法: 从尾端添加元素 -------")
let arr = [1, 2, 3]
arr.push(4, 5, 6,)
arr.push([1, 2, 3]) // 将数组作为一个整体放进去
printArr(arr)
arr.push(...[1, 2, 3]) // 将数组的元素展开，放入数组
printArr(arr)



console.log("------- pop 方法: 从尾端删除元素，并返回该元素 -------")
arr = [1, 2, 3]
console.log(arr.pop()) // 3
printArr(arr) // 1,2

console.log("------- shift 方法:  从首端删除元素，并返回该元素 -------")
arr = [1, 2, 3]
console.log(arr.shift()) // 1
printArr(arr) // 2,3


console.log("------- unshift 方法:  从首端添加元素，返回数组长度 -------")
arr = [1, 2, 3]
console.log(arr.unshift(0)) // 4 arr.length
printArr(arr) // 0,1,2,3


console.log("------- 删除元素 delete, 数组大小不会变化，只会将删除的元素变成 undefined -------")
arr = [1, 2, 3]
delete arr[0];
console.log(arr[0]); // undefined
console.log(arr.length) // 4


console.log("------- splice 实现数组的添加、删除、插入 -------")
// splice 拼接，衔接
// 语法：arr.splice(start[, deleteCount, elem1, ..., elemN])
arr = [1, 2, 3]
// 从索引 0 开始，删除 2 个元素
console.log(arr.splice(0, 2)) // [ 1, 2 ] 返回删除的元素
console.log(arr.length) // 1

// 删除的同时，插入元素
console.log("------- splice 删除的同时，插入元素 -------")
arr = [1, 2, 3]
// 从索引1的开始，删除2个元素，被删除的元素替换成 4, 5, 6
console.log(arr.splice(1, 2, 4, 5, 6)) // [2, 3]
printArr(arr) // [ 1, 4, 5, 6 ]


console.log("------- splice 只插入不删除元素 -------")
arr = [1, 2, 3]
// deleteCount=0
console.log(arr.splice(1, 0, 4, 5, 6)) // []
printArr(arr) // [ 1, 4, 5, 6, 2, 3 ]


console.log("------- splice 负索引 -------")
// start 为负数，表示从数组尾部开始，start=-1，可以理解为倒数第1个元素，-2 为倒数第2个元素
arr = [1, 2, 3]
// 从倒数第2个元素开始，删除2个元素，即删除的是[2,3]
console.log(arr.splice(-2, 2)) // [2,3]
printArr(arr) // [ 1 ]



console.log("------- slice 切片，返回一个新数组 -------")
// arr.slice([start], [end]) 
//      它会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组。
//      start 和 end 都可以是负数，在这种情况下，从末尾计算索引。

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.slice(4, 6)) // [5, 6]


console.log("------- concat 创建新数组，合并两个数组元素 -------")
arr = [1, 2, 3]
// 参数可以是数组或元素
let newArr = arr.concat([4, 5, 6], 7, 8, 9, 10)
printArr(newArr) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]


// 如果是对象，则会整个放进去
console.log("------- concat 数组拼接对象 -------")
arr = [1, 2, 3]
let user = {
    name: "chiclaim",
    age: 18
}
printArr(arr.concat(user))


// 但是，如果类数组对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组来处理
user = {
    // 属性名必须是数字或者可转成 Number 的字符串
    "0": "chiclaim",
    "1": 18,
    [Symbol.isConcatSpreadable]: true,
    length: 2 // 必须有 length 属性，否则不会被加入到数组中
}
printArr(arr.concat(user))


console.log("------- forEach 遍历数组 -------")
arr = [1, 2, 3]
arr.forEach(function (item, index, array) {
    console.log("index:", index, " value:", item)
});

console.log("------- 在数组中搜索 indexOf includes -------")
// arr.indexOf(item, from) —— 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1。
// arr.includes(item, from) —— 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）。
// indexOf 和 includes 使用严格相等 === 进行比较。所以，如果我们搜索 false，它会准确找到 false 而不是数字 0
// console.log(NaN === NaN) // false

arr = [1, 0, false, undefined, NaN, 0];
console.log(arr.length) // 5
console.log(arr.indexOf(0)) // 1
console.log(arr.lastIndexOf(0)) // 5
console.log(arr.includes(0)) // true
console.log(arr.includes(undefined)) // true
console.log(arr.indexOf(undefined)) // 3

// 方法 includes 可以正确的处理 NaN
console.log("arr.includes(NaN)", arr.includes(NaN)) // true
console.log("arr.indexOf(NaN)", arr.indexOf(NaN)) // -1


// find 和 findIndex/findLastIndex 想象一下，我们有一个对象数组。我们如何找到具有特定条件的对象？
arr = ["hello", "hi"]
let result = arr.find(function (item, index, array) {
    // 如果返回 true，则返回 item 并停止迭代
    // 对于假值（falsy）的情况，则返回 undefined
});
result = arr.find(function (item, index, array) {
    return item.length > 2
});
console.log(result)

// arr.findIndex 方法（与 arr.find）具有相同的语法，但它返回找到的元素的索引
arr = ["hello", "hi", "hey", "hi"]
console.log(arr.findIndex((item) => item == "hi")) // 1
console.log(arr.findLastIndex((item) => item == "hi")) // 3



// filter
// find 方法搜索的是使函数返回 true 的第一个（单个）元素。
// 如果需要匹配的有很多，我们可以使用 arr.filter(fn)。
let results = arr.filter(function (item, index, array) {
    // 如果 true item 被 push 到 results，迭代继续
    // 如果什么都没找到，则返回空数组
});
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = arr.filter(item => item % 2 == 0)
console.log(result) // [ 2, 4, 6, 8, 10 ]


// 数组转换
// map 语法：
/*
result = arr.map(function (item, index, array) {
    // 返回新值而不是当前元素
})*/
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6


// sort 排序
arr = [1, 2, 15]
arr.sort()
console.log(arr) // [ 1, 15, 2 ] 因为默认是按照字符串字典顺序排的
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr.sort(compareNumeric);
console.log(arr) // [ 1, 2, 15 ]

arr = [1, 2, 15]
arr.sort((a, b) => a - b); // 使用箭头函数
console.log(arr) // [ 1, 2, 15 ]


// reverse 方法用于颠倒 arr 中元素的顺序。
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr) // [ 5, 4, 3, 2, 1 ]


// str.split(delim) 方法通过给定的分隔符 delim 将字符串分割成一个数组
let names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ');
console.log(arr)


let str = "chiclaim"
console.log(str.split(''))

// join 拼接数组各个元素，每个元素 separator 分隔，然后返回整个字符串
names = arr.join(", ")
console.log(names) // Bilbo, Gandalf, Nazgul



// reduce 用于根据数组计算单个值
/*
let value = arr.reduce(function (accumulator, item, index, array) {
    ...
}, [initial]);
*/
// accumulator —— 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）。
// item —— 当前的数组元素。
// index —— 当前索引。
// arr —— 数组本身。

arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

// arr.reduceRight 和 arr.reduce 方法的功能一样，只是遍历为从右到左。


// Array.isArray
console.log(typeof {}); // object
console.log(typeof []); // object（相同）

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true


// “thisArg” 参数
// 几乎所有调用函数的数组方法 —— 比如 find，filter，map，除了 sort 是一个特例，都接受一个可选的附加参数 thisArg。
//  arr.find(func, thisArg);
//  arr.filter(func, thisArg);
//  arr.map(func, thisArg);
//  ...
//  thisArg 是可选的最后一个参数
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

arr = [11, 22, 33]
// 只要有一个大于 22 就返回 true
console.log(arr.some((e) => e > 22))
// 所有元素大于 22 就返回 true
console.log(arr.every((e) => e > 22))

console.log("---------------------------------------")

function camelize(str) {
    return str.split("-").map((e, i, array) => {
        if (i > 0 && e) {
            return e[0].toUpperCase() + e.slice(1, e.length)
        }
        return e;
    }).join('');
}

console.log(camelize("background-color"))
console.log(camelize("background--color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))






