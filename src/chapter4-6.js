/* Set与WeakSet结构的特点*/
{
    let set = new Set();
    // 添加元素
    set.add(1);
    console.log(set);
    // 内部使用Object.is()去重,同值相等
    let setIS = new Set(['1', 2, 3, 4, 5]);
    setIS.add(1);
    console.log(setIS); // {"1", 2, 3, 4, 5, 1}
    console.log(setIS.size); //6
} {
    // 判断属性has,删除属性delete，清空clear
    let set = new Set();

    set.add({ fruit: 'apple' });
    console.log('has', set.has({ fruit: 'apple' })); //false
    const item = { fruit: 'apple' };
    console.log('has', set.has(item));
} {
    // 遍历操作keys()values()entries()
    // set keys和value的值相等,默认是遍历values（）
    const set = new Set([1, 2, 3, 4, 5]);
    for (const key of set.keys()) {
        console.log(key)
    }
    for (const value of set.values()) {
        console.log(value)
    }
    for (const entrie of set.entries()) {
        console.log(entrie)
    }
} {
    // 数组去重
    const array = [1, 2, 3, 4, 5, 5, 34, 3, 2];
    let unique = new Set(array);
    let uniqueArray = Array.from(unique);
    console.log(uniqueArray); //[1, 2, 3, 4, 5, 34]
} {
    // weakSet和set的区别
    /*
     *元素只能是对象，对象也是弱引用（无法遍历）
     *无法遍历，没有size，也没有clear
     */
    // 应用场景比较少
    let obj = {};
    let weakset = new WeakSet();
    weakset.add(obj);
    console.log(weakset);
}