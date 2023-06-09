const mitt = (all) => {
    //map存储事件
    all = all || new Map();
    //发布事件方法
    function emit(eventType, payload) {
        const handlers = all.get(eventType);
        if (handlers) {
            if(handlers.handler) {
                handlers.handler(payload);
                handlers.handler = null;
            } 
            for (let event of handlers) {
                event(payload);
            }
        }
    }
    //订阅事件
    function on(eventType, callback) {
        const handlers = all.get(eventType);
        if (handlers) {
            handlers.push(callback);
        } else {
            all.set(eventType, [callback]);
        }
    }
    //取消事件
    function off(eventType,handler) {
        const handlers = all.get(eventType);
        if (handlers) {
            if(!handler) {
                all.set(eventType,[]);
            }
            handlers.splice(handlers.indexOf(handler) >>> 0,1);
        }else {
            all.set(eventType,[]);
        }
    }
    //一次性事件
    function once(eventType,handler) {
        const handlers = all.get(eventType);
        if(handlers) {
            handlers.handler = handler;
        }else {
            const handlers = [];
            handlers.handler = handler;
            all.set(eventType,handlers);
        }
    }
    return {
        all,
        emit,
        on,
        off,
        once
    }
}
const $mitt = mitt();
//订阅
$mitt.on("getData", (data) => {
    console.log("订阅收到", data);
});
$mitt.on("getData", (data) => {
    console.log("二分传递",data);
});
$mitt.once("getData",(data) => {
    console.log("once",data);
})
//取消订阅
// setTimeout(() => {
//     $mitt.off("getData");
// }, 2000);

//发布信息

setTimeout(() => {
    $mitt.emit("getData", {
        name: "Avenue opposites",
        profile: "a.jpg"
    });
}, 3000);

$mitt.emit("getData", {
    name: "abv",
    profile: "a.jpg"
});
