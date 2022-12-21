import Functor from "./Functor.js";
//定义Maybe类
export default class Maybe extends Functor {
    constructor(value) {
         super(value);
    }
    static of(value) {
         return new Maybe(value);
    }
    map(fn) {
         return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
    }
 };