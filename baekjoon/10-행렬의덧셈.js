// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.


let arr1 = [[1,2],[3,4]]
let arr2 = [[5,6],[7,8]]


console.log(arr1[0])  //[1,2]
console.log(arr1[0] + arr2[0]) //1,25,6 ?........왜........

console.log(arr1[0][0]) //1
console.log(arr1[0][0] + arr2[0][0]) //6   =a arr3[0][0]
console.log(arr1[0][1] + arr2[0][1]) //8   =b arr3[0][1]

let arr3 = [[a,b]]



// function solution(arr1, arr2) {
// 	let answer = [];
	
  
//     for(let i = 1; i<arr1.length; i++) {
//         if(arr1[i].length>1) {
//         answer[i] =[arr1[i][i-1] + arr2[i][i-1], arr1[i][i] + arr2[i][i]]  
//     }  else if(arr1[i].length ===1) {
//         answer[i] =[arr1[i][i] + arr2[i][i]] 
//     }
//     }
//     return answer;
// }

function solution(arr1, arr2) {
    
    let answer = [];
    
    for(let i = 0; i<arr1.length; i ++){
        let row = [];
        for(let j = 0; j <arr1[0].length ; j++){
            row.push(arr1[i][j] + arr2[i][j]); 
        }
        answer.push(row); 
    } 
    
    return answer;

}


