/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let result = "";
    let aArr = [...a];
    let bArr = [...b];
    let zero = Math.abs(a.length - b.length);
    if(!(/[0-1]+/g.test(a) && /[0-1]+/g.test(b))) return -1;
    for(let i = 0;i < zero;i++) {
        if(a.length === b.length) break;
        if(a.length > b.length) {
            bArr.unshift("0");
        }else {
            aArr.unshift("0");
        }
    };
    for(let j = aArr.length - 1;j >= 0;j--) {
        // console.log((Number(aArr[j])+Number(bArr[j])) % 2);
       
    }
    // console.log((""+aArr).replace(",",""),(""+bArr).replace(",",""));
   
};