function solution(arr1){
	let arr2 = arr1.filter(i => i !==0) // [1,1,1]
    let answer = ''
        if(arr2.length === 1){
            answer= '도'
        }else if(arr2.length === 2) {
            answer= '개'
        }else if (arr2.length === 3) {
            answer='걸'
        }else if (arr2.length === 4) {
            answer= '모'
        } else {
            answer= '윷' 
        }
        return answer;
}


console.log(solution([1,1,1,0]))





//     }if (sum = 1) {
//         answer = '도'
//     }else if(sum = 2) {
//         answer = '개'
//     }else if (sum= 3) {
//         answer = '걸'
//     }else if (sum = 4) {
//         answer = '모'
//     }answer = '윷'
//     return answer;
// }


