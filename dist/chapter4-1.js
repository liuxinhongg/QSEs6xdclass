'use strict';

/* 字符传扩展方法及模板字符串*/
// es5
{
    var str1 = 'a';
    var str2 = '\u20BB7';
    console.log(str2); // 乱码 ₻7
}
// 解决办法es6 使用{} 
{
    var str3 = '\uD842\uDFB7';
    console.log('str3', str3); //str3 𠮷
}
// es6新的遍历方法for of
{
    var _str = '\uD842\uDFB7';
    for (var i = 0; i < _str.length; i++) {
        console.log('for', _str[i]); //for �
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var word = _step.value;

            console.log('for-of', word); //for-of 𠮷
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
}
// 新的字符串方法
// 判断字符串是否包含指定字符串的几个方法
// includes判断字符串里面是否包含一个字符串
// startsWith判断字符传是否以条件的字符传开头(第二个参数是下标开始的位置)
{
    var str = '123lxh321';
    console.log("includes", str.includes('lxh')); //includes true
    console.log("startsWith", str.startsWith('lxh', 3)); //startsWith false
    console.log("endsWith", str.endsWith('lxh', 3)); //endsWith false
    console.log("endsWith", str.endsWith('lxh', 6)); // 算上查找字符传的长度 startsWith false
}
// 重复字符串 repeat()
{
    var str4 = "1lxh";
    console.log(str4.repeat(3)); //1lxh1lxh1lxh
}
// 头部补全
{
    var str5 = 'lxh';
    str5 = str5.padStart(8, 'abcdefgh');
    console.log(str5); //abcdelxh
}
// 尾部补全
{
    var str6 = 'lxh';
    str6 = str6.padEnd(10, 'abcd');
    console.log(str6); //lxhabcdabc
}
//模板字符串
{
    var name = "刘新红";
    var age = 19;
    var str7 = "我叫" + name + ',今年' + age + '岁了！';
    console.log('es5-str7', str7); //es5-str7 我叫刘新红,今年19岁了！
    var str8 = '\u6211\u53EB' + name + ',\u4ECA\u5E74' + age + '\u5C81\u4E86~';
    console.log('es6-str8', str8); //es6-str8 我叫刘新红,今年19岁了~
}