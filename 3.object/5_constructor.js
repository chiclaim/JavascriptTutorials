// 构造器和操作符 "new"

// 常规的 {...} 语法允许创建一个对象。但是我们经常需要创建很多类似的对象
// 这可以使用构造函数和 "new" 操作符来实现。

// 构造函数在技术上是常规函数。不过有两个约定：
// 1. 它们的命名以大写字母开头。
// 2. 它们只能由 "new" 操作符来执行

function User(name) {
    // this = {};（隐式创建）
    this.name = name;
    this.isAdmin = false;
    // return this;（隐式返回）
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// 任何函数（除了箭头函数，它没有自己的 this）都可以用作构造器。

// ------构造器中的方法
function User2(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is: " + this.name);
    };
}
let john = new User2("John");
john.sayHi(); // My name is: John




