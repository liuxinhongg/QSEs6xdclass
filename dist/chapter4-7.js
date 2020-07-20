'use strict';

/* Map Set Array Object 区别 增删改查 类型的转换*/
{
    var array = [];
    var obj = {};
    var map = new Map();
    var set = new Set();
    var goodsitem = { fruit: 'apple' };
    //增加
    array.push(goodsitem);
    obj['fruit'] = 'apple';
    map.set('fruit', 'apple');
    set.add(goodsitem);
    console.log(array, obj, map, set);
    //查询
    var resultArray = array.includes(goodsitem);
    var resultObj = 'fruit' in obj;
    var resultMap = map.has('fruit');
    var resultSet = set.has(goodsitem);
    console.log(resultArray, resultObj, resultMap, resultSet); //true true true true
    //修改
    // 数组修改要先遍历查询，在修改
    array.forEach(function (item) {
        item.fruit = item.fruit ? 'orange' : '';
    });
    obj['fruit'] = 'orange';
    map.set('fruit', 'orange');
    set.forEach(function (item) {
        item.fruit = item.fruit ? 'orange' : '';
    });
    console.log(array, obj, map, set);
    // 删除
    // 数组删除比较麻烦
    var index = array.findIndex(function (item) {
        return item.fruit;
    });
    array.splice(index, 1);
    delete obj.fruit;
    map.delete('fruit');
    set.delete(goodsitem);
    console.log(array, obj, map, set);
}
// map的操作比较简单
// set可以去重
// 将传统的数组和对象转换为map或者set
{
    // 对象转换为map;对象==>map
    var _obj = {
        name: 'lxh',
        hobbies: 'running'
        //map接受的是一个数组，数组以键值对的形式配对
        // 所以我们就要通过（[Object.entries(obj)]）将对象转换为一个键值对的数组
    };console.log(Object.entries(_obj));
    var _map = new Map(Object.entries(_obj));
    console.log(_map);
    // map==>对象
    // let obj2 = Object.fromEntries(map);
    var obj2 = Object.fromEntries(_map);
    console.log(obj2);
    // 数组和set之间的转换
    // 数组==>set
    var _array = [1, 2, 3, 4, 5];
    var _set = new Set(_array);
    console.log(_set); //Set(5) {1, 2, 3, 4, 5}
    // set==>数组
    var array2 = Array.from(_set);
    console.log(array2); //[1, 2, 3, 4, 5]
}