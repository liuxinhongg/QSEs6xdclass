/*数据结构中的遍历接口iterator和for...of*/

{
    /*什么是iterator
    取出数据集合里的数据，通过遍历。iterator提供了一个接口，
    通过for of调用这个接口，输出数据集合中的数据*/
    /* const arr = [1, 2, 3, 4];
     // Symbol.iterator遍历器对象，它本身是一个函数，他里面有next方法
     // 他会告诉你循环是否结束
     const fn = arr[Symbol.iterator]();
     // fn.next()第一次调用表示启动遍历器对象，
     // 因为我们数组中有四个值
     console.log(fn.next());
     console.log(fn.next());
     console.log(fn.next());
     console.log(fn.next());
     console.log(fn.next()); //告诉我们循环结束*/
}
// Symbol.iterator的应用场景
// 原生实现的数据集合有那些？Array String,Set,Map,函数的argument对象
{
    const obj = {
        color: "red",
        price: 18,
        size: 'small',
        [Symbol.iterator]() {
            let index = 0;
            const values = Object.values(this);
            // 必须返回next方法才可以执行
            return {
                next() {
                    if (index < values.length) {
                        return {
                            // value和done必须定义，其他的会报错
                            value: values[index++],
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
    for (const value of obj) {
        console.log(value);
    }
}