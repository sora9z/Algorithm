// ? 문제 : 세로 길이 2, 가로 길이 ndls 2xnq 보드가 있다. 2x1 크기의 타일을 가지로 이 보드를 채우는 모든 경우의 수를 리턴하시오
// 입력 : number type의 1이상의 자연수
// 출력 : number 타입
// 주의사항 : 타일을 가로, 세로 어느 방향에 놓아도 상관없음
// ? --------------------------------------------------

let tiling = function (n) {
  // 경우의 수를 넣을 변수
  let probability = 1; // +1은 전체 세로로 넣을 경우
  const loopCount = parseInt(n / 2);
  if (!(n % 2)) {
    probability += 1;
    for (let i = 1; i < loopCount; i++) {
      let visited = new Array(n - i).fill(false);
      //   probability += dfsCombination([n - i, i], 0, 0, visited);
      probability += mathCombination([n - i, i]);
    }
  } else
    for (let i = 1; i <= loopCount; i++) {
      let visited = new Array(n - i).fill(false);
      //   probability += dfsCombination([n - i, i], 0, 0, visited);
      probability += mathCombination([n - i, i]);
    }
  return probability;
};

// ? nCr 의 조합의 수를 구하는 메서드 dfs 사용
const dfsCombination = (combination, vertex, level, preVisited) => {
  // ! combination : array type으로 조합의 n과 r을 요소로 갖는다
  // ! tiles는 노드들이 들어있는 배열
  // ! vertex는 탐색을 시작 할 노드
  // ! level은 현재 탐색하고 있느 level을 의미

  // 현재 stack 에서 방문했음을 표시하기 위해 curVisited를 선언하고 proVisited를 복사하여 할당한다.
  let curVisited = preVisited.slice();
  let result = 0; // 성곤한 경우의 수의 합을 넣은 변수
  // 방문함을 표시
  //   curVisited[vertex] = true;

  // 주어진 vertex부터 시작하여 재귀적으로 깊이 탐색을 시작한다.
  // 인접 노드로 반복문을 실행한다
  for (let adjVertex = 0; adjVertex < combination[0]; adjVertex++) {
    // 해당 노드에 방문하지 않았다면 그 노드르 깊이탐색 진행
    if (!curVisited[adjVertex]) {
      curVisited[adjVertex] = true;
      let nextLevel = level + 1; // 다음 레벨 지정
      // 종결조건 : nextLevel===r 일 때 return 1을 해준다. (탐색을 성공적으로 마치고 1을 반환한다.)
      if (nextLevel === combination[1]) {
        result += 1;
        continue;
      } else
        result += dfsCombination(combination, adjVertex, nextLevel, curVisited);
    }
  }
  return result;
};

// let visited = new Array(5).fill(false);
// let test1 = dfsCombination([5, 2], 0, 0, visited);
// console.log(test1);
// let output = tiling(2);
// console.log(output); // --> 2

// let output1 = tiling(4);
// console.log(output1); // --> 5

// ? nCr 구하는 메서드 수식 사용
const mathCombination = (combination) => {
  const n = combination[0];
  const r = combination[1];

  return factorial(n) / (factorial(r) * factorial(n - r));
};

// ? factorial
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i < n + 1; i++) result *= i;
  return result;
};
let output2 = tiling(10);
console.log(output2);

output2 = tiling(15);
console.log(output2);

output2 = tiling(30);
console.log(output2);
