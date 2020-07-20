'use strict';

/*Map与WeakMap结构的特点*/
{
    //添加元素 set(k:v)
    var map = new Map();
    map.set([1, 2, 3], 'number');
    console.log(map);
    var map2 = new Map([['name', 'lxh'], ['sex', 'male']]);
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
    var getmap = map2.get("hobbies");
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
    var _map = new Map([['name', 'xiaohong'], ['age', 18], ['sex', '女']]);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log(key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _map.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _key = _step2.value;

            console.log(_key);
        }
        // for of循环默认entries()
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _key2 = _step3.value;

            console.log(_key2);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
// WeakMap与map区别
/*
 * 1、WeakMap只接受一个对象作为键名，不接受其他类型的数据作为键名
 键名不进入垃圾回收机制
 */
{
    var weakmap = new WeakMap([[{ 'name': 'haha' }, 'lxh']]);
    console.log(weakmap);
    // 使用场景：dome元素的使用，如果在页面中这个dome元素被销毁,那么引用也会销毁，他就会被垃圾回收掉
    var weakmapul = new WeakMap([[{ 'ulobj': 'haha' }, 'lxh']]);
    var ulobj = document.getElementById("test");
}