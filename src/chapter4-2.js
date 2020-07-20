// ES6和ES7之数组的扩展方法及扩展运算符
{
    //1、 ...复制数组的操作
    const list = [1, 2, 3, 4, 5];
    let list2 = [...list];
    console.log(list2); //[1, 2, 3, 4, 5]
    // 此刻我们改变list的值不会影响list2的值
    list.push(6);
    console.log(list); //[1, 2, 3, 4, 5,6]
    // 2、分割数组
    const totalList = [1, 'a', 'b', 'c'];
    let [, ...strlist] = totalList;
    console.log(strlist); //["a", "b", "c"]
    // 3、给函数传递参数
    function fun(x, y) {
        return x + y;
    }
    let addList = [2, 3];
    console.log(fun(...addList)); //5
}
// es6和es7新的api
// 1、用来填充数据 替换数组的方法【替换全部】
{
    const list = [1, 2, 3, 4, 5];
    let list2 = [...list].fill(3);
    console.log(list2); //[3, 3, 3, 3, 3]
    // 我们替换数组的某一部分fill(替换的内容，起始下标，替换到那块长度)
    let list3 = [...list].fill(3, 1, 4);
    console.log(list3); //[1, 3, 3, 3, 5]
}
// 2、ﬁnd返回的是数组中第一个被查找的； ﬁndIndex 返回的查找的下标
{
    const listf = [{ 'title': 'es6' }, { 'title': 'webpack', id: 2 }, { 'title': 'vue' }, { 'title': 'webpack', id: 3 }];
    let result = listf.find(function(item) {
        return item.title === 'webpack';
    });
    console.log(result); //{title: "webpack", id: 2}
    let resultindex = listf.findIndex(function(item) {
        return item.title === 'webpack';
    });
    console.log(resultindex); //1
}
// 3、includes返回的是一个Boolean值，只能判断一些简单的数据类型 和indexof
{
    const list = [1, 2, 3, 4, 5];
    let result = list.includes(2);
    console.log('includes', result); //includes true
}
// 4、flat展开数组的操作
{
    const list = [1, 2, 3, ['2nd', 4, 5]];
    // es5展开数组
    let result = [].concat(...list);
    console.log(result); //[1, 2, 3, "2nd", 4, 5]
    // es6
    let flatList = list.flat();
    console.log(flatList); //[1, 2, 3, "2nd", 4, 5]
    // 如果数组有多层 flat()默认展开一层
    let listf = [1, 2, ['2dn', 3, 4, ['3th', 5, 6]]];
    let resultFlat = listf.flat(2);
    console.log(resultFlat); //[1, 2, "2dn", 3, 4, "3th", 5, 6]
}