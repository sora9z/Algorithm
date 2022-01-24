/*
출처 : Leetcode 198.House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

? --> 한 칸 이상 떨어진 집만 훔칠 수 있다. input은 각 집에서 훔칠 수 있는 액수가 적혀있다. 훔칠 수 있는 가장 큰 금액을 return 한다.


ex1
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

ex2
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

/*
! <문제접근방법>

! 예시

- 8 , 7 , 3 , 9 가 있을 때 
max(8,7) = 8이고 
max(8을 훔친 다음 3을 훔친 것과  VS 8을 훔친 다음 9를 훈친 것 )
max(rob(2)까지 훔친 것 vs rob(1)까지 훔치고 9를 훔친 것 ) => max(rob(2),rob(1)+9)
rob(1)=max(8,7)




/*
! Sudocode

*/
