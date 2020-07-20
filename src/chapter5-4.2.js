// export导出变量
/*
export let a = 3;
// export导出函数
export function sayHello() {
    console.log('hello');
}
// export导出类
export class test {
    say() {
        console.log('test')
    }
}*/
// 如果我们的模块比较多，以上的方法不可取
let a = 3;

function sayHello() {
    console.log('hello');
}
export default {
    a,
    sayHello
}