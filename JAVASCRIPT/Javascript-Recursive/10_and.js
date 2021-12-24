//! 10_and
/*
문제 : 배열을 입력받아 모든 요소의 논리곱을 return 한다. 
입력 : arr
출력 : bolean 타입을 구성 요소로 갖는 배열
주의사항 
함수 and는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
빈 배열의 논리곱은 true 입니다
*/

function and(arr) {
  if (!arr.length) return true;
  return arr[0] && and(arr.slice(1));
}

let output = and([true, true, true]);
console.log(output); // --> true

output = and([true, true, false]);
console.log(output); // --> false
