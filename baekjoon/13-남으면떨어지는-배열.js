//핵심 sort method 
//https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677/2

function solution(arr, divisor) {

    var answer = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    }

    return (answer.length < 0) ? [-1] : answer.sort((a,b)=>(a-b))
   
}

console.log('hi')



//2번째 풀이

// function solution(arr, divisor) {

//     // arr = [5, 9, 7, 10];
//     // divisor= 5;
//     var answer = [];
 

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % divisor === 0){
//             answer.push(arr[i])
//         } else if(arr[i] < divisor) {
//             answer = [-1]
//         }
//     }
// }




//참고(filter method)


// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }


