/*
25_robotPath
- 문제 : M X N 행렬의 방의 지도가 있을 때, 1은 장애물, 0은 이동이 가능한 통로이다.
      로봇은 지도 윌흘 일분에 한 칸씩 상하좌우로 이동할 수 있다. 
      로봇의 위치와 목표 지점이 함께 주어질 경우, 로봇이 목표 지점까지 도달하는데 걸리는 최소 시간을 return 한다
- 인자 1 : room room.length = M , room[i] 는 number 타입을 갖는 배열 room[i].length=N, room[i][j] = 0또는 1

- 인자 2 : src ; numbet type을 요소로 갖는 배열. src.length=2 , src의 요소는 차례대로 좌표형면 위의 x좧표 , y좌표 

- 인자 3 ; dst : number type을 요소로 갖는 배열 dst.length=2 dst[i]=0이상의 정수 dst 요소느 차례대로 좌퓨 평면 위의 y,x좌표

- 출력 : number typedmf 리턴한다.

- 주의 : M은 20이하의 자연수이다. 
- src, dst는 항상 로봇이 지나갈 수 있는 통로이다.
- src 에서 dst로 가는 경로는 항상 존재한다.
*/

/* 
? pseudcode

- Queue 배열을 한 개 생성한다. 
- Node 객체를 생성한다. 위치를 나타내는 x,y 와 몇 분째 step인지를 나타내는 count
- func findNode(Queue,node) -> 현재의 위치에서 상,하,좌,우에 0이 있는지 확인하고 있다면 Queue에 추가한다.  (node를 생성하고 초기화를 해주어야 함 . 추가한 좌표는 1로 바꾼다.
추가한  node는 1로 초기화한다. (다시 조뢰하지 않기 위해)
- func isAnswer -> 인자로 받은 Ndoe의 x와 y가 dst의 x와 y와 같다면 true 아니라면 false

result 
root = new Node(src,0)
findNode(Queue,root) queue 초기화

while(Queue.len){
    node = deQueue
    if(isAnswer(node)){
        result=node.count
        break
    }
    else {
        fincNode(Queue,node)
    }
}
*/

const robotPath = function (room, src, dst) {
  // TODO:
  let queue = [];
  class Node {
    constructor(x, y, count) {
      this.x = x;
      this.y = y;
      this.count = count;
    }
  }

  const findNode = (queue, node) => {
    // 상.하.좌.우 node 위치들
    const directions = [
      [node.x - 1, node.y],
      [node.x + 1, node.y],
      [node.x, node.y - 1],
      [node.x, node.y + 1],
    ];

    let [x, y] = [0, 0];
    let count = node.count + 1;

    for (let newNode of directions) {
      x = newNode[0];
      y = newNode[1];

      if (x > room.length - 1 || x < 0 || y > room[0].length - 1 || y < 0)
        continue;
      // 해당 노드가 0이라면 새로운 노드를 만들고 queue에 추가
      if (room[x][y] === 0) {
        const node = new Node(x, y, count);
        queue.push(node);
        // room[x,y]는 1로 (중복 조회 방지)
        room[x][y] = 1;
      }
    }
  };

  const isAnswer = (node) => {
    return node.x === dst[0] && node.y === dst[1] ? true : false;
  };

  let result = 0;
  const rootNode = new Node(src[0], src[1], 0);
  room[src[0]][src[1]] = 1;
  findNode(queue, rootNode); // queue 초기화

  while (queue.length) {
    let node = queue.shift();
    if (isAnswer(node)) {
      result = node.count;
      break;
    }
    findNode(queue, node);
  }

  return result;
};

// ! Test

let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8

// ?  ref
const robotPath_Ref = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    // 현재 위치
    const [row, col] = candi;

    // 배열의 범위를 벗어난 경우
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;
};
