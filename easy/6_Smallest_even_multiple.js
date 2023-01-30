// https://leetcode.com/problems/smallest-even-multiple/
// Smallest Even Multiple
n = 5
/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
    n = 5
    if( n ==1){
        return 2
    }
    let resul = []
    let i = 1
    while(n>=i){
        resul.push( n * i)
        i++
    }
    for (let i = 0; i < resul.length; i++){
        if(resul[i] % 2 == 0){
            return resul[i]
        }
    }
};
console.log(smallestEvenMultiple(5))