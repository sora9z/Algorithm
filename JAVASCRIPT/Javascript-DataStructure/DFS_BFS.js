// DFS와 BFS에 대해 학습

//! 1. BFS (Breadth-First-Search) 너비 우선 탐색: 이진트리에서 차수 우선 순위와 비슷하다
function DirectedGraph() {
  this.edges = {};
}

DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
  this.edges[origVertex][destVertex] = weight ?? 0;
};

DirectedGraph.prototype.traverseBFS = function (vertex, fn) {
  let queue = [],
    visited = [];

  queue.push(vertex);

  while (queue.length) {
    vertex = queue.shift();
    if (!visited[vertex]) {
      visited[vertex] = true;
      fn(vertex);
      for (let adjacentVertex in this.edges[vertex]) {
        queue.push(adjacentVertex);
      }
    }
  }
};

var digraph1 = new DirectedGraph();

digraph1.addVertex("b");
digraph1.addVertex("c");
digraph1.addVertex("d");
digraph1.addVertex("e");
digraph1.addVertex("a");
digraph1.addEdge("a", "b");
digraph1.addEdge("a", "d");
digraph1.addEdge("b", "c");
digraph1.addEdge("b", "e");

digraph1.traverseBFS("a", (vertex) => {
  console.log(vertex);
});
console.log(digraph1);

//! 2. DFS (Depth-First-Search) 깊이 우선 탐색 : 다른 연결을 방문하기 전에 하나의 연결을 깊게 파고들며 순회하는 검색
DirectedGraph.prototype.traverseDFS = function (vertex, fn) {
  let visited = [];
  this._traverseDFS(vertex, visited, fn);
};
// __traverseDFS 메서드는 인자로 주어진 vertex부터 시작하여 재귀적으로 깊이 검색을 실행한다.
DirectedGraph.prototype._traverseDFS = function (vertex, visited, fn) {
  visited[vertex] = true;
  fn(vertex);
  for (let adjacentVertex in this.edges[vertex])
    if (!visited[adjacentVertex])
      this._traverseDFS(adjacentVertex, visited, fn);
};
console.log("-------DFS-------");
let digraph2 = new DirectedGraph();
digraph2.addVertex("a");
digraph2.addVertex("b");
digraph2.addVertex("c");
digraph2.addVertex("d");
digraph2.addVertex("e");
digraph2.addEdge("a", "b");
digraph2.addEdge("a", "d");
digraph2.addEdge("b", "c");
digraph2.addEdge("b", "e");

digraph2.traverseDFS("a", (vertex) => console.log(vertex));
