// 📝 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
//🔎 문제분석
//💡 규칙찾기
// 𝌣 코딩화



let output = ''

for(let i = 1; 1<=100; i++){
    for(let j = 0; j<i; j++){
        output = output + '*'  
    }
    output += '\n'
}


console.log(output)