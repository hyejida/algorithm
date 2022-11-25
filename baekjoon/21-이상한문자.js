// function solution(s) {
//     let hi = ''
//     for(let i = 0; i<s.length; i++) {
//         if(i % 2 === 0) {
//              hi = s.replace(s[i],s[i].toUpperCase(s))
//         }
//     }return hi
// }
// function solution(s) {
//     const arr = Array.from(s);
//     const answer = [];
//     for(let i =0; i<s.length; i++){
//         if(i % 2 === 0){
//             answer.toString().replace(arr[i],arr[i].toUpperCase())
//         } answer.push(arr[i])
//     } const join = answer.join('') 
//     return join
// }


function solution(s) { 
 
    return s.split('').map((b, i) => {
      return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
    }).join('');

}