function solution(a,b){
    let sum = 0;
    for(let i = 0; i<a.length; i++){
       sum += (a[i]*b[i])
    }
    return sum
}


//실행한 결괏값이 기댓값과 계속 다르게 나옴. 
// ex)
//입력값: [-1,0,1], [1,0,-1]  기댓값: -2
// 해결: return을 for문 내에서 실행했다.


//reduce사용하는 풀이
function solution(a,b){
    return a.reduce((acc, cur, idx) => acc += cur*b[idx],0)
}



