//定义函子类
export default class Functor {
    constructor(value) {
        this.value = value;
    }
    //该方法返回一个函子
    static of(value) {
        return new Functor(value);
    }
    //map函数接收一个函数,根据该函数将值必须为一个新的函子实例
    map(fn) {
        return Functor.of(fn(this.value));
    }
};