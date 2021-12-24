/* 02_bpardGame
board Game roll
1. 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
2. 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
3. 조작의 기회는 딱 한 번 주어진다.
4. 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
- 예시: UDDLLRRDRR, RRRRR
5. 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
6. 방문한 곳을 또 방문해도 숫자를 획득할 수 있다.
7. 보드 밖을 나간 말은 OUT 처리가 된다.
8. 칸 안의 숫자는 0 또는 1이다.
- 단, 좌표 왼쪽 상단(0, 0)은 항상 0이다.
9.획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다

INPUT : number type의 2차원 배열, 2<=board.length<-1,000
INOUT2 : string type의 대문자 영어가 쓰여진 문자열 , 1<=operation.length<=board.length*2
, ULDR이외의 문자열을 없다.
output : Number type 반환
- 주의사할 : 말이 board 바깥으로 나가면 OUT을 return 한다.
*/

function boardGame(board, operation) {
  // Todo

  // position 을 가리키는 length=2인 배열을 선언한다 초기값은 0,0
  let position = [0, 0];
  let score = 0;
  // operation으로 반복문을 돌린다.
  for (let direction of operation) {
    // Switch 문을 실행한다.
    switch (direction) {
      case "U":
        position[0] -= 1; //  U 이면 position을 위로 이동
        if (position[0] < 0) return "OUT";
        // 범위 밖이면 out을 return
        else score += board[position[0]][position[1]]; // 범위 내이면 score에 점수를 더한다.
        break;

      case "D":
        position[0] += 1;
        if (position[0] >= board.length) return "OUT";
        else score += board[position[0]][position[1]];
        break;

      case "R":
        position[1] += 1;
        if (position[1] >= board.length) return "OUT";
        else score += board[position[0]][position[1]];
        break;

      case "L":
        position[1] -= 1;
        if (position[1] < 0) return "OUT";
        else score += board[position[0]][position[1]];
        break;
    }
  }
  return score;
}

const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
];
const output1 = boardGame(board1, "RRDLLD");
console.log(output1); // 4

const board2 = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
];
const output2 = boardGame(board2, "UUUDD");
console.log(output2); // 'OUT'

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
const output3 = boardGame(board3, "DDRRRUDUDUD");
console.log(output3); // 0
