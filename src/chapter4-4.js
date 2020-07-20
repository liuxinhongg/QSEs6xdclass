/* es6和es8的新特性和新增的方法*/
// 扩展运算符在对象中的使用
{
    // 1、复制对象
    //安装一个插件 npm i babel-plugin-transform-object-rest-spread
    // 然后在babelrc中配置 "plugins": ["transform-object-rest-spread"] 
    // "plugins": ["transform-object-rest-spread"] 
    /*
    const obj = { name: 'lxh', video: 'es6' };
    let videoObj = {...obj };
    console.log(videoObj);*/
    //2、给对象设置默认值
    /*
    const obj = { name: 'lxh', video: 'es6' };
    let objfz = {...obj, name: "刘新红" };
    console.log(objfz); //{name: "刘新红", video: "es6"}
    */
    //2、合并对象
    const obj = { name: 'lxh', video: 'es6' };
    const initObj = { color: "red" };
    let objconnect = {...obj, ...initObj };
    console.log(objconnect); //{name: "lxh", video: "es6", color: "red"}
    //坑点
    // 对象里面包含对象
    // 简单类型的可以用扩展运算符，但是如果扩展运算符展开对象以后，还是一个对象，我们复制的只是一个指针
}
// es6提供写的书写方式
{
    let name = "小红";
    let age = 18;
    //es5的写法
    let es5obj = {
            name: name,
            age: age,
            sayHello: function() {
                console.log("this is es5obj");
            }
        }
        // es6的书写
    let es6obj = {
        name,
        age,
        sayHello() {
            console.log("this is es6obj");
        }
    }
    console.log('es5', es5obj);
    console.log('es6', es6obj);
    es5obj.sayHello();
    es6obj.sayHello();
}
// 第二个ea6好用的地方
//我们定义对象的时候可以直接使用变量进行定义
{
    let key = "name";
    //es5
    let es5obj = {};
    es5obj[key] = '小明';
    console.log(es5obj); //{name: "小明"}
    //es6
    let es6obj = {
        // 可计算的属性名
        [key]: '小红'
    }
    console.log(es6obj); //{name: "小红"}
}
// 新增方法
{
    //1、 Object.is()判断两个值是否相同（Nan是true）和===严格等于很类似(Nan是false)
    let result = Object.is(NaN, NaN);
    console.log(result); //true
    console.log(NaN === NaN); //false
    //2、Object.assign(目标对象，来源对象)值复制
    const person = { name: 'lxh', age: 18, info: { height: 170 } };
    let personOther = {};
    Object.assign(personOther, person);
    console.log(personOther);
    person.info.height = 180;
    console.log(personOther);
}
//Array.from()将一个类数组对象转换为一个真正的数组
// 类数组对象有length属性、可以遍历
{
    const str = "hello";
    const strlist = Array.from(str);
    console.log(strlist); //["h", "e", "l", "l", "o"]
}
//2、Object.keys()遍历对象里面的所有属性名
//  Object.values()遍历对象里面的所有属性名键值
//   Object.entries()遍历对象里面的键值对
{
    const json = { name: 'lxh', video: 'es6', data: 2019 };
    let obj = {};
    for (const key of Object.keys(json)) {
        obj[key] = json[key];
    }
    console.log(obj);
}