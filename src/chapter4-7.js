/* Map Set Array Object 区别 增删改查 类型的转换*/
{
    let array = [];
    let obj = {};
    let map = new Map();
    let set = new Set();
    const goodsitem = { fruit: 'apple' };
    //增加
    array.push(goodsitem);
    obj['fruit'] = 'apple';
    map.set('fruit', 'apple');
    set.add(goodsitem);
    console.log(array, obj, map, set);
    //查询
    const resultArray = array.includes(goodsitem);
    const resultObj = 'fruit' in obj;
    const resultMap = map.has('fruit');
    const resultSet = set.has(goodsitem);
    console.log(resultArray, resultObj, resultMap, resultSet); //true true true true
    //修改
    // 数组修改要先遍历查询，在修改
    array.forEach(function(item) {
        item.fruit = item.fruit ? 'orange' : '';
    });
    obj['fruit'] = 'orange';
    map.set('fruit', 'orange');
    set.forEach(function(item) {
        item.fruit = item.fruit ? 'orange' : '';
    });
    console.log(array, obj, map, set);
    // 删除
    // 数组删除比较麻烦
    const index = array.findIndex(function(item) {
        return item.fruit;
    })
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
    let obj = {
            name: 'lxh',
            hobbies: 'running'
        }
        //map接受的是一个数组，数组以键值对的形式配对
        // 所以我们就要通过（[Object.entries(obj)]）将对象转换为一个键值对的数组
    console.log(Object.entries(obj))
    let map = new Map(Object.entries(obj));
    console.log(map);
    // map==>对象
    // let obj2 = Object.fromEntries(map);
    let obj2 = Object.fromEntries(map);
    console.log(obj2);
    // 数组和set之间的转换
    // 数组==>set
    let array = [1, 2, 3, 4, 5];
    let set = new Set(array);
    console.log(set); //Set(5) {1, 2, 3, 4, 5}
    // set==>数组
    let array2 = Array.from(set);
    console.log(array2); //[1, 2, 3, 4, 5]
}