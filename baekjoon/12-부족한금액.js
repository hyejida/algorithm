function solution(price, money, count) {
    // var answer = -1;
        let sum = 0;
    for(let i = 0; i<=count; i++) {
        sum += price * i; 
    } 
    return sum>money ? sum-money : 0;

}