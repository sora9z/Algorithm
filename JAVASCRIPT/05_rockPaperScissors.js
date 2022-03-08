/*
가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임입니다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

입력은 없으면 출력만 있다.
출력 : 2차원 배열을 return 한다.
arr[i]는 'rock','paper','siccors' 중 한가지 이상을 요소로 갖는다.
arr.length는 3이다.

주의사항 : 
최종적으로 return 되는 배열의 순서는 가중치 적용 정렬(Weight Sort)을 따른다. 
중요도는 'rock','paper','scissors' 순으로 높다.
*/
//! 다시 풀어봄 더 간결
function rockPaperScissors(depth) {
  //  depth가 0이 될 떄까지 def를 진행한다
  // depth가 0이라면 result에 배열을 push하고 return 한다.
  let result = [];
  const dfs = (depth, arr) => {
    const rps = ["rock", "paper", "scissors"];
    for (let elem of rps) {
      if (depth === 1) {
        result.push([...arr, elem]);
      } else {
        dfs(depth - 1, [...arr, elem]);
      }
    }
  };
  depth = depth ?? 3;

  dfs(depth, []);
  return result;
}

function rockPaperScissors1(depth) {
  //Todo 이 문제는 DFS 문제 같다
  // rock paper sicssors가 중요도 별로 들어있는 배열을 선언한다

  depth = depth ?? 3;
  //rps 로 반복문 진행
  let result = [];
  dfs(depth, result);
  return result;
}

const dfs1 = (depth, result, count, arr) => {
  count = count ?? 1;
  arr = arr ?? [];
  const rps = ["rock", "paper", "scissors"];

  // base case
  if (count === depth) {
    // 만약 가장 마지막의 node 이라면
    for (let i = 0; i < 3; i++) {
      arr.push(rps[i]); // arr에 요소를 넣고
      result.push([...arr]);
      arr.pop(); // 다시 맨 마지막에 넣은 것을 뺸다 (다른 인사를 넣기 위해)
    }
  }
  // 아니라면 다음 반복문을 실행
  else
    for (let i = 0; i < 3; i++) {
      // 아니라면 아직 마지막 node가 아니므로 재귀를 다시 잔행해야한다.
      // arr에 요소를 추가하고 재귀를 돌린다.
      arr.push(rps[i]);
      dfs(depth, result, count + 1, arr);
      arr.pop(); // 재귀를 나오면 다음 요소를 넣기 위해 맨 마지막의 요소를 제거한다.
    }
  return true;
};

// test
let output = rockPaperScissors();

console.log(output);
/*
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
  */
