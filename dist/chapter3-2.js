'use strict';

/* js的七种数据类型Symbol*/
// Symbol()是函数不是对象，所以不适应new关键词
/*
let a1 = Symbol();
let a2 = Symbol();
console.log(a1);//Symbol()
console.log(a1 === a2);//false
*/
/*
let a1 = Symbol('kk');
let a2 = Symbol('kk');
console.log(a1); //Symbol(kk)
console.log(a1 === a2); //false
*/
// 如果我们想要使用他？首先Symbol()不仅是一个唯一变量，还想把他取出来使用，
// 那么我们会用到Symbol()里面的for的Api
/*let a1 = Symbol.for('kk'); //他会在全局找kk如果有的化直接给a1，如果没有kk那么他就会创建一个kk,复制给a1;
let a2 = Symbol.for('kk');
console.log(a1 === a2); //true 他相当于比较的是{a1:'kk'}和{a2:'kk'}的value进行比较
*/
// 第一种：
// 具体应用场合：声明对象的属性，
// 可以通过构造池
/*
let a1 = Symbol('kk');
let obj = {
    [a1]: 123,
    kk: 123,
    a1: 123
}
console.log(obj); //{kk: 123, a1: 123, Symbol(kk): 123}
// 这样就不用担心变量名冲突的问题，可以放心大胆的声明变量
*/
//第二种： 
//还有其他方式声明变量：可以通过数组的运算符声明变量
/*
let a1 = Symbol('kk');
let obj = {};
obj[a1] = 3;
console.log(obj);//{Symbol(kk): 3}
*/
// 第三种 借助 Object.defineProperty
/*
let a1 = Symbol('kk');
let obj = {};
// {value:123}描述器
Object.defineProperty(obj, a1, { value: 123 });
console.log(obj); //{Symbol(kk): 123}
*/
// 还有一种作用就是定义字符串的常量
var user = Symbol('Nick');
console.log(user); //Symbol(Nick)