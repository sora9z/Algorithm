// 09_take
// 문제 : 수를 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴한다
// input : num 타입의 정수 (num>0) . 임의의 요소를 갖는 배열
// output : 순차적으로 num개의 요소로 구성된 배열 리턴
// 주의사항 : 재귀 사용 반본 x
 // ------------------------------------------------------

 function take(num, arr) {
    // 종결조건 : num 이 0 이거나 arr.length가 0일 때 return arr
    // return take(num-1,arr.slice(0,-1))
    if(!num || !arr.length) return [];
    return [arr[0],...take(num-1,arr.slice(1))]
  }

let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]