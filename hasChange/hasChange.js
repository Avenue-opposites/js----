function hasChange(x,y) {
    if(x === 0) {
        return !(1 / x === 1 / y);
    }
    return !(x === y); 
};


// console.log(hasChange(+0,-0));
console.log(hasChange(NaN,NaN));
console.log(hasChange(1,1));



