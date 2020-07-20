/* 新的变量声明关键字let和const*/
//var 是全局作用域和局部作用域
/*
var i = 2;
for (var i = 0; i < 10; i++) {

}
console.log(i); //10 会造成内存泄漏
*/
// 加！的作用不会因为符号而报错
/*
!(function(){
    console.log(b);//undifined
    var b=10;
    // js里面有个默认操作
    // var b;
    // console.log(b);
    // b=10;
})()*/
//以上的原因，es6提出了块级作用与
// 用let和const就是一个块级作用域
// 用{}声明块级作用域
/*
if(true){
    let a=4;
}
console.log(a);//报错
*/
/*
!(function() {
    //js里面有个默认操作
    console.log(b); //报错 暂时性死区的特点【我们应该在使用之前按定义，】 我们需要你吧html里面的路径改成src/chapter3-1.js
    let b = 10;
})()
*/
/*
let const
特点：只在声明的代码块中生效
    暂时性死区
    没有变量提升
    无法重复声明
区别：let声明变量
    const声明常量（并不是一定不变，保证内存地址不变）
*/