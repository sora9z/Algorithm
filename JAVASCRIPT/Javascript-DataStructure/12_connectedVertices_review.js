function connectedVertices(edges) {
  let count = 0; // 분기의 갯수를 count
  const maxLen = Math.max(...edges.flat()) + 1; // edges에 있는 값 중 최댓값을 추출 (정방행렬의 길이)
  const matrix = getMatrix(edges, maxLen); // 연결 정보가 있는 정방행렬을 구한다
  let queue = []; // 각 인접한 접점들을 넣을 queue
  let visited = new Array(maxLen).fill(false);

  for (let i = 0; i < maxLen; i++) {
    if (visited[i] === true) continue;
    let vertex;
    queue.push(i); // i번째 요소를 시작 node로 넣는다.
    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        // 방문한 적이 없는 정점이라면
        visited[vertex] = true; // 방문했음을 표시해 주고
        queue.push(...matrix[vertex]); // vertex의 인접 인자들을 queue에 넣는다.
      }
    }
    // queue가 비었다면 count++
    count++;
  }
  return count;
}
//! 정방행렬을 구하는 Method

function getMatrix(array, maxLen) {
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

//! Test
const result = connectedVertices([
  [0, 1],
  [2, 3],
  [3, 4],
  [3, 5],
]);
console.log(result); // 2
