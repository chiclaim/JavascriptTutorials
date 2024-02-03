// Map and Set（映射和集合）

// Map 是一个带键的数据项的集合，就像一个 Object 一样
// 但是它们最大的差别是 Map 允许任何类型的键（key）。

// 它的方法和属性如下：
//  new Map() —— 创建 map。
//  map.set(key, value) —— 根据键存储值。
//  map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
//  map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
//  map.delete(key) —— 删除指定键的值。
//  map.clear() —— 清空 map。
//  map.size —— 返回当前元素个数。


let map = new Map();

map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键
// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.size); // 3

// 注意：map[key] 不是使用 Map 的正确方式
// 虽然 map[key] 也有效，例如我们可以设置 map[key] = 2，这样会将 map 视为 JavaScript 的 plain object，因此它暗含了所有相应的限制（仅支持 string/symbol 键等）。
// 所以我们应该使用 map 方法：set 和 get 等。
let user = { age: 11 }
let user2 = { age: 11 }
map[user] = "user"
map[user2] = "user2"
console.log(map[user]) // user2  说明被覆盖了
// map[user] 相当于 map["[object Object]"] 
console.log(map["[object Object]"])
// map[user] = "user" 相当于给 map 添加 `[object Object]` 属性


// set get
map.set(user, "user")
map.set(user2, "user2")
console.log(map.get(user))  // user
console.log(map.get(user2)) // user2




//===================Map 是怎么比较键的？
// Map 使用 SameValueZero 算法来比较键是否相等。它和严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。
// 这个算法不能被改变或者自定义。




//===================Map 迭代
// map.keys() —— 遍历并返回一个包含所有键的可迭代对象，
// map.values() —— 遍历并返回一个包含所有值的可迭代对象，
// map.entries() —— 遍历并返回一个包含所有实体 [key, value] 的可迭代对象，for..of 在默认情况下使用的就是这个。
// 迭代的顺序与插入值的顺序相同。与普通的 Object 不同，Map 保留了此顺序。

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
    console.log(entry); // cucumber,500 (and so on)
}

// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
});


// Object.entries：从对象创建 Map
let obj = {
    name: "John",
    age: 30
};
map = new Map(Object.entries(obj));
console.log(map.get('name')); // John

//===================Object.fromEntries：从 Map 创建对象
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// 现在 prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2

// 省略 .entries()
obj = Object.fromEntries(map);
console.log(obj.name); // 2



//=====================Set 集合
// Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。
// new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
// set.add(value) —— 添加一个值，返回 set 本身
// set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
// set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
// set.clear() —— 清空 set。
// set.size —— 返回元素个数。

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set 只保留不重复的值
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John（然后 Pete 和 Mary）
}


// Set 迭代（iteration）
set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) console.log(value);
// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
    console.log(value);
});

console.log(set.keys()); // [Set Iterator] { 'oranges', 'apples', 'bananas' }
console.log(set.values()); // [Set Iterator] { 'oranges', 'apples', 'bananas' }
console.log(set.entries()); // [Set Entries] { [ 'oranges', 'oranges' ],[ 'apples', 'apples' ],[ 'bananas', 'bananas' ]}
















