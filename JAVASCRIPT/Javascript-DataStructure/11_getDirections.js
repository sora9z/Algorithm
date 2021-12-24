// 11_getDirections
// 문제 : 주어진 인접 행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환한다.
// input : 인자1 matrix 2채원 배열
// 인자2 : form , to Number 타입의 시작 , 도착 지점
// 출력 : Boolean 타입

// 재귀를 사용하지 않고 queue와

function getDirectionsByRef(matrix, from, to) {
  // 방문 유무를 넣을 matrix 길이의 배열을 한개 선언하고 false로 초기화를 한다
  let isVisited = new Array(matrix.length).fill(false);
  // Queue로 사용할 배열을 선언한다.
  let queue = [];
  // queue에 값ㅇ르 넣을 enqueue 와 queue에서 데이터를 삭제하는 dequeue 메서드를 각각 선언한다.
  const enqueue = (data) => queue.push(data);
  const dequeue = (data) => queue.shift();
  // queue에 첫 번째 값으로 from을 넣도 isVisit의 상태를 바꾼다
  enqueue(from);
  isVisited[from] = true;
  // queue에 아무 데이터가 없을 때까지 반복문을 반복한다
  while (queue.length) {
    // queue의 데이터를 vertex 변수에 할당한다. (탐색 할 정점)
    let vertex = dequeue();
    // 만약 탐색 할 정점이 to라면 존재하는 것이므로 true를 return 한다.
    if (vertex === to) return true;
    // 탐색하려는 정점(배열)의 길이만큼 반복문을 돌린다 (다음 탐색 정점 찾기위해)
    for (let next = 0; next < matrix[vertex].length; next++) {
      // 만약 vertex 요소중 인접 요소가 존재하고, 방문한 적이 없다면
      if (matrix[vertex][next] && !isVisited[next]) {
        // queue에 다음 탐색 대상으로 next를 할당을 하고
        enqueue(next);
        // isVisited의 인덱스번호 next의 값을 true로 변경한다.
        isVisited[next] = true;
      }
    }
  }
  // 아무것도 발견하지 못하면 falsue를 반환
  return false;
}

// 재귀적으로 푸는 방법

function getDirections(matrix, from, to) {
  let fromVertex = matrix[from];

  return getDirectionsRecursive(fromVertex, to) ? true : false;

  function getDirectionsRecursive(vertex, to) {
    // 만약 start ~ to 로 가는 정점이 있다면 true 리턴
    if (vertex[to]) return true;

    // 인접한 정점을 구하다

    let indexes = findAdjVertex(vertex);

    for (let el of indexes) {
      if (from === el) return false;
      if (getDirectionsRecursive(matrix[el], to)) return true;
      continue;
    }
  }

  function findAdjVertex(vertex) {
    return vertex
      .map((el, idx) => {
        if (el === 1) return idx;
      })
      .filter((el) => !!el);
  }
}

const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];
const result = getDirectionsByRef(
  [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ],
  0,
  2
);
console.log(result); // true

const result1 = getDirectionsByRef(matrix, 0, 1);
console.log(result1);

const result2 = getDirectionsByRef(matrix, 0, 2);
console.log(result2);

const result3 = getDirectionsByRef(matrix, 0, 3);
console.log(result3);

const result4 = getDirectionsByRef(matrix, 3, 1);
console.log(result4);
