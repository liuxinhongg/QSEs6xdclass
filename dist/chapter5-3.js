'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*es6全方位理解类的概念*/
{
    // es5是通过构造函数实现类的功能的
    // 构造函数和普通函数的区别是什么：构造函数一般命名的时候开头是大写
    var Person = function Person(name, age) {
        // 通过this进行赋值操作
        this.name = name;
        this.age = age;
    };
    // 给构造函数添加方法，一般在原型上定义方法


    Person.prototype.sayHello = function () {
        console.log('\u5927\u5BB6\u597D\uFF0C\u6211\u53EB' + this.name + ',\u6211\u4ECA\u5E74' + this.name);
    };
    var p = new Person("刘新红", 18);
    console.log(p);
}
// ES5改造ES5实现类的方法, 类和构造函数的本质是一样的
{
    var _Person = function () {
        function _Person(name, age) {
            _classCallCheck(this, _Person);

            this.name = name;
            this.age = age;
        }

        _createClass(_Person, [{
            key: 'sayHello',
            value: function sayHello() {
                console.log('\u5927\u5BB6\u597D\uFF0C\u6211\u53EB' + this.name + ',\u6211\u4ECA\u5E74' + this.name);
            }
        }]);

        return _Person;
    }();

    var _p = new _Person('liuxinhong', 20);
    console.log(_p);
}
// 类的特点
{
    // 类的继承
    var Parent = function Parent() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lxh';

        _classCallCheck(this, Parent);

        this.name = name;
    };
    // extends子继承父
    /* class Child extends Parent {
     }
     console.log("继承", new Child()); //Child {name: "lxh"}
     */
    // 子类不写父类属性


    var Child = function (_Parent) {
        _inherits(Child, _Parent);

        function Child() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jack';

            _classCallCheck(this, Child);

            var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));
            // super:告诉父类，需要修改的属性是什么;super要放在构造函数的最前面


            _this.name = name; //如果直接这样写会报错，需要用到super
            return _this;
        }

        return Child;
    }(Parent);

    console.log("继承", new Child());
}
// 类的特点具有get和set的方法,get和set看着像是一个函数，其实是一个属性
{
    var _Person2 = function () {
        function _Person2() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lxh';

            _classCallCheck(this, _Person2);

            this.name = name;
        }

        _createClass(_Person2, [{
            key: 'fullName',
            get: function get() {
                // \xa0空格的意思
                return this.name + '\xa0' + 'Liu';
            }
            // set不能是其他的属性，一定要是构造器有的属性
            ,
            set: function set(value) {
                this.name = value;
            }
        }]);

        return _Person2;
    }();

    var _p2 = new _Person2();
    console.log('get', _p2.fullName);
    _p2.fullName = 'Jack';
    console.log('get', _p2.name);
}
// 如何给一个类定义一个静态方法
// 静态方法：只能在构造函数中使用的方法，不能在子类里面使用
{
    var _Person3 = function () {
        function _Person3() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lxh';

            _classCallCheck(this, _Person3);

            this.name = name;
        }
        // static可以声明一个静态方法


        _createClass(_Person3, null, [{
            key: 'sayHello',
            value: function sayHello(obj) {
                console.log('my name is' + '\xa0' + obj.name);
            }
        }]);

        return _Person3;
    }();

    var _p3 = new _Person3('小花');
    // 通过类调用方法 这个方法就说静态方法
    _Person3.sayHello(_p3); //my name is小花
}
// 定义一个静态属性
{
    var _Person4 = function () {
        // es7定义一个静态属性
        // static prop = 'test';
        function _Person4() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lxh';

            _classCallCheck(this, _Person4);

            this.name = name;
        }
        // static可以声明一个静态方法


        _createClass(_Person4, null, [{
            key: 'sayHello',
            value: function sayHello(obj) {
                console.log('my name is' + '\xa0' + obj.name);
            }
        }]);

        return _Person4;
    }();

    _Person4.prop = 'test'; //es6
    // es7提供了一个新的方式，直接可以在类里面书写一个静态书写
    // 需要下载插件：npm i babel-preset-es2017;然后要在babelrc里面配置
    // console.log("es7", Person.prop);
}