// 异步编程和js的异步实现
{
    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 0);
    console.log(3);
    // 代码执行打印顺序是1 3 2
    // 这个就说js的机制
}