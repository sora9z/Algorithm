// 11_powerSet
// 문제 : 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴한다.
// 인자 str : string 타입의 공백이 있느 알파벳 소문자 문자열
// 출력 :  arr[i]는 각 부분집합의 원소로 구선된 문자열
// 주의사항 : arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열이다.
// arr[i]는 알파벳 순서로 정렬되어 있어야 한다.
// 집합은 중복된 원소를 허용하지 않는다.
//----------------------------------

//! 방법 1 DFS 사용
const powerSet = function (str) {
  // 전처리 : 문자열을 배열로 변환하면서 중복 제거한다.  //! sort로 정렬 해주자
  const strToarr = [...new Set(str.split(""))].sort();

  let result = undefined;
  let visited = new Array(strToarr.length).fill(false); // 방문했음을 표시하는 배열

  result = dfsFindPowerSet(visited, strToarr, "");
  result.unshift("");
  return result;
};

const dfsFindPowerSet = (visited, arr, prevLetter) => {
  let result = []; // 결과를 넣을 빈 배열 선언
  // node로 반복
  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      // 이  문자를 사용한 적이 없다면
      visited[i] = true; // 현재의 정점에 용했음을 표시
      let letter = prevLetter + arr[i]; // 마지막 인자와 arr에서 꺼낼 문자를 합친다.
      result.push(letter); // 문자를 result에 push 한다.
      result.push(...dfsFindPowerSet(visited.slice(), arr, letter)); // 깊이탐색을 하고 결과를 push 한다.
    }
  }

  return result;
};

// let output1 = powerSet("abc");
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
console.time();
let output = powerSet("abc");
console.timeEnd();
console.log(output);

// ! -----------ref-----------------

const powerSet_ref = function (str) {
  // 정렬
  const sorted = str.split("").sort();

  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });

  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };
  pickOrNot(0, "");

  return subSets.sort();
};

console.time();
output = powerSet_ref("abc");
console.timeEnd();
console.log(output);

// ! ----- MJ-------
const powerSet_MJ = function (str) {
  let splited_str = str.split("");
  let remove_duplicate = (splited_str) => {
    let result = [];
    for (let i of splited_str) {
      if (!result.includes(i)) {
        result.push(i);
      }
    }
    return result;
  };

  let arr = remove_duplicate(splited_str);

  const getSubsets = function (arr) {
    let flag = new Array(arr.length).fill(false);
    const subSets = [];

    // *멱집합에 대한 코드를 공부하여 짜집기 하였습니다.
    // !멱집합 : 주어진 집합의 모든 부분집합의 집합
    // *재귀 탈출 조건은 트리의 마지막 depth까지 다다랐을 경우입니다.
    // *탐색하는 방법은 이진트리의 탐색법과 유사하며, 왼쪽으로 갈 때는 true, 오른쪽으로 갈때는  false입니다.
    const subSet = function DFS(depth) {
      if (depth === arr.length) {
        // 재귀 종료 조건
        const subSet = arr.filter((value, index) => flag[index]);
        subSets.push(subSet); // 부분집합들을 담는 배열에 push
        return;
      }

      flag[depth] = true; // 해당 depth의 왼쪽 트리
      subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출

      flag[depth] = false; // 해당 depth 오른쪽 트리
      subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    };

    subSet(0); // 처음에 depth 0 부터 시작
    return subSets;
  };

  const result = getSubsets(arr).map((el) => {
    let sorted = el.sort();
    let joined = sorted.join("");
    return joined;
  });

  return result.sort();
};

console.time();
output = powerSet_MJ("abc");
console.timeEnd();
console.log(output);
