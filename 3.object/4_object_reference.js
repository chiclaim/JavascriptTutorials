// 对象引用及复制

// 对象与原始类型的根本区别之一是，对象是“通过引用”存储和复制的，而原始类型：字符串、数字、布尔值等 —— 总是“作为一个整体”复制。


// 例如下面两个变量，是两个独立的变量，每个都存储着字符串 "Hello!"。
let message = "Hello!";
let phrase = message;


// 对象的赋值和原始类型不一样
// 赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址” —— 换句话说就是对该对象的“引用”。

let user = {
    name: "John"
};
let admin = user

// user.name: John  admin.name: John
console.log("user.name:", user.name, " admin.name:", admin.name)
admin.name = "Chiclaim"
// user.name: Chiclaim  admin.name: Chiclaim
console.log("user.name:", user.name, " admin.name:", admin.name)

// 通过引用来比较

let a = {};
let b = a; // 复制引用

console.log(a == b); // true，都引用同一对象
console.log(a === b); // true

a = {};
b = {}; // 两个独立的对象
console.log(a == b); // false


// 克隆与合并，Object.assign
user = {
    name: "John",
    age: 30
};
let clone = {}; // 新的空对象
// 将 user 中所有的属性拷贝到其中
for (let key in user) {
    clone[key] = user[key];
}
// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据
console.log(user.name); // 原来的对象中的 name 属性依然是 John

// 通过 Object.assign 克隆对象
// Object.assign(dest, [src1, src2, src3...])

user = { name: "John" };
let permissions1 = { name: "permissions1", canView: true };
let permissions2 = { name: "permissions2", canEdit: true };
// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
// 如果属性名已经存在，则会被后面的覆盖
clone = Object.assign(user, permissions1, permissions2);
console.log(clone) // { name: 'permissions2', canView: true, canEdit: true }



// --------深层克隆
// Object.assign 是浅拷贝
// 要想实现深拷贝，可以使用 lodash 库的 cloneDeep(obj)。




//--------使用 const 声明的对象也是可以被修改的
const manager = {
    name: "John"
};
manager.name = "Pete"; // (*)
manager = user // TypeError: Assignment to constant variable.
console.log(manager.name); // Pete

















