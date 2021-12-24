// 10_creteMatrix
// 문제 : 방향이 있는 간선과 방향이 없는 간석의 목록을 받아 2차원 배열의 인접행렬을 반환하는 함수를 작성하라

// 조건 : 간선이 갖고있는 정보
// 0번쨰 : 간선의 사작 정점 (0 이상의 정수)
// 1번째 : 간선의 도착 정점 (0이상의 정수)
// 2번쨰 방향성 (undirected , directed)

// 주의사항
// 정점 0,4로 이어주는 간선은 정점 1,2,3도 존재한다

//! 방법 1 : 입력된 인자에서 필요로 하는 정점의 수로 초기화를 먼저 진행하는 방법

function createMatrix(edges) {
  // 배열의 길이를 구한다
  const matrixLen = findMax(edges);
  // Matrix를 생성하고 초기화 한다. (정점을 삽입하는 작업)
  let matrix = initializeMatrix(matrixLen);

  // 반복문을 돌면서 그래프의 간선을 추가한다.
  for (let edge of edges) {
    // 요소의   0반째, 1버째 인덱스를 start, destination 변수에 각각 할당한다.
    let start = edge[0];
    let destination = edge[1];
    matrix[start][destination] = 1;
    if (edge[2] === "undirected") matrix[destination].splice(start, 1, 1);
  }
  console.log(matrix);
  return matrix;
}

function initializeMatrix(length) {
  // 입력받은 배열의 정보를 넣을 새로운 matrix 생성 및 초기화
  let newMatrix = [];
  for (let i = 0; i < length + 1; i++)
    newMatrix.push(new Array(length + 1).fill(0));
  return newMatrix;
}

function findMax(edge) {
  return edge.reduce((acc, cur) => {
    max = Math.max(...cur.slice(0, -1));
    return acc > max ? acc : max;
  }, Math.max(...edge[0].slice(0, -1)));
}

//! 방법 2 : 배열의 길이를 미리 계사하지 않고 마지막에 0을 추가함  (이 문제에서는 별로 효율적이지 않아보임)
// 메서드가 많이 필요하다.

function makeMatrix(edges, matrix) {
  // 출력되는 metrix를 빈배열로 할당한다.

  // edges 길이만큼 반복문을 돌린다.
  for (let edge of edges) {
    // 요소의   0반째, 1버째 인덱스를 start, destination 변수에 각각 할당한다.
    let start = edge[0];
    let destination = edge[1];
    let edgeLen = [];

    // !  방향 , 무방향 공통
    // 만약 matrix[start]가 없다면, matrix[start]에 배열을 할당한다.
    if (!matrix[start]) matrix[start] = new Array();
    // destination 길이만큼 반복문을 돌린다.
    for (let i = 0; i < destination + 1; i++)
      // 만약 matrix[staert][i]번째 요소가 undefined 이면 0을 할당한다.
      if (!matrix[start][i]) matrix[start][i] = 0;
    // 반복문이 끝나면 matrix[destination][start]에 1을 할당한다.
    matrix[start][destination] = 1;

    // ! 만약 무방향 이라면 start 만큼의  반복문을 돌리고,
    if (edge[2] === "undirected") {
      if (!matrix[destination]) matrix[destination] = new Array();
      for (let i = 0; i < start + 1; i++)
        // matrix[destination][i]번 째 요소가 undefined이면 0을 할당한다.
        if (!matrix[destination][i]) matrix[destination][i] = 0;
      // 반복문이 끝아면 matrix[destination][sratr]에 1을 할당한다.
      matrix[destination][start] = 1;
    }
  }
  console.log(findMaxLength(matrix));
  return matrix;
}

function findMaxLength(matrix) {
  return matrix.reduce((acc, cur) => {
    return acc > cur.length ? acc : cur.length;
  }, matrix[0].length);
}

function fillMatrix(matrix, maxlength) {
  return matrix.map((edge) => {
    if (edge.length < maxlength)
      for (let i = edge.length; i < maxlength; i++) edge.push(0);
  });
}

function createMatrix2(edges) {
  let matrix = [];
  let maxLen = 0;
  makeMatrix(edges, matrix);
  maxLen = findMaxLength(matrix);
  fillMatrix(matrix, maxLen);

  return matrix;
}

let output1 = createMatrix([
  [0, 3, "directed"],
  [0, 2, "directed"],
  [1, 3, "directed"],
  [2, 1, "directed"],
]);
console.log(output1);

let output2 = createMatrix([
  [0, 2, "directed"],
  [2, 4, "undirected"],
  [1, 3, "undirected"],
  [2, 1, "directed"],
]);

console.log(output2);
