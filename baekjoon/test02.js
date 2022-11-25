function solution(star){
	let starIcon = ''
    
    for(let i = 1; i<star+1; i++){
        for(let j = star; j>i; j--) {
           starIcon += ' '
        }
        for(let k = 0; k < 2*i-1; k++){       
            starIcon += '*'
        }
        starIcon += '\n'
    }
    return starIcon
}

// console.log(solution(3))

*
**
 
   *
  ***
 ***** 


