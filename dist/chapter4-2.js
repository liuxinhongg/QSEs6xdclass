'use strict';

// ES6和ES7之数组的扩展方法及扩展运算符
{
    //["a", "b", "c"]
    // 3、给函数传递参数
    var fun = function fun(x, y) {
        return x + y;
    };

    //1、 ...复制数组的操作
    var list = [1, 2, 3, 4, 5];
    var list2 = [].concat(list);
    console.log(list2); //[1, 2, 3, 4, 5]
    // 此刻我们改变list的值不会影响list2的值
    list.push(6);
    console.log(list); //[1, 2, 3, 4, 5,6]
    // 2、分割数组
    var totalList = [1, 'a', 'b', 'c'];
    var strlist = totalList.slice(1);

    console.log(strlist);
    var addList = [2, 3];
    console.log(fun.apply(undefined, addList)); //5
}
// es6和es7新的api
// 1、用来填充数据 替换数组的方法【替换全部】
{
    var _list = [1, 2, 3, 4, 5];
    var _list2 = [].concat(_list).fill(3);
    console.log(_list2); //[3, 3, 3, 3, 3]
    // 我们替换数组的某一部分fill(替换的内容，起始下标，替换到那块长度)
    var list3 = [].concat(_list).fill(3, 1, 4);
    console.log(list3); //[1, 3, 3, 3, 5]
}
// 2、ﬁnd返回的是数组中第一个被查找的； ﬁndIndex 返回的查找的下标
{
    var listf = [{ 'title': 'es6' }, { 'title': 'webpack', id: 2 }, { 'title': 'vue' }, { 'title': 'webpack', id: 3 }];
    var result = listf.find(function (item) {
        return item.title === 'webpack';
    });
    console.log(result); //{title: "webpack", id: 2}
    var resultindex = listf.findIndex(function (item) {
        return item.title === 'webpack';
    });
    console.log(resultindex); //1
}
// 3、includes返回的是一个Boolean值，只能判断一些简单的数据类型 和indexof
{
    var _list3 = [1, 2, 3, 4, 5];
    var _result = _list3.includes(2);
    console.log('includes', _result); //includes true
}
// 4、flat展开数组的操作
{
    var _ref;

    var _list4 = [1, 2, 3, ['2nd', 4, 5]];
    // es5展开数组
    var _result2 = (_ref = []).concat.apply(_ref, _list4);
    console.log(_result2); //[1, 2, 3, "2nd", 4, 5]
    // es6
    var flatList = _list4.flat();
    console.log(flatList); //[1, 2, 3, "2nd", 4, 5]
    // 如果数组有多层 flat()默认展开一层
    var _listf = [1, 2, ['2dn', 3, 4, ['3th', 5, 6]]];
    var resultFlat = _listf.flat(2);
    console.log(resultFlat); //[1, 2, "2dn", 3, 4, "3th", 5, 6]
}