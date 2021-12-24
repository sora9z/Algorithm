//28_getLengthOfLongestElement
// 문제 : 문자열을 요소로 갖는 배열을 입력받아 가장 긴 문자열 길이 리턴
// 입력 : string 타입의 배열
// 출력 : numbet 타잊
// 주의 : 반복문 사용 금지 , 빈배열을 입력받을 경우 0리턴

function getLengthOfLongestElement(arr){

    // reduce를 사용하여 배열의 각 요소에 접근한다. 초기값을 배열의 첫 번째 인자로 넣는다
        // cur의 길이가 acc의 길이보다 클 경우 acc를 cur로 업데이트한다.
        
    // 결과릐 길이를 return 한다.
    return arr.reduce((acc,cur)=>{
        if(acc.length>cur.length) {
          return acc
        }
        else return cur
    },[]).length
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5