'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* 结构赋值*/
// 先写一个块级作用域
/*
{
    let a, b;
    [a, b] = [1, 2]
    console.log(a, b);//1，2 此时是一一对应的
}*/
// 此时我们写一个不是一一对应的
/*
{
    let a, b, c;
    [a, b, c] = [1, 2]
    console.log(a, b, c); //1 2 undefined
}*/
// 为了解决这种问题，我们可以给他一个默认值
/*
{
    let a, b, c;
    [a, b, c = 6] = [1, 2]
    console.log(a, b, c); //1 2 6
}*/
// 数组的分割 使用ES6的扩展运算符,返回一个新的数组
/*
{
    let a, other;
    [a, ...other] = [1, 2, 3, 4, 5]
    console.log(a, other); //1 2 6
}*/
// 我们想要取固定的值
/*
{
    let a, b;
    [a, , b] = [1, 2, 3]
    console.log(a, b); //1 3
}*/
// 对象是如何解构的
/*
{
    let a, b;
    ({ a, b } = { a: 2, b: 3 });
    console.log(a, b);//2,3
}*/
/*
{
    let num, totle;
    ({ a: num, b: totle } = { a: 2, b: 3 });
    console.log(a, b); //2,3
}*/
// 应用场景：前端和后端联调的时候，后端会返回json数据，我们就可以定义变量解构这个对象
// 获取到我们想要的参数
{
    var fn = function fn() {
        return {
            name: 'lxh',
            nameList: [{
                name: 'll'
            }]
        };
    };

    var b = fn();

    var person = b.name,
        _b$nameList = _slicedToArray(b.nameList, 1),
        othrtPerson = _b$nameList[0].name;

    console.log(person, othrtPerson); //lxh ll
}