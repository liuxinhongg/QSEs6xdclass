'use strict';

/* Set与WeakSet结构的特点*/
{
    var set = new Set();
    // 添加元素
    set.add(1);
    console.log(set);
    // 内部使用Object.is()去重,同值相等
    var setIS = new Set(['1', 2, 3, 4, 5]);
    setIS.add(1);
    console.log(setIS); // {"1", 2, 3, 4, 5, 1}
    console.log(setIS.size); //6
}{
    // 判断属性has,删除属性delete，清空clear
    var _set = new Set();

    _set.add({ fruit: 'apple' });
    console.log('has', _set.has({ fruit: 'apple' })); //false
    var item = { fruit: 'apple' };
    console.log('has', _set.has(item));
}{
    // 遍历操作keys()values()entries()
    // set keys和value的值相等,默认是遍历values（）
    var _set2 = new Set([1, 2, 3, 4, 5]);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _set2.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
        for (var _iterator2 = _set2.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log(value);
        }
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
        for (var _iterator3 = _set2.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var entrie = _step3.value;

            console.log(entrie);
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
}{
    // 数组去重
    var array = [1, 2, 3, 4, 5, 5, 34, 3, 2];
    var unique = new Set(array);
    var uniqueArray = Array.from(unique);
    console.log(uniqueArray); //[1, 2, 3, 4, 5, 34]
}{
    // weakSet和set的区别
    /*
     *元素只能是对象，对象也是弱引用（无法遍历）
     *无法遍历，没有size，也没有clear
     */
    // 应用场景比较少
    var obj = {};
    var weakset = new WeakSet();
    weakset.add(obj);
    console.log(weakset);
}