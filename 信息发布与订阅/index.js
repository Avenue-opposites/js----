const mitt = () => {
    const map = new Map();
    function emit(event,payload) {
        if(map.has(event)) {
            const callback = map.get(event);
            return callback(payload);
        }
        return false;
    }
    function on(event,callback) {
        if(!map.has(event)) {
            map.set(event,callback);
            return true;
        }
        return false;
    }
    function off(event) {
        if(map.has(event)) {
            return map.delete(event);
        }
        return false;
    }
    return {
        map,
        emit,
        on,
        off
    }
} 
const $mitt = mitt();
//订阅
$mitt.on("getData",(data) => {
    console.log("订阅收到",data);
});
//取消订阅
setTimeout(() => {
    $mitt.off("getData");
}, 2000);
//发布信息
setTimeout(() => {
    $mitt.emit("getData",{
        name:"Avenue opposites",
        profile:"a.jpg"
    });
}, 3000);