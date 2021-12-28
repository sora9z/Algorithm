/* 계단을 한 번에 1개 또는 2개씩 오른다. N계단을 오를 수 있는 방법의 수는?
총 4개의 계단이 있다면
1,1,1,1   1,1,2  1,2,1  2,1,1   2,2  총 5가지가 있다

입력은 계산의 수 (자연수) 3 <= N <=45
*/

/* 
! 접근방법
5계단을 오른다고 했을 때, 5계단 전은 1계단 전인 4번째 계단과 2계단 전인 3번째 계단 뿐이다. 죽, 3번째 계단에서의 경우의수 + 4번째 계단을 오르는 경우의 수를 더해주면 되므로 Dynamic programming의 조건인   1) Optimal Substructure (최적부분구조) 를 만족한다.
또한, 5계단을 오르기 위해 5-1 계단을 오르는 경우와 5-2 걔단을 오르는 경우와 같이  
작은 문제들이 중복적으로 나타나므로 2) Overlapping Subproblems(중복된 하위 문제들) 조건에도 부합한다.

따라서 이 문제는 DP문제이며, Botton Up 방식으로 진행한다.
*/

const goUpStairs = (num) => {
  let memo = [0, 1, 2];

  for (let i = 3; i < num + 1; i++) memo[i] = memo[i - 1] + memo[i - 2];

  return memo[num];
};

console.log(goUpStairs(4));
console.log(goUpStairs(5));
console.log(goUpStairs(7));
console.log(goUpStairs(10));
console.log(goUpStairs(30));
