/* 字符传扩展方法及模板字符串*/
// es5
{
    const str1 = 'a';
    const str2 = '\u20bb7';
    console.log(str2); // 乱码 ₻7
}
// 解决办法es6 使用{} 
{
    const str3 = '\u{20bb7}';
    console.log('str3', str3); //str3 𠮷
}
// es6新的遍历方法for of
{
    const str3 = '\u{20bb7}';
    for (let i = 0; i < str3.length; i++) {
        console.log('for', str3[i]); //for �
    }
    for (let word of str3) {
        console.log('for-of', word); //for-of 𠮷
    }
}
// 新的字符串方法
// 判断字符串是否包含指定字符串的几个方法
// includes判断字符串里面是否包含一个字符串
// startsWith判断字符传是否以条件的字符传开头(第二个参数是下标开始的位置)
{
    let str = '123lxh321';
    console.log("includes", str.includes('lxh')); //includes true
    console.log("startsWith", str.startsWith('lxh', 3)); //startsWith false
    console.log("endsWith", str.endsWith('lxh', 3)); //endsWith false
    console.log("endsWith", str.endsWith('lxh', 6)); // 算上查找字符传的长度 startsWith false
}
// 重复字符串 repeat()
{
    let str4 = "1lxh";
    console.log(str4.repeat(3)); //1lxh1lxh1lxh
}
// 头部补全
{
    let str5 = 'lxh';
    str5 = str5.padStart(8, 'abcdefgh');
    console.log(str5); //abcdelxh
}
// 尾部补全
{
    let str6 = 'lxh';
    str6 = str6.padEnd(10, 'abcd');
    console.log(str6); //lxhabcdabc
}
//模板字符串
{
    let name = "刘新红";
    let age = 19;
    let str7 = "我叫" + name + ',今年' + age + '岁了！';
    console.log('es5-str7', str7); //es5-str7 我叫刘新红,今年19岁了！
    let str8 = `我叫${name},今年${age}岁了~`;
    console.log('es6-str8', str8); //es6-str8 我叫刘新红,今年19岁了~
}