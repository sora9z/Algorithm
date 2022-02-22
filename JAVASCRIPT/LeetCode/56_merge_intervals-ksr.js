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
var merge = function (intervals) {
  // while  intervalse -> interval
  // if interval[0]<=end ?   // 범위에 들어가고
  //   if interval[1]>end?  // 밤위가 커진다면
  //        end=interval[1]
  // else // end보다 크다면
  //            start=interval[0]
  //            result.push
  let result = [];
  let [start, end] = [intervals[0][0], intervals[0][1]];
  let i = 0;
  while (i <= intervals.length - 1) {
    i++;
    let interval = intervals[i];
    if (interval === undefined) {
      if (start < result[result.length - 1]) result[result.length - 1][1] = end;
      else result.push([start, end]);
    } else if (interval[0] <= end) {
      if (interval[1] > end) end = interval[1];
    } else {
      result.push([start, end]);
      start = interval[0];
      end = interval[1];
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
