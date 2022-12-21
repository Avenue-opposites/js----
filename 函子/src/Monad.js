import Functor from "./Functor.js";
//定义Monad类
export default class Monad extends Functor {
    static of(value) {
        return new Monad(value);
    }
    join() {
        return this.value;
    }
    flatMap(fn) {
        return this.map(fn(this.value)).join();
    }
}
