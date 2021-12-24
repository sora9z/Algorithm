/*------------- Do it Myself--------------------------*/
// Psudo Cdoe
//**Adjacent & Unweighted & Directional Graph의 ADT**
// - matrix : 배열로 선언된 Graph 자체
// - addVertex() : 정점을 추가한다.
// - addEdge(from , to) : 매개변수 from 과 to로 전달된 정점을 연결하는 간선을 그래프에 추가하다.
// - contains(vertex) :  정점이 있는지 확인한다.
// - hasEdge(from, to) : from 에서 to로 간선이 있는지 확인한다.
// - removeEdge(from,to) : from에서 to로 가는 간선을 삭제한다.
{
  class GraphWithAdjacencyMatrix {
    constructor() {
      this.matrix = [];
    }

    addVertex() {
      // 인접 행렬 그래프 이므로 정점이 추가될 떄마다 대칭적으로 추가되어야 한다.
      // 만약 3x3의 행렬이 있는데, 정점을 한 개 추가하고 싶다면
      // matrix[0]~matrix[3] 까자 반복을 하면서  push(0)을 해주어 마지막에 요소를 추가해준다 (정방행렬이므로)
      // matrix[4][0]~matrix[4][4] 0으로 채운 배열을 추가한다.

      const currentLength = this.matrix.length;

      for (let vertax of this.matrix) vertax.push(0);
      this.matrix.push(new Array(currentLength + 1).fill(0));
    }

    addEdge(from, to) {
      const currentLength = this.matrix.length;

      return this.exceptionEdge(from, to, currentLength)
        ? (this.matrix[from][to] = 1)
        : false;
    }

    contains(vertax) {
      // vertax가 있는지 확인합니다
      return this.matrix[vertax] ? true : false;
    }

    hasEdge(from, to) {
      // from 에서 to로 가는 간선이 있는지 확인한다
      // 예외 처리 : from, to가 정의되어있지 않을 때
      // 예외 처리 : from, to가 범위 밖일 경우
      const currentLength = this.matrix.length;

      if (!this.exceptionEdge(from, to, currentLength)) return false;
      return this.matrix[from][to] ? true : false;
    }

    removeEdge(from, to) {
      // 간선을 삭제하고 삭제한다.
      const currentLength = this.matrix.length;
      // 예외처리를 한다
      return this.exceptionEdge(from, to, currentLength)
        ? (this.matrix[from][to] = 0)
        : false;
    }
    exceptionEdge(from, to, currentLength) {
      // 간선에 대한 예외 처리
      // 간선을 추가하려면 from , to 정점이 존재 해야한다
      // 입력된 from과 to의 길이가 범위 안에 있어야 한다 (matrix.length>from,to && from,to >0)
      if (from === undefined || to === undefined) {
        console.log("from' or 'to' is undefined");
        return false;
      }
      if (
        from > currentLength - 1 ||
        to > currentLength - 1 ||
        from < 0 ||
        to < 0
      ) {
        console.log("Input is out of range");
        return false;
      }
      return true;
    }
  }

  // create new graph
  const myMatrix = new GraphWithAdjacencyMatrix();
  // add 3 of vertax
  console.log("---addVertax test---");
  myMatrix.addVertex();
  myMatrix.addVertex();
  myMatrix.addVertex();
  console.log(myMatrix);

  console.log("---addEdge test---");
  myMatrix.addEdge(0, 1);
  myMatrix.addEdge(2, 3);
  myMatrix.addEdge(2, 3);
  myMatrix.addEdge(0, 2);
  console.log(myMatrix);

  console.log("---contain test---");
  console.log(myMatrix.contains(0));
  console.log(myMatrix.contains(3));
  console.log(myMatrix.contains(2));

  console.log("---hasEdge test---");
  console.log(myMatrix.hasEdge(0, 1));
  console.log(myMatrix.hasEdge(0, 2));
  console.log(myMatrix.hasEdge(2, 3));

  console.log("---removeEdge test---");
  myMatrix.removeEdge(0, 1);
  myMatrix.removeEdge(3, 1);
  myMatrix.removeEdge(1, 1);
  console.log(myMatrix);
}
