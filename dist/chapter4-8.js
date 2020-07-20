'use strict';

/* 代理proxy和reflect*/
{
    //  proxy 代理的就是对象的一些操作
    var account = {
        id: 9923,
        name: 'admin',
        phone: '17868875584',
        create_time: '2019',
        _private: 'test' //在拦截删除的时候添加该属性

        // 代理操作 新建一个代理对象
    };var accountProxy = new Proxy(account, {
        //拦截读取和设置的操作
        // 拦截读取get方式是一个函数
        get: function get(target, key) {
            // 现在需要将手机号中间的四位手机号隐藏，
            // 将时间2019该改成2020
            switch (key) {
                case 'phone':
                    return target[key].substring(0, 3) + '****' + target[key].substring(7);
                case 'create_time':
                    return target[key].replace('2019', 2020);
                default:
                    return target[key];
            }
        },
        // 设置的操作 set 如果设置id我就不做操作，如果是其他的我们可以对他进行操作
        set: function set(target, key, value) {
            if (key === 'id') {
                return target[key];
            } else {
                return target[key] = value;
            }
        },
        // 拦截对象的in操作； key in obj操作;使用has
        has: function has(target, key) {
            if (key in target) {
                console.log(key + ':', target[key]);
                return true;
            } else {
                console.log('并无此属性');
                return false;
            }
        },
        // 拦截删除delete，在account里面添加一个属性_private:'test'
        deleteProperty: function deleteProperty(target, key) {
            // 私有属性 如果是key属性以下划线开头的，该属性不能删除
            if (key.indexOf('_') === 0) {
                console.warn("私有属性不能删除");
                return false;
            } else {
                delete target[key];
                return false;
            }
        },
        // 拦截遍历的操作 Object.keys();通过ownKeys
        // 过滤id和下划线开头的属性
        ownKeys: function ownKeys(target) {
            return Object.keys(target).filter(function (item) {
                return item !== 'id' && item.indexOf('_') !== 0;
            });
        }
    });
    console.log('拦截读取', accountProxy.phone, accountProxy.create_time); //拦截读取 178****5584 2020
    accountProxy.id = 12345;
    accountProxy.name = "liuxinhong";
    console.log("拦截设置", accountProxy.id, accountProxy.name); //拦截设置 9923 liuxinhong
    console.log('拦截in', 'name' in accountProxy); //拦截in true
    console.log('拦截in', 'sex' in accountProxy); //拦截in false
    console.log("删除", delete accountProxy['_private']); //会报错，如果不想报错的话我们要把index.html里面script的dist改成src
    console.log("拦截Object.keys()", Object.keys(accountProxy));
}
//Reflect 可以操作对象
{
    var obj = {
        name: 'lxh',
        age: 20,
        sex: '女',
        hobbies: 'playing'
    };
    console.log(Reflect.get(obj, 'name')); //lxh
    // 设置值
    Reflect.set(obj, 'name', '刘新红');
    console.log(obj.name); //刘新红
    'name' in obj;
    Reflect.has(obj, 'name'); //判断对象里面是否有属性
}