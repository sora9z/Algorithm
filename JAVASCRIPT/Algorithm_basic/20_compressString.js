// 20_compressString
// 문제 : 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 한다.

// Input : str 타입의 알파벳 문자열
// Output : string 타입
// 주의: 빈 문자열을 입력받을 경우, 빈 문자열 리턴
// 3개 이상의 연속되는 문자만 압축한다.
// -------------------------------------------------------------


function compressString(str){
    // 빈 문자열이면 빈 문자열을 리턴한다.
    // 결과를 넣을 result 변수를 선언한다.
    // 이전 값을 넣을  pre 변수와 현재 값을 넣을 cur 변수를 선언하고 ''로 초기화
    // 반복되는 횟수를 넣을 count 변수를 선언하고 1로 초기화
    // 문자열의 길이+1만큰 반복문을 돌린다.
        // 만약 i===길이 이면 cur=' '
        // 아니라면
            // cur=str[i]를 할당한다
        // 만약 pre===cur 이면
            // count++
        // 아니라면(pre!==cur)
            // 만약 count===1
                // result+=pre
            // 만약 count===2
                // result+=pre*2

            // 만약 count가 3보다 크거가 같다면
                // result += count+pre;
            // count =1
        // pre=cur
        
if(str.length===0) return "";

let result="";
let count=1;
let pre="", cur="";

for(let i=0;i<=str.length;i++){
    if(i==str.length) cur="";
    else cur=str[i];

    if(pre===cur) count++;
    else{
        if(count===1) result+=pre;
        else if(count===2) result+=pre+pre;
        else result+=count+pre;
        count=1;
    }
    pre=cur;

}
return result;

}



let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p