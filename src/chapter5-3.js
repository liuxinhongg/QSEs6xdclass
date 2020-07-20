/*es6全方位理解类的概念*/
{
    // es5是通过构造函数实现类的功能的
    // 构造函数和普通函数的区别是什么：构造函数一般命名的时候开头是大写
    function Person(name, age) {
        // 通过this进行赋值操作
        this.name = name;
        this.age = age;
    }
    // 给构造函数添加方法，一般在原型上定义方法
    Person.prototype.sayHello = function() {
        console.log(`大家好，我叫${this.name},我今年${this.name}`)
    }
    const p = new Person("刘新红", 18);
    console.log(p);
}
// ES5改造ES5实现类的方法, 类和构造函数的本质是一样的
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(`大家好，我叫${this.name},我今年${this.name}`)
        }
    }
    const p = new Person('liuxinhong', 20);
    console.log(p);
}
// 类的特点
{
    // 类的继承
    class Parent {
        constructor(name = 'lxh') {
            this.name = name;
        }
    }
    // extends子继承父
    /* class Child extends Parent {
     }
     console.log("继承", new Child()); //Child {name: "lxh"}
     */
    // 子类不写父类属性
    class Child extends Parent {
        constructor(name = 'jack') {
            // super:告诉父类，需要修改的属性是什么;super要放在构造函数的最前面
            super(name);
            this.name = name; //如果直接这样写会报错，需要用到super
        }
    }
    console.log("继承", new Child());
}
// 类的特点具有get和set的方法,get和set看着像是一个函数，其实是一个属性
{
    class Person {
        constructor(name = 'lxh') {
            this.name = name;
        }
        get fullName() {
                // \xa0空格的意思
                return this.name + '\xa0' + 'Liu'
            }
            // set不能是其他的属性，一定要是构造器有的属性
        set fullName(value) {
            this.name = value;
        }
    }
    const p = new Person();
    console.log('get', p.fullName);
    p.fullName = 'Jack';
    console.log('get', p.name);

}
// 如何给一个类定义一个静态方法
// 静态方法：只能在构造函数中使用的方法，不能在子类里面使用
{
    class Person {
        constructor(name = 'lxh') {
                this.name = name;
            }
            // static可以声明一个静态方法
        static sayHello(obj) {
            console.log('my name is' + '\xa0' + obj.name);
        }
    }
    const p = new Person('小花');
    // 通过类调用方法 这个方法就说静态方法
    Person.sayHello(p); //my name is小花
}
// 定义一个静态属性
{
    class Person {
        // es7定义一个静态属性
        static prop = 'test'
        constructor(name = 'lxh') {
                this.name = name;
            }
            // static可以声明一个静态方法
        static sayHello(obj) {
            console.log('my name is' + '\xa0' + obj.name);
        }
    }
    // Person.prop = 'test'; //es6
    // es7提供了一个新的方式，直接可以在类里面书写一个静态书写
    // 需要下载插件：npm i babel-preset-es2017;然后要在babelrc里面配置
    console.log('es7', Person.prop); //需要把html里面路径改为src/chapter5-3.js
}