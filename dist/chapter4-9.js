'use strict';

/*<h1>使用Proxy和Reflect实现数据双向绑定</h1>
<input type="text" id="oInput">
<h2>您输入的是：<i id="txt"></i></h2>
*/
// 以上代码要在index.html里面写
// 双向数据绑定
{
    // 获取dom元素
    var inputObj = document.getElementById('oInput');
    var txtObj = document.getElementById("txt");
    // 初始化代理对象
    var obj = {};
    // 代理选项
    var handler = {
        get: function get(target, key) {
            return Reflect.get(target, key);
        },
        set: function set(target, key, value) {
            if (key === 'text') {
                txtObj.innerHTML = value;
            }
            return Reflect.set(target, key, value);
        }
    };
    var objProxy = new Proxy(obj, handler);
    // 给input添加键盘输入事件
    inputObj.addEventListener('keyup', function (e) {
        objProxy.text = e.target.value;
    });
}