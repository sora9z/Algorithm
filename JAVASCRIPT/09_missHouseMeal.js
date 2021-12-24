/*
반찬이 나열된 배열의 부분수열을 구하는 문제
인자 1: sideDishes - String 타입의 영문으로 된 반찬이 나열되어있는 배열
출력 : Array 타닙을 return해야 한다. 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수가 담긴 배열을 return
주의사할 : 반찬은 영문이며 중복되지 않는다. 반찬을 먹지 않는 것도 포함된다. 3<=반찬<=99이다. 출력되는 배열은 모두 사전식으로 정렬되어야 한다
*/

function missHouseMeal(sideDishes) {
  // TODO: 이 문제는 부분집합을 모두 구하는 문제이다. 결국 깊이 탐색
  // sideDishes로 반복을 한다.
  // sideDishes[i]를 배열에 push하고
  // 배열을 result에 push한다
  // depth가 0이면 재귀를 종료한다.
  // 아니면 dfs(depth-1,배열)을 진행한다

  const result = [[]];
  let depth = sideDishes.length;

  const dfs = (depth, arr, visited) => {
    arr = arr ?? [];
    visited = visited ?? new Array(sideDishes.length).fill(0);

    if (depth === 1)
      for (let i = 0; i < sideDishes.length; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          arr.push(sideDishes[i]);
          result.push([...arr]);
          arr.pop();
        }
      }
    else
      for (let i = 0; i < sideDishes.length; i++) {
        if (!visited[i]) {
          // 방문한 적이 없다면
          visited[i] = 1; // 방문 표시하고
          arr.push(sideDishes[i]);
          result.push([...arr]);
          dfs(depth - 1, [...arr], [...visited]);
          arr.pop();
        }
      }
    return;
  };

  sideDishes.sort();
  console.log(sideDishes);

  dfs(depth);
  return result;
}
// ! test

let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] */

//! Ref TIL 할 것
function missHouseMeal(sideDishes) {
  // 결과를 담을 배열을 선언합니다.
  let result = [];
  // sideDishes를 사전식 순서로 정렬합니다.
  sideDishes.sort();

  // 모든 조합을 검사하는 재귀 함수를 작성합니다.
  const sidePowerSet = (idx, sideDish) => {
    // 재귀 함수이기 때문에 탈출 조건을 만듭니다.
    if (idx === sideDishes.length) {
      // 만약, idx와 sideDishes의 길이가 같다면(마지막까지 검토한 경우) result에 sideDish를 삽입하고 push합니다.
      result.push(sideDish);
      return;
    }

    // idx번째 요소가 포함되지 않는 경우
    sidePowerSet(idx + 1, sideDish);

    // idx번째 요소가 포함되는 경우
    sidePowerSet(idx + 1, [...sideDish, sideDishes[idx]]);
  };

  // 0 번째 인덱스와 빈 배열을 인자로 받는 재귀 함수를 실행합니다.
  sidePowerSet(0, []);

  // 결과를 사전식 순서로 정렬합니다.
  return result.sort();
}
