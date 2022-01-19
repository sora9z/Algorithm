/*
2차원 배ㄹㅣ N x N 배열을 시계 방향으로 90도 회전시킨 배열을 return한다.

입력 : matrix   (가로, 세로 N) 요소는 number type
출력 : 2차원 배열 

Advanced : 가로와 세로 길이가 각각 MxN인 2차원 MXN배열을 시계방향으로 90도씩 K번 회전시킨 배열을 리턴 
이 경우 회전수가 두 번째 입력으로 주어진다.
*/

const rotateMatrix = function (matrix, k) {
  const rotateNum = k !== undefined ? k % 4 : 1;
  // 결과를 넣을 배열을 먼저 만든다
  let result = [];

  if (!rotateNum || matrix.length === 0) return matrix;

  // rotateNum에 따라 다르게 절성
  let increX = undefined;
  let increY = undefined;
  let increment = undefined;

  switch (rotateNum) {
    case 1:
      increX = [1, -1];
      increY = [-1, -1];
      increment = [0, matrix.length - 1]; // 좌표 증가율
      for (let i = 0; i < matrix[0].length; i++) {
        result.push(new Array(matrix.length).fill(0));
      }
      break;
    case 2:
      increX = [0, -2];
      increY = [-2, 0];
      increment = [matrix.length - 1, matrix[0].length - 1]; // 좌표 증가율
      for (let i = 0; i < matrix.length; i++) {
        result.push(new Array(matrix[0].length).fill(0));
      }
      break;
    case 3:
      increX = [-1, -1];
      increY = [-1, 1];
      increment = [matrix[0].length - 1, 0]; // 좌표 증가율
      for (let i = 0; i < matrix[0].length; i++) {
        result.push(new Array(matrix.length).fill(0));
      }
      break;
    default:
      // k없는 경우
      increX = [1, -1];
      increY = [-1, -1];
      increment = [matrix.length - 1, 0]; // 좌표 증가율
      for (let i = 0; i < matrix[0].length; i++) {
        result.push(new Array(matrix.length).fill(0));
      }
      console.log("default");
  }

  let incrementoOfY = [increY[0], increY[1]]; // increY를 행이 돌 떄마다 처음의 increY만큼 증가시켜야함
  let copyIncrement = [...increment]; // 애휴 ..

  for (let i = 0; i < matrix.length; i++) {
    increment = [...copyIncrement];

    if (i !== 0) {
      // 행이 바뀔 때마다 increment 의 x,y가 증감 (rotateNum에 따라 다름)
      increment[0] += increY[0];
      increment[1] += increY[1];
      increY[0] += incrementoOfY[0];
      increY[1] += incrementoOfY[1];
    }
    for (let j = 0; j < matrix[0].length; j++) {
      result[i + increment[0]][j + increment[1]] = matrix[i][j];
      increment[0] += increX[0];
      increment[1] += increX[1];
    }
  }

  return result;
};

// let arr = [
//   [1, 2, 3, 0],
//   [4, 5, 6, 8],
//   [7, 8, 9, 6],
// ];
// console.log(arr);
// console.log("======================");
// console.log(rotateMatrix(arr, 1));
const matrix = [
  [1, 2, 3, 4, 5, 6, 7],
  [22, 6, 7, 8, 1, 16, 17],
  [33, 10, 11, 12, 45, 26, 27],
  [44, 14, 15, 16, 66, 36, 37],
  [55, 14, 15, 16, 66, 46, 47],
  [66, 14, 15, 16, 66, 56, 57],
];
console.log(rotateMatrix(matrix, 14));

/*
[
  [
    66, 14, 15, 16, 66, 56, 57
  ],
  [
    55, 14, 15, 16, 66, 46, 47
  ],
  [
    44, 14, 15, 16, 66, 36, 37
  ],
  [
    33, 10, 11, 12, 45, 26, 27
  ],
  [
    22,  6,  7, 8, 1, 16, 17
  ],
  [
    1, 2, 3, 4, 5, 6, 7
  ]
]
*/
// console.log(matrix[0][0]); // --> 1
// console.log(matrix[3][2]); // --> 15

// const rotatedMatrix = rotateMatrix(matrix);
// console.log(rotatedMatrix[0][0]); // --> 13
// console.log(rotatedMatrix[3][2]); // --> 8
