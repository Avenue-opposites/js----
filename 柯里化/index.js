/**
 * @param {Function} fn
 * @return 
*/

function curry(fn) {
    const params = [];
    return function partial(...args) {
        params.push(...args);
        if(fn.length === params.length) {
            return fn(...params);
        }else {
            return partial;
        }
    }
}

const add = (a,b,c,d) => a + b + c + d;

const curryAdd = curry(add);

console.log(curryAdd(1,2)(1,2));



