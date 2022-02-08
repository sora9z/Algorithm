/* 

문제 :  2차원 MxN 배열을 나선형으로 순회한다.
인자 : matrix mxN 2차원 배열. 배열의 요소는 string 타입이고 길이는 1이다.
출력 : string 타입을  retutn 한다.

주의사항 : 순회는 좌측 상당 0,0 에서 시잗한다. 배열의 모든 요소를 순서대로 이어붙인 문자열을 리턴해야 한다. 

*/
const spiralTraversal = function (matrix) {
  // TODO: 1. -90도 회정하는 method 2. 첫 행을 문자열로 메서드 3. result에 핮치기

  const rotateMatrix = (arr) => {
    let = [M, N] = [arr.length, arr[0].length];
    // N x M 행렬을 생성
    let result = [];
    for (let i = 0; i < N; i++) {
      result.push(new Array(M).fill(0));
    }

    let [X, Y] = [N - 1, 0];
    // 회전
    for (let i = 0; i < M; i++) {
      let [dX, dY] = [X, Y];
      (X -= 1), (Y += 1);
      for (let j = 0; j < N; j++) {
        result[i + dX][j + dY] = arr[i][j];
        (dX -= 1), (dY -= 1);
      }
    }
    return result;
  };

  let result = "";
  let copyMatrix = [...matrix];
  while (true) {
    // 첫 행을 shift하고 result 문자열에 넣는다.
    // rotate 한다.

    result += copyMatrix.shift().join("");
    if (!copyMatrix.length) break;
    copyMatrix = [...rotateMatrix(copyMatrix)];
  }

  return result;
};

// ! test
let matrix = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

matrix = [
  ["T", "y", "r", "i"],
  ["i", "s", "t", "o"],
  ["n", "r", "e", "n"],
  ["n", "a", "L", " "],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'
