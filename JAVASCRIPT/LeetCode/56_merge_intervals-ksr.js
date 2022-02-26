/**
 * https://leetcode.com/problems/merge-intervals/
 * 
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * 중복되는 범위를 구하는 문제입니다.
 * Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//! 테스트 통과 하지만 문제점 : 마지막에 Undefined 라서 처리를 했어야 함
var merge_1 = function (intervals) {
  // while  intervalse -> interval
  // if interval[0]<=end ?   // 범위에 들어가고
  //   if interval[1]>end?  // 밤위가 커진다면
  //        end=interval[1]
  // else // end보다 크다면
  //            start=interval[0]
  //            result.push

  // sort
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let [start, end] = [intervals[0][0], intervals[0][1]];
  let i = 0;

  while (i <= intervals.length - 1) {
    i++;
    let interval = intervals[i];
    // 마지막에 남아있는 부분이 누락되면서 반복문이 끝나서 조치 -> start와 end가 undefined가 된다.
    if (interval === undefined) {
      if (start < result[result.length - 1]) result[result.length - 1][1] = end;
      else result.push([start, end]);
      break;
    }

    if (interval[0] > end) {
      result.push([start, end]);
      // start, end 갱신
      start = interval[0];
      end = interval[1];
    } else if (interval[1] > end) {
      end = interval[1];
    }
  }
};

//! 해결 : 위의 풀이는 start, end를 변수로 하여 push할 떄 새로운 배열을 push
// ! 아래의 경우 push하는 배열을 선언하여 참조하도록 하여 값 변경되면 참조하는 값도 변경됨

var merge = function (intervals) {
  // sort
  intervals.sort((a, b) => a[0] - b[0]);

  let comp = [-1, -1];
  let result = [];

  for (const interval of intervals) {
    if (interval[0] > comp[1]) {
      comp = [interval[0], interval[1]];
      result.push(comp);
    } else {
      comp[1] = Math.max(comp[1], interval[1]);
    }
  }

  return result;
};

//! test
let input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(input)); //Output: [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
); // [[0,4]]

/**
 * Runtime: 131 ms, faster than 66.76% of JavaScript online submissions for Merge Intervals.
 * Memory Usage: 50.4 MB, less than 14.95% of JavaScript online submissions for Merge Intervals.
 */
