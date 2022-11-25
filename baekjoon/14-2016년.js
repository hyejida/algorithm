function solution(a, b) {
    // var answer = '';
    // return answer;



    
let week = ["MON", "TUE", "WED", "THU", 'FRI', "SAT", "SUN"]
let date = new Date(`2016-${a}-${b}`)

let day= date.getDay();
return week[day];

}


