'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// export导出变量
/*
export let a = 3;
// export导出函数
export function sayHello() {
    console.log('hello');
}
// export导出类
export class test {
    say() {
        console.log('test')
    }
}*/
// 如果我们的模块比较多，以上的方法不可取
var a = 3;

function sayHello() {
    console.log('hello');
}
exports.default = {
    a: a,
    sayHello: sayHello
};