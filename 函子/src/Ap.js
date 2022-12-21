import Functor from "./Functor.js";
//定义Ap类
export default class Ap extends Functor {
    static of(value) {
        return new Ap(value);
    }
    //ap方法接收一个函子,使用自身的值对函子的值进行必须并返回一个新的Ap函子
    ap(functor) {
        return Ap.of(this.value(functor.value));
    }
};