// symbol 类型
// 根据规范，只有两种原始类型可以用作对象属性键：
//  1. 字符串类型
//  2. symbol 类型
//  如果使用其他类型，如 obj[true] 会装成字符串，相当于 obj["true"]
// 例如：
let user = {
    gender: 1,
}
user["name"] = "chiclaim"
user["age"] = 18

console.log(user.name)  // chiclaim
console.log(user.age)   // 18
console.log(user.gender) // 1

// 创建 Symbol
let id = Symbol();
// id 是描述为 "id" 的 symbol
let id2 = Symbol("id");
let id3 = Symbol("id");

// symbol 保证是唯一的。即使我们创建了许多具有相同描述的 symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。
console.log(id2 == id3) // false

// 获取 symbol 描述
console.log(id2.toString())
console.log(id2.description)


// symbol 有什么用？

// symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。
// 例如，如果我们使用的是属于第三方代码的 user 对象，我们想要给它们添加一些标识符。
// 我们可以给它们使用 symbol 键：
user = { // 属于另一个代码
    name: "John"
};
id = Symbol("id");
user[id] = 1;
console.log(user[id]); // 我们可以使用 symbol 作为键来访问数据

// 使用 Symbol("id") 作为键，比起用字符串 "id" 来有什么好处呢？
//      由于 user 对象属于另一个代码库，所以向它们添加字段是不安全的，因为我们可能会影响代码库中的其他预定义行为。
//      但 symbol 属性不会被意外访问到。第三方代码不会知道新定义的 symbol，因此将 symbol 添加到 user 对象是安全的。


// 假设是第三方库提供的 user 对象
user = { name: "John" };
// 我们的脚本使用了 "id" 属性。
user.id = "Our id value";
// ……另一个脚本也想将 "id" 用于它的目的……
user.id = "Their id value"
// 砰！无意中被另一个脚本重写了 id！
// 如果使用 symbol 则不会有这个问题，因为互不干扰

// -------------对象字面量中的 symbol
id = Symbol("id");
user = {
    name: "John",
    [id]: 123 // 而不是 "id"：123
};

// console.log(user.id)  要使用方括号的方式访问
console.log(user[id])  // 123

// symbol 在 for…in 中会被跳过
// symbol 属性不参与 for..in 循环。
for (let key in user) console.log(key); // 只有 name

// Object.keys(user) 也会忽略它们。这是一般“隐藏符号属性”原则的一部分
console.log(Object.keys(user)) // [ 'name' ]

// Object.assign 会同时复制字符串和 symbol 属性
let target = {}
let user2 = Object.assign(target, user)
console.log(user2[id]) // 123

// 因为 symbol 避免被意外访问，所以遍历属性 key 的时候，是拿不到 symbol 属性的。但是 assign 克隆对象的时候，并不是去访问 symbol 属性




// ------全局 symbol
// 下面两个 symbol 虽然描述符一样，但是是不同的对象
id = Symbol("id")
id2 = Symbol("id")
console.log(id === id2); // false
// 但有时我们想要名字相同的 symbol 具有相同的实体，可以使用全局 symbol

// 从全局注册表中读取
id = Symbol.for("id"); // 如果该 symbol 不存在，则创建它
// 再次读取（可能是在代码中的另一个位置）
id2 = Symbol.for("id");
// 相同的 symbol
console.log(id === id2); // true

// Symbol.for 从全局 symbol 中返回 symbol 实例
// Symbol.keyFor 内部使用全局 symbol 注册表来查找 symbol 的键. 所以它不适用于非全局 symbol
console.log(Symbol.keyFor(id)) // id
// 非全局 symbol
username = Symbol("username")
console.log(Symbol.keyFor(username)) // undefined



// 系统 symbol
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive

class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

const arr = [1, 2, 3]; 
console.log(arr instanceof MyArray); // true
