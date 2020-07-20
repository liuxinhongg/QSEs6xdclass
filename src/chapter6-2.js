/* 解决回调地狱提出的新方案Promise*/
{
    // 异步中的回调函数会出现一个问题就说回调地狱
    // 回调地狱的场景
    /*
    function ajax(cb) {
        setTimeout(() => {
            // 判断回调存不存在
            cb && cb()
        }, 1000)
    }
    ajax(() => {
            console.log('任务1');
        })
        */
    // 接下来我们执行完任务1 ，想执行任务2，我们就要传一个参数
    /*
    function ajax(cb) {
        setTimeout(() => {
            // 判断回调存不存在
            cb && cb(() => {
                console.log('任务2');
            })
        }, 1000)
    }
    ajax((cb2) => {
            console.log('任务1');
            setTimeout(() => {
                cb2 && cb2();
            }, 1000)
        })*/
    // 我们嵌套一两层还可以看出来逻辑，如果嵌套的太多就会搞混
    // 为了解决这种办法，es6提出了promise嵌套
}
// promise改造回调函数
/*
{
    function ajax() {
        // resolve:表示程序执行下一步要执行的函数
        // reject:程序出错要执行的函数
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        })
    }
    // 链式调用函数
    ajax().then(() => {
        console.log('任务1'); //一秒后执行任务1
        // 如果任务1之后一秒执行任务2？此时要在then的回调函数里面再return 一个promise
    })
}*/
//解决办法
/*
{
    function ajax() {
        // resolve:表示程序执行下一步要执行的函数
        // reject:程序出错要执行的函数
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        })
    }
    ajax().then(() => {
        console.log('任务1');
        return new Promise(resolve => {
            setTimeout(() => resolve(), 1000);
        })
    }).then(() => {
        console.log('任务2');
    })
}*/
// 当代码出错，需要捕获异常；使用catch方法捕捉错误
{
    function judgeNumber(num) {
        return new Promise((resolve, reject) => {
            if (typeof(num) === 'number') {
                resolve(num)
            } else {
                const err = new Error("请输入数字");
                reject(err);
            }
        })
    }
    judgeNumber(2)
        .then(num => { console.log(num) })
        .catch(err => console.log(err));
}
// Promise.all 需求，等图片全部加载完成之后，再全部渲染到页面上
// 这样就不出出现这一张图片，那一张图片，用户体验不好
{
    const imgUrl1 = "../images/ax.jpg";
    const imgUrl2 = "../images/gril.jpg";
    const imgUrl3 = "../images/timg.jpg";

    function getImage(url) {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
        })
    }

    function showImage(imgs) {
        imgs.forEach(item => {
            document.body.appendChild(item);
        });
    }
    // 链式回调 Promise.all()用来判断函数getImage(url)里面的Promise函数是否执行完成
    // Promise.all([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showImage)
    // Promise.race()用于希望多个Promise函数当中只有一个执行成功就行的场景
    function showFristImage(img) {
        document.body.appendChild(img)
    }
    Promise.race([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showFristImage)
}