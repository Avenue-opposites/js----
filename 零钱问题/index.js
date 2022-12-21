/**
 * 
 * @param {number} RMB 
 * @param {number} times
 * @returns {number}
 */


function numberOfExchanges(RMB,times) {
    //三种面值的货币
    const oneCents = 1, twoCents = 2, fiveCents = 5;
    //循环总次数
    let amount = 0;
    //硬币个数
    let numberOfOneCents = 0, numberOfTwoCents, numberOfFiveCents;
    //次数
    let count = 0;
    //分
    let cents = RMB * 100;
    //当第一种货币总金额小于总金额
    while (numberOfOneCents * oneCents < cents) {
        //第二种货币清空
        numberOfTwoCents = 0;
        //当第二种货币总金额小于总金额
        while (numberOfTwoCents * twoCents < cents - (numberOfOneCents * oneCents)) {
            //第三种货币清空
            numberOfFiveCents = 0;
            //当第三种货币总金额小于等于总金额
            while (numberOfFiveCents * fiveCents <= cents - (numberOfOneCents * oneCents) - (numberOfTwoCents * twoCents)) {
                //当前两种个数硬币个数为零或者前两种硬币的其中一种的个数不为5的倍数数就退出循环
                if ((numberOfOneCents === 0 || numberOfTwoCents === 0) || ((numberOfOneCents % times) || (numberOfTwoCents % times))) 
                    break;
                //当剩下的硬币个数不为零且个数都是5的倍数,以及3种硬币个数金额加在一起的总和为总金额
                if (numberOfFiveCents && !(numberOfFiveCents % times) && ((numberOfOneCents * oneCents) + (numberOfTwoCents * twoCents) + (numberOfFiveCents * fiveCents) === cents)) {
                    // console.log("个数",numberOfOneCents,numberOfTwoCents,numberOfFiveCents);
                    count++;
                };
                amount++;
                numberOfFiveCents++;
            };
            numberOfTwoCents++;
        };
        numberOfOneCents++;
    };
    console.log("循环总次数 " + amount);
    return count;
};



console.log(numberOfExchanges(1,5));







