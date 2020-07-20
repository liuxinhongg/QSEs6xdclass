'use strict';

var _chapter = require('./chapter5-4.2.js');

var _chapter2 = _interopRequireDefault(_chapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_chapter2.default.a); //3
/*模块化开发（import和export）*/
// import 引入模块 我们现在将chapter5-4.2的文件引进来
/*
import { a } from './chapter5-4.2.js'
console.log(a)
import { a, sayHello, test } from './chapter5-4.2.js'
console.log(a, sayHello, test); //控制台会报错，
// 因为浏览器目前还不认识improt和export,所以我们需要在index.html文件的script中要加一个属性
*/
// 如果我们要引入的文件成百上千，那么以上的方法就不可取
/*
import * as test from './chapter5-4.2.js'
console.log(test)
console.log(test.a)
console.log(test.sayHello)
console.log(test.test)
*/
// 如果chapter5-4-2是以export default导出的