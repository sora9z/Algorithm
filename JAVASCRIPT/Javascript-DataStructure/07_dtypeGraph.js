// 그래프 구현
// 맴버변수 : 버틱스와 간선을 담을 Array 타입의 matrix
// 메서드 : addVertax() : 그래프에 버텍스를 추가해야한다
// contain(vertax) : 그래프에 해당 버텍스가 존재하는지 여부를 Boolean으로 반환
// addEdge(from , to) fromVertex와 toVertex 사이의 간선을 추가한다
// hasdEdge(from , to) fromVertex와 teVertex 사이의 간선이 존재하는지 여부를 Boolean으로 반환해야 한다.
// removeEdge(from,to) fromVertex와 toVertex 사이의 간선을 삭제해야 한다.
// 주의사항 : 인접 행렬 방식으로 구현해야 한다.
// 구현해야 하는 그래프는 방향 그래프이다.
// 구현해야 하는 그래프는 비가중치 그래프이다.
// 구형해야 하는 그래프는 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용한다.
// 인접 행렬 그래프는 정점이 자주 삭제되는 경우에는 적합하지 않기 때문에 정점을 지우는 메소드는 생략한다
// -----------------------------------------

// directed graph 방향 그래프
// unweighted 비가중치
// adjacency matrix 인접 행렬
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용한다.

class GraphWithAdjacencyMatrix {
  constructor() {
    this.matrix = [];
  }

  addVertex() {
    // 버텍스를 추가한다
    const currentLength = this.matrix.length;

    for (let i = 0; i < currentLength; i++) {
      this.matrix[i].push(0);
    }

    this.matrix.push(new Array(currentLength + 1).fill(0));
  }

  contains(vertex) {
    return this.matrix[vertex] ? true : false;
  }

  addEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to == undefined) {
      console.log("2개의 인자가 있어야 합니다");
      return;
    }
    // 간선을 추가할 수 없는 상환에서는 추가하지 말아야 한다.
    if (
      from + 1 > currentLength ||
      to + 1 > currentLength ||
      from < 0 ||
      to < 0
    ) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }

    // 간선을 추가한다
    this.matrix[from][to] = 1;
  }

  hasEdge(from, to) {
    return this.matrix[from][to] ? true : false;
  }

  removeEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다");
      return;
    }

    if (from + 1 > currentLength || to + 1 > currentLength) {
      console.log("범위가 매트릭스 밖에 있습니다");
      return;
    }

    this.matrix[from][to] = 0;
  }
}

const adjMatrix = new GraphWithAdjacencyMatrix();
adjMatrix.addVertex();
adjMatrix.addVertex();
adjMatrix.addVertex();
console.log(adjMatrix.matrix);
/*
							TO
		 	  	 0  1  2
		  	0	[0, 0, 0],
	FROM 	1	[0, 0, 0],
		  	2	[0, 0, 0]
*/
let zeroExists = adjMatrix.contains(0);
console.log(zeroExists); // true
let oneExists = adjMatrix.contains(1);
console.log(oneExists); // true
let twoExists = adjMatrix.contains(2);
console.log(twoExists); // true

adjMatrix.addEdge(0, 1);
adjMatrix.addEdge(0, 2);
adjMatrix.addEdge(1, 2);

let zeroToOneEdgeExists = adjMatrix.hasEdge(0, 1);
console.log(zeroToOneEdgeExists); // true
let zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // true
let oneToZeroEdgeExists = adjMatrix.hasEdge(1, 0);
console.log(oneToZeroEdgeExists); // false

console.log(adjMatrix.matrix);
/*
							TO
		 	  	 0  1  2
		  	0	[0, 1, 1],
	FROM 	1	[0, 0, 1],
		  	2	[0, 0, 0]
*/

adjMatrix.removeEdge(1, 2);
adjMatrix.removeEdge(0, 2);
let oneToTwoEdgeExists = adjMatrix.hasEdge(1, 2);
console.log(oneToTwoEdgeExists); // false
zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // false

console.log(adjMatrix.matrix);
/*
							TO
		 	  	 0  1  2
		  	0	[0, 1, 0],
	FROM 	1	[0, 0, 0],
		  	2	[0, 0, 0]
*/
