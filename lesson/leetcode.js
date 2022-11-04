/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
    let step = 0
    let res = 0
    while(res < target){
        step++
        res += step
    }
    // 超过的值为奇数
    if((res-target)%2){
        step++
        res += step
        if((res-target)%2){
            step++
        }
        
    }


    return step
};

console.log(reachNumber(2));