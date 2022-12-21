//定义Either类
import Functor from "./Functor.js";
export default class Either extends Functor {
    constructor(left,right) {
        super(right || left);
        this.left = left;
        this.right = right;
    }
    static of(left,right) {
        return new Either(left,right);
    }
    map(fn) {
        return this.right ? Either.of(this.left,fn(this.right)) : Either.of(fn(this.left),this.right);
    }
};