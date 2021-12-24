// 문제  : 방향이 없는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇개인지 반환하는 함수 작성
// 입력 : edges : 2차원 Array 타입을 요소로 갖는 시작과 정점이 담겨있는 배열들을 담고있는 목록 (2차원 배열)
// Number 타입을 리턴
// 연결된 정점의 컴포넌트의 수를 숫자로 반환해야한다
// 주의사항 ; 주어진 간선은 무향이댜.
// ---------------------------------------

function connectedVertices(edges) {
  // 그래프릐 컴포넌트의 갯수를 넣을 병수 count를 선언한다.
  let count = 0;
  // 그래프의 최대 길이를 구한다,
  let maxLen = Math.max(...edges.flat()) + 1;

  // 인자로 받은 연결 정보를 사용하여 행렬을 인접 정방행렬을 생성한다.
  let adjGraph = transferToAdjArray(edges, maxLen);

  // 남아있는 node를 확인하기 위한 배열을 선언하고 정점들을 배열에 넣어준다.
  let remainedNode = [];
  for (let i = 0; i < maxLen; i++) remainedNode.push(i);

  while (remainedNode.length) {
    let start = remainedNode[0];
    traverseBFS(adjGraph, start, (vertex) =>
      remainedNode.splice(remainedNode.indexOf(vertex), 1)
    );
    count += 1;
  }

  return count;
}

function transferToAdjArray(array, maxLen) {
  // 각 정점간의 연결 정보를 인자로 전달받아 인접한 정점 리스트를 생성한다.
  // 만약 인자가 없거나 길이가 0이거나 행렬이 아니면  "잘못된 입력입니다" 메세지 출력
  if (!array.length || !Array.isArray(array)) return "잘못된 입력입니다";

  // 출력 할 배열을 선언하고 maxLen으로 초기화를 진행한다.
  let edges = initializeArray(maxLen);

  for (let edge of array) {
    let vertex = edge[0];
    let adjVertex = edge[1];
    // edges[vertex]애 ajdVertex를 push 한다.
    edges[vertex].push(adjVertex);
    // 무방행 향렬이므로
    edges[adjVertex].push(vertex);
  }

  // 초기화 당시 앞의 0을 제거해준다.
  edges = edges.map((el) => {
    el.shift();
    return el;
  });

  return edges;
}

function initializeArray(length) {
  // 원하는 길이의 2차원 배열로 초기화 하는 메서드
  // 초기값은 0
  let temp = new Array(length).fill(0);
  return temp.map((el) => (el = new Array(1).fill(0)));
}

function traverseBFS(edges, vertex, fn) {
  // 너비 우선 탑색 알고리즘

  // data를 넣을 queue와 방문했음을 표기 할 visited  배열을 선언한다.
  let queue = [];
  let visited = [];

  // queue를 삽입하고 삭제하는 메서드를 작성한다.
  const enqueue = (vertex) => queue.push(vertex);
  const dequeue = () => queue.shift();

  // 처음 실행 시 진행 할 데이터를 넣는다.
  enqueue(vertex);

  // queue에 데이터가 없을 때까지 반복을 진헹한다.
  while (queue.length) {
    // 탐색 할 vertex를 queue에서 가져온다.
    vertex = dequeue();
    // 방문한 기록이 없다면
    if (!visited[vertex]) {
      // 기록을 하고 콘솔로 출력
      visited[vertex] = true;
      // console.log(vertex);
      // 인자로 넣은 함수를 실행시킨다.
      fn(vertex);
      // 반복문을 통해 현재 정점의 인접 정점을 queue에 넣는다.
      for (let adjvtx of edges[vertex]) queue.push(adjvtx);
    }
  }
}

//!------------------------------------//

function transferToGraphAray(array) {
  // 정점간의 연결 정보를 인접행렬로 (정방행렬) 변환하는 메서드

  // 만약 인자가 없거나 길이가 0이거나 행렬이 아니면  "잘못된 입력입니다" 메세지 출력
  if (!array.length || !Array.isArray(array)) return "잘못된 입력입니다";

  // 정방 행렬행렬의 최댓값을 구한다.
  let maxLen = Math.max(...array.flat()) + 1;

  // 출력 할 배열을 선언하고 maxLen으로 초기화를 진행한다.
  let edges = initializeArray(maxLen);

  // 반복문을 통해 array의 각 요소로 접근하고 요소에 값을 넣어준다.
  for (let edge of array) {
    let index0 = edge[0];
    let index1 = edge[1];
    // edges[index0][index1]에 1을 할당한다 : index1~index2 를 잊는 간선이 존재함을 의미한다.
    edges[index0][index1] = 1;
    // 무방행 향렬이므로
    edges[index1][index0] = 1;
  }
  return edges;
}

