
// Iterable object（可迭代对象）
// 可以应用 for..of 的对象被称为 可迭代的。

// 迭代器原理分析：
//1.  当 for..of 循环启动时，它会调用 Symbol.iterator 方法
//2.  这个方法必须返回一个 迭代器（iterator） —— 一个有 next 方法的对象。
//3.  从此开始，for..of 仅适用于这个被返回的对象。
//4.  当 for..of 循环希望取得下一个数值，它就调用这个对象的 next() 方法。
//5.  next() 方法返回的结果的格式必须是 {done: Boolean, value: any}，当 done=true 时，表示循环结束，否则 value 是下一个值。

let range = {
    from: 1,
    to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function () {
    console.log("Symbol.iterator set current=", this.from)
    // ……它返回迭代器对象（iterator object）：
    // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
    return {
        // this 是 当前 {} 定义的对象
        // current 和 last 名字都可以自定义，主要用来判断什么结束循环
        current: this.from,
        last: this.to,

        // 3. next() 在 for..of 的每一轮循环迭代中被调用
        next() {
            // console.log("next ", this)
            // 4. 它将会返回 {done:.., value :...} 格式的对象
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    console.log(num);
    for (let num of range) {
        console.log("inner ", num);
    }
}



console.log("============公用一个迭代器============");
// 如果嵌套循环这个对象，则会有问题，因为共用了一个迭代器

range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        console.log("Symbol.iterator set current=", this.from)
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log("outer ", num);
    for (let num of range) {
        console.log("inner ", num);
    }
}

// 因为共用一个迭代器，迭代器的状态被内层循环设置 done 为 true，所以外层循环只执行了一遍
// Symbol.iterator set current= 1
// outer  1
// Symbol.iterator set current= 1
// inner  1
// inner  2
// inner  3
// inner  4
// inner  5


// ============字符串是可迭代的===========
for (let char of "test") {
    // 触发 4 次，每个字符一次
    console.log(char); // t, then e, then s, then t
}

let str = '𝒳😂';
for (let char of str) {
    console.log(char); // 𝒳，然后是 😂
}


// ============显式调用迭代器===========
str = "Hello";
// 和 for..of 做相同的事
// for (let char of str) console.log(char);
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // 一个接一个地输出字符
}



// 可迭代（iterable）和类数组（array-like）
// 什么是可迭代：Iterable 如上所述，是实现了 Symbol.iterator 方法的对象。
// 什么是类数组：是有索引和 length 属性的对象，所以它们看起来很像数组。
// 
let arrayLike = { // 有索引和 length 属性 => 类数组对象
    0: "Hello",
    1: "World",
    length: 2
};
// 可迭代对象和类数组对象通常都 不是数组，它们没有 push 和 pop 等方法

// 可先将类数组对象，通过 Array.from 转成数组，然后使用 push 和 pop 方法

// Array.from 方法接受对象，检查它是一个可迭代对象或类数组对象，然后创建一个新数组，并将该对象的所有元素复制到这个新数组。
let arr = Array.from(arrayLike);
console.log(arr); // Hello,World （数组的 toString 转化方法生效）

//  Array.from 的完整语法
//  Array.from(obj[, mapFn, thisArg])
arr = Array.from(arrayLike, (e) => e.toUpperCase())
console.log(arr); // [ 'HELLO', 'WORLD' ]



// 将 str 拆分为字符数组
// Array.from 可以处理代理对，代理对也就是 UTF-16 扩展字符
// str.split 
str = "𝒳😂"
let chars = Array.from(str);
console.log(chars) // [ '𝒳', '😂' ]
let chars2 = str.split('')
console.log(chars2) // [ '\ud835', '\udcb3', '\ud83d', '\ude02' ]
console.log(chars[0] == chars2[0]) // false


// str.slice 也不能处理代理对
console.log(str.slice(1, 2)) // �
console.log(str[1]) // �

// 可以基于 Array.from 创建代理感知（surrogate-aware）的slice 方法（译注：也就是能够处理 UTF-16 扩展字符的 slice 方法）
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}
console.log(slice(str, 1, 2)) // 😂


