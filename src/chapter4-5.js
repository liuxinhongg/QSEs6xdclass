/*Map与WeakMap结构的特点*/
{
    //添加元素 set(k:v)
    let map = new Map();
    map.set([1, 2, 3], 'number');
    console.log(map);
    let map2 = new Map([
        ['name', 'lxh'],
        ['sex', 'male']
    ]);
    console.log(map2);
    // 想知道里面有多少对键值对size
    console.log(map2.size); //2
    //注意，赋值的时候后面的会覆盖前面的
    map2.set('name', 'gyh');
    console.log('set', map2);
    // 链式调用
    map2.set('name', 'xiaoyu').set("hobbies", ['swimming', 'running']);
    console.log("set", map2);
    // 我们像读取里面的属性里面的值get
    const getmap = map2.get("hobbies");
    console.log(getmap); //["swimming", "running"];
    console.log('getmap', map2.get('age')); //getmap undefined
    //判断属性是否存在 has()
    console.log(map2.has("age")); //false
    // 删除元素delete
    map2.delete('hobbies');
    console.log(map2); // {"name" => "xiaoyu", "sex" => "male"}
}
// 遍历
{
    //遍历器生成函数keys()返回键名 values()返回属性值 entries()返回键值对
    // 遍历方法foreach()
    const map = new Map([
        ['name', 'xiaohong'],
        ['age', 18],
        ['sex', '女']
    ])
    for (const key of map.keys()) {
        console.log(key);
    }
    for (const key of map.values()) {
        console.log(key);
    }
    // for of循环默认entries()
    for (const key of map) {
        console.log(key)
    }
}
// WeakMap与map区别
/*
 * 1、WeakMap只接受一个对象作为键名，不接受其他类型的数据作为键名
 键名不进入垃圾回收机制
 */
{
    let weakmap = new WeakMap([
        [{ 'name': 'haha' }, 'lxh']
    ])
    console.log(weakmap);
    // 使用场景：dome元素的使用，如果在页面中这个dome元素被销毁,那么引用也会销毁，他就会被垃圾回收掉
    let weakmapul = new WeakMap([
        [{ 'ulobj': 'haha' }, 'lxh']
    ])
    const ulobj = document.getElementById("test");
}