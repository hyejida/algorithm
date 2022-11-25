//  자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.




// function solution(n) {
    
//      const reversed = n.toString().split('').reverse().join('')
    
//      return reversed //54321
//  }


 function solution(n) {
    let answer = [];
     const reversed = n.toString().split('').reverse().map((element)=>Number(element))
    
     return answer.push(reversed) //1
 }

//1이 나와서 for문을 reversed length까지 돌려야 하나 하다가 얻어걸림...ㅎ😇

 function solution(n) {
   return n.toString().split('').reverse().map((element)=>Number(element))
    
 }