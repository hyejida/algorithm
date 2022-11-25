// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.


// sort()써보기


function solution(n) {
    return Number(n.toString().split('').sort((a,b)=>(b-a)).join(''));
    //오름차순 sort((a,b)=>(a-b)) 내림차순 sort((a,b)=>(b-a))
   
}
console.log(solution(1234567))