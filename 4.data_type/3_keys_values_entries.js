// Object.keys，values，entries


let user = {
    name: "John",
    age: 30
};

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))


// Object.keys/values/entries 会忽略 symbol 属性
// 就像 for..in 循环一样，这些方法会忽略使用 Symbol(...) 作为键的属性。\
// Object.getOwnPropertySymbols，它会返回一个只包含 Symbol 类型的键的数组。
// 另外，还有一种方法 Reflect.ownKeys(obj)，它会返回 所有 键。


// 转换对象
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // 将价格转换为数组，将每个键/值对映射为另一对
    // 然后通过 fromEntries 再将结果转换为对象
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);
console.log(doublePrices); // 8
