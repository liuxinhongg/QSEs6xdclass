// map和reduce方法
//map 数据映射
{
    const json = [{ title: 'es6', status: 1 }, { title: 'vue', status: 0 }, { title: 'node', status: 1 }];
    let video = json.map(function(item) {
        /*
        return {
            name: item.title,
            statusTxt: item.status ? "已上线" : "未上线"
        }*/
        // 部分同学会这样做，但是会出现一个不是错误的错误,这样会把原始json数据改变
        /*
        item.statu = item.status ? "已上线" : "未上线";
        return item;
        */
        //解决办法
        let obj = {};
        // Object.assign(target,source)法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
        Object.assign(obj, item);
        obj.status = item.status ? '已上线' : '未上线';
        return obj;
    })
    console.log('json', json);
    console.log('video', video);
}
// reduce 数组的方法
// reduce(function(返回值,currentValue,currentIndex，array){}，{}/[])
{
    //1、对数组中的每个元素进行一次回调，升序执行然后将回调值汇总一个返回值
    const letterList = 'lxhlxhlxhlxha';
    let result = letterList.split('').reduce(function(acc, cur) {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {})
    console.log(result); //{l: 4, x: 4, h: 4, a: 1}
    //2展开多层数组
    const list = [1, ['2nd', 2, 3, ['3rd', 4, 5]],
        ['2nd', 6, 7]
    ];
    const deepFlat = function(list) {
        // acc当前返回值，cur当前值
        return list.reduce(function(acc, cur) {
            // 我们先判断cur当前值是否是数组，如果是数组就展开，如果不是数组就合并
            return acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur)
        }, [])
    }
    let flatlist = deepFlat(list);
    console.log('reduce_flat', flatlist);
}