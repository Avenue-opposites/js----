import Functor from "./Functor.js";
import Maybe from "./Maybe.js";
import Either from "./Either.js";
import Ap from "./Ap.js";
import Monad from "./Monad.js";


//部分函数
const partial = (fn,presetArgs) => 
                    (laterArgs) => 
                        fn(presetArgs,laterArgs);
const double = x => x * 2;
const map = (fn,functor) => functor.map(fn); 

const doubleMap = partial(map,double);
let result = doubleMap(Maybe.of(100));
console.log(result);