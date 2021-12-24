// 05_arrSum
// 문제 : 배열을 입력받아 모든 요소의 합을 리턴헤야한다.
// input : number 타입을 요소로 갖는 배열
// output : num타입 출력
// 주의 : 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야한다.
// 입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다.
// 빈 배열의 합은 0이다.
// ---------------------------------------

function arrSum(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 종결조건 ; arr이 빈 배열이면 return 0
    // arr[0] + f(arr.slice(1))을 출력한다.
    if(arr.length===0) return 0;
    return arr[0]+arrSum(arr.slice(1));
  }
  let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1