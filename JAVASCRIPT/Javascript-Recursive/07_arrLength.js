// 07_arrLength
// 문제 : 배열을 입력받아 그 길이를 리턴한다
// input : 임의의 타입을 요소로 갖는 배열
// output : num 타입을 리턴
// 주의 : length 사용 금지, 비어있는지 유무 확인은 isEmpty() ===true 사용
// 빈 배열의 길이===0;
// --------------------------------------------------------------

function arrLength(arr) {
    // 종결조건 : 빈 배열이면 길이 ===0
    // 1+재귀
    if(arr.isEmpty()===true) return 0;
    return 1+arrLength(arr.slice(1))
  
  }
  let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4