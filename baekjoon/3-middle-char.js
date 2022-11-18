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




