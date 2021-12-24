// 15_flattenArray
// 문제 : 다차원 배열을 입력 받아 1차원 배열로 반환하여 리턴한다.
// input : 양의 정수 또는 배열을 요소로 갖는 다차원 배열
// output : 배열을 리턴한다.
// 주의사항 : 입력받은 배열의 충첩 정도는 정해져있지 않다.
// 빈 배열 --> 빈 배열 리턴
// ------------------------------------------------

function flattenArr(arr) {
  // 종결조건 1 빈 배열 --> return 빈 배열
  // head = filter -> Array가 아닌 요소
  // tail = filter -> Array인 요소
  // head.comcat(func(tail)) 을 리턴한다.

  if (!arr.length) return [];
  const result = [];
  const tail = [];
  for (let el of arr) {
    if (Array.isArray(el)) result.push(...flattenArr(el));
    else result.push(el);
  }
  return result;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]
