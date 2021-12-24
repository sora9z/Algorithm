// 13_printObj
// 문제 : 객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴한다.
// 각 문자열은 한 줄에 키:값 형태로 구성되며, 각 문자열 끝에는 줄바꿈 문자가 포함되어야 한다.
// input : 객체
// output : string 타입ㅈ
// 주의 : 콜론 다름에 공백 포함 , 각 문자열 끝에 줄바꿈 문자 포함

function printObj(obj){

    // 결과를 넣을 str 타입의 변수를 선언하고 빈 문자열로 초기화를 한다
    // for 문을 사용하여 객체의 key 값에 접근한다
        // str 타입의 변수에 Str Type으로 변환한 객체와 값을 넣어준다.
    // 문자열 변수를 return 한다.

    let str="";
    for(let key in obj){
        str+=`${key}: ${obj[key]}\n`
    }
    return str


}

const obj = { name: 'Steve', age: 13, gender: 'Male' };
let output = printObj(obj);
console.log(output); 


/*
name: Steve
age: 13
gender: Male
*/