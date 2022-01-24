// 섬의 개수를 구하라.
/*
출처 : LeetCode 200. Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

? --> 1을 육지로하고 0을 물로 가정한 2D 그리드맵이 있을 때, 섬의 개수를 계산하는 문제. (연결되어있는 1의 덩어리 개수를 구하는 문제)

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constrains
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

/*
! <문제접근방법>

! 한 개의 node를 선택해서 연속된 1을 찾는 문제 (지뢰찾기 같은..)
- 1인 Node 를 선택하고 
- 주변의 인접한 Node들을 확인한다
- 1이면  그 Node로 이동하여 주변의 인접한 Node 들을 다시 확인한다
- 1이면  또 그 Node로 이동하여 주변의 인접한 Node들을 다시 확인한다.
- 만약 0인 Node가 있다면 그대로 return 

! DFS? BFS? 
- 시작 노드부터 하여 연속된 1을 계속 같은 확인 작업을 거쳐서 찾으므로 재귀적으로 풀 수 있다. 
- BFS는 아닌 이유 : 섬이 3개라면 시작 노드는 3개이다. BFS는 이 3개의 노드를 번갈하아며 탁색을 하는 방법이라고 생각하는데, 각 시작 노드는 DFS처럼 풀게 된다.
*/

/*
! Sudocode
function() num of island {

  for(i to arr)
    for(j to arr)
      if  arr[i][j] === 1 ?  // 시작 노드를 찾는 부분
       dfs(arr,i,j)
       count++; // 시작 node가 끝날 떄마나 count증가
  return count
}

dfs(arr,i,j){
  if i , j out of range OR
  if arr[i][j] ===0 
  return ; 

  arr[i][j]=0  이미 지나온 곳은 0으로  -> 다름 시작 노드를 탐색할 때 이미 지나온 곳을 피하기위해

  인접한 Node들이 1인지 확인 -> 같은 작업 반복
  dfs(arr,i,j+1) // 우측 노드 탐색
  dfs(arr,i+1,j) // 아래 노드 탐색
  
}
*/

var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        count += 1;
      }
    }
  }
  return count;
};
const dfs = (arr, i, j) => {
  const [limitI, limitJ] = [arr.length, arr[0].length];
  if (i >= limitI || i < 0 || j < 0 || j >= limitJ || arr[i][j] === "0") return;

  arr[i][j] = "0"; // 가지치기

  dfs(arr, i, j + 1);
  dfs(arr, i, j - 1);
  dfs(arr, i + 1, j);
  dfs(arr, i - 1, j);
};

let grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

//   dfs(arr, i, j + 1); dfs(arr, i + 1, j); 만 있으면 왼쪽은 순회를 하지 않음
let grid3 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];
console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));
