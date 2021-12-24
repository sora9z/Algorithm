// 08_drop
// 문제 : 수와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 한다.
// input : num 타입의 정수 (num >=0)
// output : 임의의 요소를 갖는 배열
// 순차적으로 num개의 요소가 제거된 배열을 리턴헤야 한다.
// 주의 : num과 length 중 최대값만큼 제거해야 한다.
// ---------------------------------------------------
function drop(num, arr) {
    // 경우 1 : num<arr.length
      // 종결 조건 : num===0 --> return arr
    // 경우 2 : num>arr.length
      // 종결조건 : arr.length ===0 --> return arr
    // 최종 종결조건 : 만약 arr이 빈 배열 이거나 num===0이면 return arr
    // drop(num-1,arr.slice(1))
    if(!num || !arr.length) return arr;
    return drop(num-1,arr.slice(1))
  
  }

let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]