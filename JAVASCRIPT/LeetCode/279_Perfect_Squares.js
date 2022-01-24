/*
출처 : Leetcode 279_Perfect Squares
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

? 완전 제곱수란 한 개의 숫자가 여러 개의 정수의 합으로 계산이 되는데, 각 정수가 모두 어떤 수의 제곱으로 표현될 수 있는 경우를 말한다.
? 예를 들어 16=4+4+4+4 인데, 4는 2의 제곱이다. 13은 4+9인데 4응 2의제곱, 9는 3의 제곱수이다.

ex1 
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

ex2
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

Constraints:
1 <= n <= 10^4
*/

/*
! <문제접근방법>

! 1. 이 문제는 Graph 개념으로 접근해야 하는 문제라고 생각. 이유는
1 - Number
- Number = num1 + num2 + num3 으로 표시가 된다.
- num들의 범위는 제한되어있는데, 1부터 입력으로 주어진 n까지의 연속된 숫자들이 후보가 된다.
- 후보의 범위를 더욱 줄일 수 있는데, 후보를 제곱했을 때 n보다 작거나 같은 경우만 후보가 된다.
[m1 m2 m3..] ==> 
- 이 후보들이 graph의 node가 되므로 이 문제는 Graph 순회 문제이다.

! 2.BFS 와 DFS가 있는데, 이 문제가 BFS인 이유는 
- 가령, 숫자 13을 만드는데, 1+1+1+....+1 이 있을 수 있고, 9+4 가 있을 수 있다. 
- 만약 후보 node들이 오름차순으로 정렬되어있고 DFS로 진행을 한다면 전체 경우를 구하게 되고, 이 중 최소인 값을 따로 뽑아내야 하는 추가작업이 필요하다.(시간복잡도도 안좋아 질듯) 
- 따라서, BFS로 돌면서 제일 최소 depth로 만족하는 것을 찾는 것이 제일 좋은 선택이라고 생각.
*/

/*
! Sudocode
13 , [1,2,3...]   => [1,4,9]
nodeList=getNodeList(n) 후보 노드를 생성
[node,sum,depth]
queue에 들어가는 Node = [node,sum = depth동안의 합, i = 몇 번재 depth인지] 
queue=nodelist.map(return [node,0,0]) 배열을 생성 후  queue에 초기 node로 초기화 (sum은 0, i는 1이다)

whie(queue)
    let [node,sum,depth]=queue.Extract 1 node 
    if sum === n ? return depth
    sum + = node
    depth + = 1
    for(nodeList)
    queue.push(node,sum,depth)

if not fount 
return -1
*/

var numSquares = function (n) {
  if (n === 1) return 1;
  const nodeList = getNodeList(n);
  let queue = [];
  queue = nodeList.map((node) => [node, 0, 0]);

  while (queue.length) {
    let [node, sum, depth] = queue.shift();
    (sum += node), (depth += 1);
    if (sum === n) return depth;
    for (nd of nodeList) {
      queue.push([nd, sum, depth]);
    }
  }
  return -1;
};

const getNodeList = (n) => {
  let arr = [];
  for (let i = 1; i < n; i++) {
    i * i <= n ? arr.push(i * i) : null;
  }
  return arr;
};

console.log(numSquares(13));
console.log(numSquares(488));

/*
! 개선해야 할 부분 
위의 풀이의 경우 시강 복잡도가 O(n^2) 이다. 
Constraints: 1 <= n <= 10^4 이므로
O(nlonN)정도의 시간복잡도는 만들어야 함.
Comment로 남겨주길 바랍니다.
*/
