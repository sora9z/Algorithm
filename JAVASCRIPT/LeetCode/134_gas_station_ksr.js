// https://leetcode.com/problems/gas-station/

/*
TODO There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
TODO You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
TODO Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

?Example 1:
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

?Example 2:
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
 

?Constraints:

len == n
cost.length == n
1 <= n <= 105
0 <= gas[i], cost[i] <= 104
*/
// 최악의 경우..O(n^2) + a
let canCompleteCircuit1 = function (gas, cost) {
  function getStartIdx(start) {
    for (let i = start; i < gas.length; i++) {
      if (gas[i] - cost[i] > 0) return i;
    }
    return -1;
  }

  let len = gas.length;
  let start = -1;
  let truck = 0;

  while (start < len) {
    start = getStartIdx(start + 1);
    truck = gas[start];
    let index = start;

    for (let i = 0; i < len; i++) {
      if (truck - cost[index] >= 0) {
        truck -= cost[index];
        if (index >= len - 1) index = 0;
        else index++;
        truck += gas[index];
      } else {
        index = -1;
        break;
      }
    }
    if (index !== -1) return start;
  }

  return -1;
};

//
let canCompleteCircuit2 = function (gas, cost) {
  let len = gas.length;
  let start = -1;
  let sum = [];

  for (let i = 0; i < len; i++) {
    sum[i] = gas[i] - cost[i]; // gas 와 cost를 모두 더한 새로운 배열을 생성한다
    if (start < 0) {
      if (sum[i] >= 0) start = i; // start 정하기
    }
  }

  let truck = 0;
  i = start;
  let count = 0;
  while (start < len) {
    truck += sum[i];
    if (truck < 0) {
      start += 1;
      truck = 0;
      i = start;
      count = 0;
      continue;
    }
    if (i === len - 1) i = 0;
    else i++;
    count++;
    if (count >= len) return start; // 한 바퀴 다 돌았을때
  }
  return -1;
};

// 최대한 반복을 줄여보자
let canCompleteCircuit = function (gas, cost) {
  let len = gas.length;
  let start = -1;
  let truck = 0;
  let temp = 0;
  for (let i = 0; i < len; i++) {
    if (temp + gas[i] - cost[i] >= 0) {
      temp += gas[i] - cost[i];
      if (start < 0) start = i;
    } else {
      temp = 0;
      start = -1;
    }
    truck += gas[i] - cost[i];
  }
  return truck >= 0 ? start : -1;
};

//! test

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
// console.log(canCompleteCircuit([2], [2])); // -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
