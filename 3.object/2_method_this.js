// 对象方法和 this

// 作为对象属性的函数被称为 方法。



let user = {
    name: "John",
    age: 30
};

// 使用函数表达式创建了一个函数，并将其指定给对象的 user.sayHi 属性。
// 方法 sayHi
user.sayHi = function () {
    console.log("Hello!");
};
user.sayHi(); // Hello!

// 方法简写
user = {
    gender: 1,
    sayHi: function () {
        console.log("Hello");
    }
};
user.sayHi()


// 方法中的 this 对象
user = {
    name: "John",
    age: 30,
    sayHi() {
        // "this" 指的是“当前的对象”
        // 谁调用 sayHi 方法，this 就是谁
        console.log(this.name);

        // 也可以使用 user 变量。但是如果 user 被重新赋值的话，可能就会有问题，因为 user 可能就没有 name 属性了
        // console.log(user.name);
    }
};
user.sayHi(); // John


//---------------this 不受限制
// 在 JavaScript 中，this 关键字与其他大多数编程语言中的不同。JavaScript 中的 this 可以用于任何函数，即使它不是对象的方法。
// 在 JavaScript 中，this 是“自由”的，它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象。

function sayHi() {
    console.log("this=", this);
    console.log(this.name);
}

// 严格模式下： this = undefined
// this.name 会报错
// 非严格模式下：this=全局对象
// this.name undefined
sayHi()

user = {
    name: "Chiclaim"
}
user.sayHi = sayHi

user.sayHi() // Chiclaim



// 箭头函数没有自己的 “this”
// 箭头函数有些特别：它们没有自己的 this。如果我们在这样的函数中引用 this，this 值取决于外部“正常的”函数。
// 这里的 arrow() 使用的 this 来自于外部的 user.sayHi() 方法：
user = {
    firstName: "Pony",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi(); // Pony


//--------------------------

// -------在对象字面量中使用 "this"
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

user = makeUser();
// 因为 makeUser 不是方法，this是一个全局对象，所以 ref.name 是 undefined
console.log(user.ref.name); // undefined

