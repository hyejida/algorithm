

function solution(num) {
    
    const stars ='*'.repeat(num.length-4)
    const last = num.slice(-4);

    const result = stars + last

    return result;
}  


// function solution(num) {
    
//     const stars ='*'.repeat(num.length-4)
//     const result = stars + num.slice(-4);

//     return result;
// }  



