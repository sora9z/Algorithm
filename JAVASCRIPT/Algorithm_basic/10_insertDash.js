// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다. 
// 입력 : 인자1 str 타입의 숫자
// 출력 : string 타입
// Note: 0은 짝수로 간주한다

function insertDash(str){

    // 빈 문자열인 변수 한 개를 선언한다.(출력용)
    // str의 길이만큼 반복문을 돌린다
        // Number(str[i])가 홀수히고 str[i+1]도 홀수이면
            // 빈 변수 +str[i]+"-";
        // 아니면 빈 변수 +str[i];
    // return 빈 변수

    let resultStr="";
    for(let i=0;i<str.length;i++){
        if(Number(str[i])%2===1 && Number(str[i+1]%2===1))
             resultStr+=str[i]+"-";
        else resultStr+=str[i];

    }

    return resultStr;
}
let output=insertDash('454793');
console.log(output);