function initializeToRacArray(length) {
  // 원하는 길이의 2차원 배열로 초기화 하는 메서드
  // 초기값은 0
  let temp = new Array(length).fill(0);
  return temp.map((el) => (el = new Array(length).fill(0)));
}

const result1 = connectedVertices([
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
]);
console.log(result1); //1

const result2 = connectedVertices([
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1],
]);
console.log(result2); // 1

const result3 = connectedVertices([
  [0, 1],
  [1, 7],
  [4, 7],
  [3, 4],
  [7, 3],
  [5, 6],
  [2, 5],
  [6, 2],
]);
console.log(result3); // 2

const result4 = connectedVertices([
  [0, 1],
  [1, 3],
  [3, 4],
  [4, 1],
  [0, 2],
  [2, 5],
  [5, 6],
  [6, 2],
]);
console.log(result4); // 1

function connectedVertices1(edges) {
  // edges의 각 요소를 flattering 하여 넣을 배열을 선언한다. (queue)
  let queue = edges.flat();
  // queue 에서 삭제한 데이터를 저장 할   queue 배열 선언
  let visitedData = [];
  // 이미 한 번 연결을 확인했음을 확인하는 isVisited 변수를 할당한다.
  let isVisited = new Array(Math.max(...queue)).fill(false);
  // queue를 삭제하는 dequeue 메서들르 작성한다.
  const dequeue = () => queue.shift();
  const edqueue = (data) => visitedData.push(data);
  // 컴포넌트의 수를 계신 힐 count 변수를 선언한다.
  let count = 0;
  while (queue.length) {
    // 첫 번째 data 먼저 진행
    let start = queue[0];
    count += 1;
    // isVisited[start] = true;
    // isVisited[dequeue()] = true;
    while (queue.length > 0) {
      let from = dequeue();
      let to = dequeue();
      // from과 to를 visitedData에 저장한다
      enqueue(from);
      enqueue(to);
      // 다시 돌아오면 break;
      if (start === to) break;
      if (!queue.includes(from) && !queue.includes(to)) {
        isVisited[from] = true;
        isVisited[to] = true;
        break;
      }
      isVisited[from] = true;
      isVisited[to] = true;
    }
  }
  return count;
}

function connectedVertices2(edges) {
  // TODO: 여기에 코드를 작성합니다.
  // edges의 각 요소를 flattering 하여 넣을 배열을 선언한다. (queue)
  let queue = edges.flat();
  // 이미 한 번 연결을 확인했음을 확인하는 isVisited 변수를 할당한다.
  let isVisited = new Array(Math.max(...queue)).fill(false);
  // queue를 삭제하는 dequeue 메서들르 작성한다.
  const dequeue = () => queue.shift();
  // 컴포넌트의 수를 계신 힐 count 변수를 선언한다.
  let count = 0;
  while (queue.length) {
    let start = queue[0];
    while (queue.length > 0) {
      let from = dequeue();
      let to = dequeue();
      if (start === from) count += 1;
      if (start === to) break;
      if (!queue.includes(from) && !queue.includes(to)) {
        isVisited[from] = true;
        isVisited[to] = true;
        break;
      }
      isVisited[from] = true;
      isVisited[to] = true;
    }
  }
  return count;
}

// const result1 = connectedVertices([
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ]);

// console.log(result1); // 3

// const result2 = connectedVertices([
//   [0, 1],
//   [2, 3],
//   [3, 4],
//   [3, 5],
// ]);
// console.log(result2); // 2

// const result3 = connectedVertices([
//   [0, 1],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [6, 7],
//   [7, 8],
// ]);

// console.log(result3); // 3

// const result4 = connectedVertices([
//   [0, 1],
//   [5, 6],
//   [6, 4],
//   [2, 3],
//   [4, 1],
//   [3, 4],
// ]);
// console.log(result4); // 1

// const result = connectedVertices([
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ]);
// console.log(result); // 3

// const result1 = connectedVertices([
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 0],
// ]);
// console.log(result1); // 1

// const result2 = connectedVertices([
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 1],
// ]);
// console.log(result2); // 1

// const result3 = connectedVertices([
//   [0, 1],
//   [1, 7],
//   [4, 7],
//   [3, 4],
//   [7, 3],
//   [5, 6],
//   [2, 5],
//   [6, 2],
// ]);
// console.log(result3); // 2

// const result4 = connectedVertices([
//   [0, 1],
//   [1, 3],
//   [3, 4],
//   [4, 1],
//   [0, 2],
//   [2, 5],
//   [5, 6],
//   [6, 2],
// ]);

// console.log(result4); // 1
