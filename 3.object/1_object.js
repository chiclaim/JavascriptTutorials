

// 对象用来存储键值对和更复杂的实体

// 通过使用带有可选 属性列表 的花括号 {…} 来创建对象。一个属性就是一个键值对（“key: value”），其中键（key）是一个字符串（也叫做属性名），值（value）可以是任何值。

// 创建对象
let user = new Object(); // “构造函数” 的语法
user.name = "chiclaim"
user.age = 18
console.log("user.name", user.name, "user.age", user.age)

let user2 = {};  // “字面量” 的语法
user2.name = "chiclaim" // 给属性设置值
user2.age = 18
console.log("user2.name", user.name, "user2.age", user.age)


let user3 = {     // 一个对象
    name: "John",  // 键 "name"，值 "John"
    age: 30        // 键 "age"，值 30
}
// 获取属性值
console.log("user3.name", user.name, "user3.age", user.age)

// delete 删除属性
delete user.age
console.log("user.name", user.name, "user.age", user.age) // user.name chiclaim user.age undefined


// 也可以用多字词语来作为属性名，但必须给它们加上引号：
let user4 = {
    name: "John",
    age: 30,
    "likes birds": true  // 多词属性名必须加引号
};

// 这将提示有语法错误
// user4.likes birds = true
console.log("likes birds", user4["likes birds"])

// 删除
delete user4["likes birds"];



// 计算属性
let fruit = "apple" // 也可以通过计算得到
let bag = {
    [fruit]: 5, // 属性名是从 fruit 变量中得到的
};
console.log(bag.apple)


// 属性值简写
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ……其他的属性
    };
}
function makeUser2(name, age) {
    return {
        name, // 与 name: name 相同
        age,  // 与 age: age 相同
        gender: 1
        // ...
    };
}

// 属性名称不受保留关键字限制
// 这些属性都没问题
let obj = {
    for: 1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let + obj.return);  // 6

// 即使属性不存在也不会报错！读取不存在的属性只会得到 undefined
let user5 = {};
console.log(user5.noSuchProperty === undefined); // true 意思是没有这个属性
// 有时候通过 undefined 无法判断是否存在这个属性：
let user6 = {
    name: undefined,
    age: 18,
    gender: 1
};
console.log(user6.name) // undefined ，但是 name 属性是存在的

// 可以通过 in 操作来判断
console.log("name" in user6) // true

// "for..in" 循环
for (pro in user6) {
    console.log(pro, user6[pro])
}



// 对象属性顺序
// 整数属性会被进行排序，其他属性则按照创建的顺序显示
// 把它转换成整数，再转换回来，它还是一样的
let codes = {
    "49": "Germany",  // 是整数属性
    "41": "Switzerland", // 是整数属性
    "44": "Great Britain", // 是整数属性
    // ..,
    "1": "USA",

    "1.02": "1.02", // 不是整数属性
    "abc": "abc",   // 不是整数属性
    "1.0": "1.0",   // 1.0 不是整数属性 1.0 转成 Number 是 1
    "other": "other", // 不是整数属性

};
for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}
console.log(Number("1.02"))

function isEmpty(obj) {
    for (pro in obj) {
        return true
    }
    return false
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    dd: -1
}
let countSalary = 0
for (pro in salaries) {
    if (salaries[pro])
        countSalary += salaries[pro]
}
console.log("countSalary", countSalary)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
for (pro in menu) {
    if (typeof menu[pro] == 'number') {
        menu[pro] *= 2
    }
}
for (pro in menu) {
    console.log(menu[pro]);
}