// getLongestElement
// 문제 : 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야한다.
// input: string 타입을 요소로 갖는 배열
// output : string 
// 주의사항 : 반복문 금지 , 가장 긴 문자열이 중복될 경우 , 앞 쪽에 있는 요소 리턴
// 빈 배열일 경우 빈 문자열 리턴

function getLongestElement(arr){

      return arr.reduce(function(acc,cur){
        if(cur.length>acc.length){
          return cur
        }
        return acc;
      },arr[0])    

}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

output = getLongestElement(['one', 'two', 'wow']);
console.log(output); // --> 'one'
