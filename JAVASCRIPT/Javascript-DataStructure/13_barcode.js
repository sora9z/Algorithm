// 13_barcode
// 문제 : 1,2,3으로만 이루어진 수열 바토드를 만들어야 한다.
// 바코드에서 인접한 두 개의 부분 수열이 동일하다면 제작할 수 없을 때, 주어진 길이 len의 바코드 중 가장 작은 수를 반환하는 함수를 작성하라.
// 자릿수와 상관 없이, 인접한 부분수열이 같다면 만들 수 없다.

// 인자1 : len Number 타입, 1이상 50이하의 자연수
// 출력 : Strin 타입을 리턴해야 한다.

// 그러니까, len의 길이를 갖는 부분집합 중 인접한 두 부분수열이 연속되지 않고 제일 작은 값이여야 한다는 것.. 어렵군

function barcode(len) {
  // 결과를 넣을 result 변수를 선언하고 문자열 1로 초기화를 한다 (처음에 1을 할당할 것이기 때문)
  let result = "1";
  // 현재 노드를 의미한 current 변수를 선언하여 빈 문자열을 할당한다.
  let currentVertex = "1";
  // 바코드 생성 함수 실행
  _barcode(currentVertex, result);

  return String(result);

  //!-----Method : 깊이 우선 탐생을 이용한 barcode 생성 메서드--//

  function _barcode(vertex, tempResult) {
    // 최종 result의 갱신
    result = tempResult;
    // 방문 했음을 표시가히 위해 길이 3의 visited 선언 후 flae로 초기화
    let visited = new Array(3).fill(false);
    // 인정 노드 중 vertex와 같은 값은 미리 true를 넣는다.
    visited[vertex - 1] = true;
    // 현재 노드의 인접 노드인 1,2,3 을 접근하기 위해 반복문을 돌린다
    for (let i = 1; i < 4; i++) {
      // 종결조건을 넣는다.
      if (result.length === len) return;
      // 이미 방문한 적이 있다면
      if (visited[i - 1]) {
        // 방문했음을 표시하고 넘어간다.
        visited[i - 1] = true;
        continue;
      }
      // 임시reslt에 i를 추가한다.
      tempResult += i;
      // tempResult slice 할 최대 길이를 계산한다
      let slicing = tempResult.length / 2;
      // 인접한 부분수열이 반복되는지 확인한다.
      let findNode = compareStr(parseInt(slicing), tempResult);
      // 반복되는 부분 수열이 있다면 tempResult의 맨 뒤의 문자를 삭제한다.
      if (!findNode) tempResult = tempResult.slice(0, -1);
      // 만약  조건에 맞는 인접 노드를 찾았다면
      else {
        // 방문 상태를 true로 변경한다.
        visited[i - 1] = true;
        // 밑의 레벨로 깊이 우선 순회를 시작한다.
        _barcode(String(i), tempResult);
      }
    }

    tempResult = tempResult.slice(0, -1);
  }

  //! ------Mathod : 문자열 비교 ---------------//
  function compareStr(maxLen, tempResult) {
    // 2부터 최대 slicing +1 까지 반복문을 돌린다.
    for (let j = 2; j < maxLen + 1; j++) {
      // 비교 할 문자열을 넣을 compare1, compare2 변수를 선언한다.
      let compare1 = tempResult.slice(-j);
      let compare2 = tempResult.slice(-j * 2, -j);
      //   console.log(compare1, compare2);
      // compare1과 compare2가 같다면 다른 인접 노드를 탐색하기 위해 break;
      if (compare1 === compare2) return false;
    }
    return true;
  }
}

//! 결과 확인

// let num = 4;
// let output = barcode(num);
// console.log(num, ":", output, output.length); // "1213"

// num = 1;
// output = barcode(num);
// console.log(num, ":", output, output.length); // "1213121"

// num = 3;
// output = barcode(num);
// console.log(num, ":", output, output.length); // "1213121"

// num = 7;
// output = barcode(num);
// console.log(num, ":", output, output.length); // "1213121"

num = 8;
output = barcode(num);
console.log(num, ":", output, output.length); // "12131231"

num = 20;
output = barcode(20);
console.log(num, ":", output, output.length); // "12131231321231213123"

num = 34;
output = barcode(34);
console.log(num, ":", output, output.length);
