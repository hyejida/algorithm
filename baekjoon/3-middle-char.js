// 반복되는 값을 변수로 가져오기

// 단어의 길이가 짝수인 경우,
// const positonE = s.length % 2
// 단어의 길이가 홀수인 경우
// const positionO = (1 + s.length)%2



function solution(s) {
    const middle = Math.floor(s.length/2);
    if(s.length % 2 === 0) {
        return(s[middle-1]+s[middle])
    }return(s[middle])
}




// 현승님 방법!!
function solution(s) {
    let result = ''
    if(s.length%2 === 0){
        result = s.substr((s.length/2)-1, 2)
    }else {
        result = s.substr((s.length/2), 1)
    }
    return result
  }

  // substr() 소수점 상관없음. 소수점을 입력한 경우 자동으로 정수로 변환합니다.