function maxPrimeFactor(base) {
    let result;
    for(let i = 2; i <= base; i++){
        result = [i];
        while(base % i == 0) {
            base = base / i;
            result[1] ? result[1]++ : result[1] = 1; 
        }
    }
    return result;
}

module.exports = function getZerosCount(number, base) {
    let [maxPrime, primeCount] = maxPrimeFactor(base);
    let zeroCount = 0;
    for (let i = maxPrime; i <= number; i = i * maxPrime){
		zeroCount += Math.floor(number/i);
    }
    return Math.floor(zeroCount / primeCount);
}