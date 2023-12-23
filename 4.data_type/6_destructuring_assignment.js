// 解构赋值


// 我们有一个存放了名字和姓氏的数组
let arr = ["John", "Smith"]


// 解构赋值
// 设置 firstName = arr[0]
// 以及 surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith

[firstName, surname] = "John Smith".split(' ');
console.log(firstName); // John
console.log(surname);  // Smith




// 等号右侧可以是任何可迭代对象
let [a, b, c] = "abc"; // ["a", "b", "c"]

// 赋值给等号左侧的任何内容
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith


// 与 .entries() 方法进行循环操作
user = {
    name: "John",
    age: 30
};

// 使用循环遍历键—值对
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

// 用于 Map 的类似代码更简单，因为 Map 是可迭代的：
user = new Map();
user.set("name", "John");
user.set("age", "30");
// Map 是以 [key, value] 对的形式进行迭代的，非常便于解构
for (let [key, value] of user) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

// 交换变量值的技巧
let guest = "Jane";
let admin = "Pete";
// 让我们来交换变量的值：使得 guest = Pete，admin = Jane
[guest, admin] = [admin, guest];
console.log(`guest=${guest} admin=${admin}`); // Pete Jane（成功交换！）



// 可以通过添加额外的逗号来丢弃数组中不想要的元素：
// 不需要第二个元素
let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title); // Consul

// 其余的 ‘…’
// 通常，如果数组比左边的列表长，那么“其余”的数组项会被省略。
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1); // Julius
console.log(name2); // Caesar


// 如果我们还想收集其余的数组项 —— 我们可以使用三个点 "..." 来再加一个参数以获取其余数组项：
[name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest 是包含从第三项开始的其余数组项的数组
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2


// =============默认值=============
[firstName, surname] = [];
console.log(firstName); // undefined
console.log(surname);   // undefined

// 默认值
[username2 = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(username2);    // Julius（来自数组的值）
console.log(surname); // Anonymous（默认值被使用了）



// ==========对象解构========
// 基本语法是：let {var1, var2} = {var1:…, var2:…}
let options = {
    menuTitle: "Menu",
    width: 100,
    height: 200
};
let { menuTitle, width, height } = options;
console.log(menuTitle);  // Menu
console.log(width);  // 100
console.log(height); // 200

// 变量的顺序并不重要，下面这个代码也是等价的：
// 改变 let {...} 中元素的顺序
let { height2, width2, title2 } = { title2: "Menu", height2: 200, width2: 100 }
console.log(`title2=${title2},width2=${width2},height2=${title2}`) // title2=Menu,width2=100,height2=Menu


// 等号左侧的模式（pattern）可以更加复杂，指定属性和变量之间的映射关系。
// { sourceProperty: targetVariable }
let { width: w, height: h, menuTitle: t } = options;
console.log(t);  // Menu
console.log(w);      // 100
console.log(h);      // 200


options = {
    title4: "Menu"
};

let { width4 = 100, height4 = 200, title4 } = options;

console.log(title4);  // Menu
console.log(width4);  // 100
console.log(height4); // 200

//  ============还可以将冒号和等号结合起来：============
options = {
    title5: "Menu"
};
let { width: w5 = 100, height: h5 = 200, title5 } = options;
console.log(title5);  // Menu
console.log(w5);      // 100
console.log(h5);      // 200


options = {
    title6: "Menu",
    width: 100,
    height: 200
};
// 仅提取 title 作为变量
let { title6 } = options;
console.log(title6); // Menu


// 剩余模式（pattern）"…"
options = {
    title7: "Menu",
    height7: 200,
    width7: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let { title7, ...rest3 } = options;

// 现在 title="Menu", rest={height: 200, width: 100}
console.log(rest3.height7);  // 200
console.log(rest3.width7);   // 100

// ========不使用 let 时的陷阱========
let nickname;
// 这一行发生了错误，因为 js 会把 {} 当做代码块
//{nickname} = { nickname: "Chiclaim", age: 18, gender: 1 };

// 为了告诉 JavaScript 这不是一个代码块，我们可以把整个赋值表达式用括号 (...) 包起来：
({ nickname } = { nickname: "Chiclaim", age: 18, gender: 1 });
console.log(nickname) // Chiclaim


// ===========嵌套解构===========
options = {
    size: {
        width8: 100,
        height8: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// 为了清晰起见，解构赋值语句被写成多行的形式
let {
    size: { // 把 size 赋值到这里
        width8,
        height8
    },
    items: [item1, item2], // 把 items 赋值到这里
    menuTitle_ = "Menu" // 在对象中不存在（使用默认值）
} = options;

console.log(menuTitle_);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
// 注意，size 和 items 没有对应的变量，因为我们取的是它们的内容。
// console.log(size)
// console.log(items)


// ------------智能函数参数
// 有时，一个函数有很多参数，其中大部分的参数都是可选的
// 例如：
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    console.log(`title=${title}, width=${width}, height=${height}, items=${items}`)
}

// 在采用默认值就可以的位置设置 undefined
// 只设置 title 和 items
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]) // title=My Menu, width=200, height=100, items=Item1,Item2

// 能不能只设置，想传递的参数呢，不用使用 undefined ,解构赋值可以解决这些问题。

function showMenu2({ title = "Untitled", width = 200, height = 100, items = [] }) {
    console.log(`title=${title}, width=${width}, height=${height}, items=${items}`)
}
// 只设置 title 和 items
showMenu2({ title: "My menu", items: ["Item1", "Item2"] }) // title=My Menu, width=200, height=100, items=Item1,Item2


// 也可以使用带有嵌套对象和冒号映射的更加复杂的解构
// 完整语法和解构赋值是一样的：
// incomingProperty: varName = defaultValue
function showMenu3({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {
    console.log(`${title} ${w} ${h}`); // My Menu 100 200
    console.log(item1); // Item11
    console.log(item2); // Item22
}
showMenu3({ title: "My menu", items: ["Item11", "Item22"] })


// 如果我们想让所有的参数都使用默认值，那我们应该传递一个空对象：
function showMenu4({ title = "Menu", width = 100, height = 200 }) {
    console.log(`${title} ${width} ${height}`); // Menu 100 200
}

showMenu4({}); // 传递一个空对象, 所有值都取默认值
// showMenu4(); // 这样会导致错误

// showMenu3({}) //会报错，因为有 items 参数，会自动结构，但是传递的是空独享，item=undefined 无法解构



// 我们可以通过指定空对象 {} 为整个参数对象的默认值来解决这个问题：
function showMenu5({ title = "Menu", width = 100, height = 200 } = {}) {
    console.log(`${title} ${width} ${height}`); // Menu 100 200
}
showMenu5()
