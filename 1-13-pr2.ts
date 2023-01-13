/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Using recursion, wirte a function that splits an array in half and returns the half that would contain the target
if the returned array is 2 items 

*/

function recursion(
  arr: number[],
  target: number,
  start: number,
  end: number,
): any {
  if (arr[0] > target) return 0
  if (arr[arr.length - 1] < target) return arr.length
  if (end - start === 1) {
    if (arr[start] === target) return start
    if (arr[end] === target) return end
    if (arr[start] < target && target < arr[end]) return end
  }

  const middleIndex = Math.round((end + start) / 2)
  if (arr[middleIndex] === target) return middleIndex
  if (arr[middleIndex] > target) {
    return recursion(arr, target, start, middleIndex)
  }
  if (arr[middleIndex] < target) {
    return recursion(arr, target, middleIndex, end)
  }
}

function searchInsert(nums: number[], target: number): number {
  return recursion(nums, target, 0, nums.length - 1)
}

console.log(searchInsert([2, 7, 8, 9, 10], 9))
