async function fetchData(options) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: "Avenue opposites",
                password: "ppp",
                profile: "pro.jpg"
            })
        }, 3000);
    });
    return await p;
}
//异步函数
async function fn() {
    const data = await fetchData({
        url: "https://bilibili.com",
        method: "GET"
    });
    console.log(data);
}

function run(fn) {
    //保存用来的功能
    const _origin = fetchData;
    //缓存每一次调用获取的数据
    const cache = [];
    //记录调用的次数,以便获取对应的缓存数据
    let i = 0;
    fetchData = function(...args) {
        const currentCache = cache[i];
        //如果有缓存
        if(currentCache) {
            //当前缓存结果为成功状态
            if(currentCache.status === "fulfilled") {
                return currentCache.data;
            }else if(currentCache.status === "rejected") {
                throw currentCache.error;
            }
        }
        //默认结果
        const result = {
            status:"pending",
            data:null,
            error:null
        };
        //保存结果
        cache[i++] = result;
        //调用原方法获取数据
        const prom = _origin(args).then(data => {
            result.status = "fulfilled";
            result.data = data;
        }).catch(error => {
            result.status = "rejected";
            result.error = error;
        })
        throw prom;
    }
    //运行并捕获错误
    try {
        fn();
    } catch (error) {
        i = 0;
        //如果错误为指定的Promise就重新运行该函数,获取缓存
        if(error instanceof Promise) {
            const reRun = () => fn();
            error.then(reRun,reRun);
        }
    }
}


run(fn);